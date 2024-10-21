import { CloseIcon } from "./assets";
export default class VanillaSooner {
  defaults = {
    invert: false,
    position: "bottom-right",
    hotkey: ["altKey", "KeyT"],
    expand: false,
    closeButton: true,
    offset: "",
    theme: "light",
    className: "",
    richColors: false,
    duration: 5000,
    style: {},
    visibleToasts: 3,
    toastOptions: {},
    dir: "auto",
    gap: 10,
    loadingIcon: null,
    icons: {},
    containerAriaLabel: "Notifications",
    pauseWhenPageIsHidden: true,
    width: 356,
  };

  VIEWPORT_OFFSET = "32px";

  TOAST_LIFETIME = 4000;

  constructor(options) {
    this.version = "1.12.0";
    this.options = {};
    this.toastElement = null;
    this._rootElement = document.body;
    this.toasts = [];
    this.toastsCounter = 1;
    this.heights = [];
    this._init(options);
  }

  _init(options) {
    // Setting defaults
    this.options = Object.assign(this.defaults, options);
    this.possiblePositions = [];

    // Set event listener
    this.listeners = {};
    this.subscribe();
  }

  addToast(data) {
    this.toasts = [...this.toasts, data];
    this.emit("newtoast", data);

    console.log(this.toasts);
  }

  create(data) {
    const { message, ...rest } = data;
    const id =
      typeof data?.id === "number" || data.id?.length > 0
        ? data.id
        : this.toastsCounter++;
    const alreadyExists = this.toasts.find((toast) => toast.id === id);
    const dismissible =
      data.dismissible === undefined ? true : data.dismissible;

    if (alreadyExists) {
      this.toasts = this.toasts.map((toast) => {
        if (toast.id === id) {
          this.emit("newtoast", { ...toast, ...data, id, title: message });
          return { ...toast, ...data, id, dismissible, title: message };
        }
        return toast;
      });
    } else {
      this.addToast({ title: message, ...rest, dismissible, id });
    }
    return id;
  }

  dismiss(id) {
    if (!id) {
      this.toasts.forEach((toast) => {
        this.listeners.forEach((callbacks) => {
          callbacks.forEach((callback) => {
            callback({ id: toast.id, dismiss: true });
          });
        });
      });
    }

    this.listeners.forEach((callbacks) => {
      callbacks.forEach((callback) => {
        callback({ id, dismiss: true });
      });
    });

    return id;
  }

  message(message, data) {
    return this.create({ ...data, message });
  }

  error(message, data) {
    return this.create({ ...data, message, type: "error" });
  }

  success(message, data) {
    return this.create({ ...data, type: "success", message });
  }

  info(message, data) {
    return this.create({ ...data, type: "info", message });
  }

  warning(message, data) {
    return this.create({ ...data, type: "warning", message });
  }

  toastFunction = (message, data) => {
    const id = data?.id || this.toastsCounter++;
    this.addToast({ title: message, ...data, id });

    // console.log(this.toasts);

    return id;
  };

  getHistory = () => {
    return this.toasts;
  };

  on = (eventName, callback) => {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  };

  emit = (eventName, data) => {
    if (this.listeners[eventName]) {
      this.listeners[eventName].forEach((callback) => {
        callback(data);
      });
    }
  };

  subscribe = () => {
    this.on("newtoast", (data) => {
      // console.log("Toast created:", data);
      // calculate position
      this.possiblePositions = Array.from(
        new Set(
          [this.options.position].concat(
            this.toasts
              .filter((toast) => toast.position)
              .map((toast) => toast.position)
          )
        )
      );

      // console.log(this.toasts);

      if (this.toasts.length <= 1) {
        this.setExpanded(false);
      }

      if (this.toasts.length) {
        this.showToasts();
      }

      // console.log("position:", this.possiblePositions);
    });
  };

  setExpanded = (value) => {
    this.expanded = value;
  };

  setHeights = (toastId, position, newHeight) => {
    const alreadyExists = this.heights.find(
      (height) => height.toastId === toastId
    );
    if (!alreadyExists) {
      this.heights = [
        { toastId: toastId, height: newHeight, position: position },
        ...this.heights,
      ];
    } else {
      this.heights = this.heights.map((height) =>
        height.toastId === toastId ? { ...height, height: newHeight } : height
      );
    }
  };

  cn(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  getHeight = (elm) => {
    const tempLi = document.createElement("div");
    elm.style.setProperty("--width", `${this.options.width}px`);
    elm.style.setProperty("position", `unset !important`);
    tempLi.innerHTML = elm.outerHTML;
    tempLi.style.position = "absolute";
    tempLi.style.visibility = "hidden";
    document.body.appendChild(tempLi);
    const height = window.getComputedStyle(tempLi).height;
    document.body.removeChild(tempLi);

    elm.style.setProperty("--width", "");
    elm.style.setProperty("position", "");
    return parseFloat(height);
  };

  getDocumentDirection = () => {
    if (typeof window === "undefined") return "ltr";
    if (typeof document === "undefined") return "ltr"; // For Fresh purpose

    const dirAttribute = document.documentElement.getAttribute("dir");

    if (dirAttribute === "auto" || !dirAttribute) {
      return window.getComputedStyle(document.documentElement).direction;
    }

    return dirAttribute;
  };

  composeToastItem = (toast, toastOptions, orderedList) => {
    // console.log(toastOptions);

    const isFront = toastOptions.index === 0;
    const isVisible = toastOptions.index + 1 <= toastOptions.visibleToasts;
    // console.log(toastOptions.index + 1, toastOptions.visibleToasts);

    const toastType = toast.type;
    const dismissible = toast.dismissible !== false;
    const toastClassname = toast.className || "";
    const toastDescriptionClassname = toast.descriptionClassName || "";
    const duration =
      toast.duration || toastOptions.duration || this.TOAST_LIFETIME;
    const [y, x] = toastOptions.position.split("-");

    let initialHeight = "0px";

    const invert = toast.invert || toastOptions.ToasterInvert;
    const important = toast.important ? "assertive" : "polite";

    const listItem = document.createElement("li");
    listItem.setAttribute("aria-live", important);
    listItem.setAttribute("aria-atomic", "true");
    listItem.setAttribute("role", "status");
    listItem.setAttribute("tabindex", "0");
    listItem.setAttribute(
      "key",
      `${toastOptions.position}-${toastOptions.index}`
    );
    listItem.className = this.cn(
      toastOptions.className,
      toastClassname,
      toastOptions.classNames?.toast,
      toast?.classNames?.toast,
      toastOptions.classNames?.default,
      toastOptions.classNames?.[toastType],
      toast?.classNames?.[toastType]
    );
    listItem.setAttribute("data-sonner-toast", "");
    listItem.setAttribute(
      "data-rich-colors",
      toast.richColors ?? toastOptions.defaultRichColors
    );
    listItem.setAttribute("data-styled", "true");
    listItem.setAttribute("data-mounted", "false");
    listItem.setAttribute("data-promise", "false");
    listItem.setAttribute("data-removed", "false");
    // listItem.setAttribute("data-visible", isVisible);
    listItem.setAttribute("data-y-position", y);
    listItem.setAttribute("data-x-position", x);
    listItem.setAttribute("data-index", toastOptions.index);
    listItem.setAttribute("data-front", isFront);
    listItem.setAttribute("data-swiping", "false");
    listItem.setAttribute("data-dismissible", "true");
    listItem.setAttribute("data-type", toastType);
    listItem.setAttribute("data-invert", invert);
    listItem.setAttribute("data-swipe-out", "false");
    listItem.setAttribute(
      "data-expanded",
      this.expanded || toastOptions.expandByDefault
    );
    listItem.style.setProperty("--index", toastOptions.index);
    listItem.style.setProperty("--toasts-before", toastOptions.index);
    listItem.style.setProperty(
      "--z-index",
      toastOptions.toasts.length - toastOptions.index
    );

    const showCloseButton = true;

    if (showCloseButton) {
      const closeButton = document.createElement("button");
      closeButton.setAttribute("data-disabled", false);
      closeButton.setAttribute("data-close-button", true);

      closeButton.innerHTML = CloseIcon;

      listItem.appendChild(closeButton);
    }

    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("data-content", "");
    contentDiv.className = "";

    const titleDiv = document.createElement("div");
    titleDiv.setAttribute("data-title", "");
    titleDiv.className = "";
    titleDiv.textContent = toast.title;

    const descriptionDiv = document.createElement("div");
    descriptionDiv.setAttribute("data-description", "");
    descriptionDiv.className = "";
    descriptionDiv.innerHTML = toast.description;

    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(descriptionDiv);

    listItem.appendChild(contentDiv);

    // Calculate heights
    const listItemHeight = this.getHeight(listItem);
    this.setHeights(toast.id, toastOptions.position, listItemHeight);
    initialHeight = listItemHeight;

    const heightIndex =
      this.heights.findIndex((height) => {
        return height.toastId === toast.id;
      }) || 0;
    const toastsHeightBefore = this.heights.reduce(
      (prev, curr, reducerIndex) => {
        if (reducerIndex >= heightIndex) {
          return prev;
        }
        return prev + curr.height;
      },
      0
    );

    const offset = heightIndex * this.options.gap + toastsHeightBefore;
    // console.log(heightIndex, toastsHeightBefore);
    // console.log(offset);

    // listItem.style.setProperty("--offset", `${offset}px`);
    listItem.style.setProperty(
      "--initial-height",
      toastOptions.expandByDefault ? "auto" : `${initialHeight}px`
    );

    orderedList.style.setProperty(
      "--front-toast-height",
      `${this.heights[0]?.height || 0}px`
    );

    return listItem;
  };

  addFocusBlurListeners = (element, options = {}) => {
    let isFocusWithin = false;
    let lastFocusedElement = null;

    const { onBlur, onFocus, preventScroll = true } = options;

    element.addEventListener("blur", (event) => {
      if (isFocusWithin && !element.contains(event.relatedTarget)) {
        isFocusWithin = false;

        if (lastFocusedElement) {
          lastFocusedElement.focus({ preventScroll });
          lastFocusedElement = null;
        }

        if (typeof onBlur === "function") {
          onBlur(event);
        }
      }
    });

    element.addEventListener(
      "focus",
      (event) => {
        const isNotDismissible =
          event.target instanceof HTMLElement &&
          event.target.dataset.dismissible === "false";

        if (isNotDismissible) return;

        if (!isFocusWithin) {
          isFocusWithin = true;
          lastFocusedElement = event.relatedTarget;

          if (typeof onFocus === "function") {
            onFocus(event);
          }
        }
      },
      true
    );

    // Handle mouse enter
    element.addEventListener("mouseenter", (event) => {
      const childDivs = event.target.children;

      if (childDivs.length > 1) {
        for (let i = childDivs.length - 1; i >= 0; i--) {
          const childDiv = childDivs[i];
          childDiv.setAttribute("data-expanded", true);
        }
      }

      // console.log("Mouse entered the element", childDivs);
    });

    // Handle mouse move
    // element.addEventListener("mousemove", (event) => {
    //   const childDivs = event.target.children;
    //   console.log("Mouse is moving within the element", childDivs);
    // });

    // Handle mouse leave
    element.addEventListener("mouseleave", (event) => {
      const childDivs = event.target.children;

      if (childDivs.length > 1) {
        for (let i = childDivs.length - 1; i >= 0; i--) {
          const childDiv = childDivs[i];
          childDiv.setAttribute("data-expanded", false);
        }
      }

      // console.log("Mouse left the element", childDivs);
    });
  };

  showToasts = () => {
    let container = document.querySelector("section[data-sooner-container]");
    if (!container) {
      container = document.createElement("section");
      container.setAttribute("data-sooner-container", "");
      container.tabIndex = -1;
      document.body.appendChild(container);
    }

    const toastOptions = {
      defaultRichColors: this.options.richColors,
      duration: this.options.duration,
      className: this.options.className,
      descriptionClassName: this.options.descriptionClassName,
      invert: this.options.invert,
      visibleToasts: this.options.visibleToasts,
      classNames: this.options.classNames,
      expandByDefault: this.options.expand,
      gap: this.options.gap,
      expanded: this.options.expanded,
    };

    this.possiblePositions.map((position, index) => {
      const [y, x] = position.split("-");

      let orderedList = document.querySelector(
        `body section[data-sooner-container] ol[key="${position}"]`
      );
      if (!orderedList) {
        orderedList = document.createElement("ol");
        orderedList.setAttribute("key", position);
        orderedList.setAttribute(
          "dir",
          this.options.dir === "auto"
            ? this.getDocumentDirection()
            : this.options.dir
        );
        orderedList.setAttribute("tabIndex", -1);
        orderedList.setAttribute("class", this.options.className);
        orderedList.setAttribute("data-sonner-toaster", "");
        orderedList.setAttribute("data-theme", this.options.theme);
        orderedList.setAttribute("data-y-position", y);
        orderedList.setAttribute("data-x-position", x);

        const offset =
          typeof this.options.offset === "number"
            ? `${this.options.offset}px`
            : this.options.offset || this.VIEWPORT_OFFSET;

        orderedList.style.setProperty("--offset", offset);
        orderedList.style.setProperty("--width", `${this.options.width}px`);
        orderedList.style.setProperty("--gap", `${this.options.gap}px`);

        this.addFocusBlurListeners(orderedList, {
          onBlur: (event) => console.log(`List blur`, event),
          onFocus: (event) => console.log(`List focus`, event),
        });

        container.appendChild(orderedList);
      }

      // Render the toasts
      let listHtml = "";
      this.toasts
        .filter(
          (toast) =>
            (!toast.position && index === 0) || toast.position === position
        )
        .map((toast, index) => {
          const itemSelector = `body section[data-sooner-container] ol[key="${position}"] [key="${position}-${index}"]`;
          const alreadyExists = document.querySelector(itemSelector);
          if (!alreadyExists) {
            toastOptions.toasts = this.toasts.filter(
              (t) => t.position == toast.position
            );
            toastOptions.heights = this.heights.filter(
              (h) => h.position == toast.position
            );
            toastOptions.index = index;
            toastOptions.position = position;

            const item = this.composeToastItem(
              toast,
              toastOptions,
              orderedList
            );
            // orderedList.appendChild(item);
            orderedList.prepend(item);

            // Get all child divs
            const childDivs = orderedList.children;
            const newItem = document.querySelector(itemSelector);

            // Update the data-index attribute of each child div
            if (childDivs.length > 1) {
              for (let i = childDivs.length - 1; i >= 0; i--) {
                const childDiv = childDivs[i];
                const currentIndex = parseInt(
                  childDiv.getAttribute("data-index")
                );

                const newIndex = currentIndex + 1;
                const isVisible = newIndex <= toastOptions.visibleToasts - 1;

                const listItemHeight = this.getHeight(childDiv);
                const gap = this.options.gap * newIndex;

                childDiv.setAttribute("data-index", newIndex);
                childDiv.setAttribute("data-visible", isVisible);
                childDiv.setAttribute("data-front", false);
                childDiv.style.setProperty("--index", newIndex);
                childDiv.style.setProperty("--toasts-before", newIndex);
                childDiv.style.setProperty(
                  "--offset",
                  `${newIndex * listItemHeight + gap}px`
                );
                childDiv.style.setProperty(
                  "--z-index",
                  childDivs.length - newIndex
                );
              }
            }

            newItem?.setAttribute("data-index", 0);
            newItem?.setAttribute("data-front", true);
            newItem?.setAttribute("data-visible", true);
            newItem?.style.setProperty("--index", 0);
            newItem?.style.setProperty("--offset", 0);
            newItem?.style.setProperty("--toasts-before", 0);
            newItem?.style.setProperty("--z-index", childDivs.length);

            // setTimeout(() => {

            // }, 100);

            setTimeout(() => {
              newItem?.setAttribute("data-mounted", "true");
            }, 100);
          }
        });
    });
  };

  toast = Object.assign(
    this.toastFunction,
    {
      success: this.success,
      info: this.info,
      warning: this.warning,
      error: this.error,
      message: this.message,
      dismiss: this.dismiss,
    },
    { getHistory: this.getHistory }
  );
}
