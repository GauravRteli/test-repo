/*================================================
Enhanced Responsive Web App JavaScript
Modern functionality with performance optimizations
==================================================*/

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // Enhanced accordion functionality with smooth animations
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const collapse = item.querySelector(".accordion-collapse");
    const button = item.querySelector(".accordion-button");

    if (collapse && collapse.classList.contains("show")) {
      item.classList.add("active");
    }

    if (collapse) {
      // Enhanced event listeners with better UX
      collapse.addEventListener("shown.bs.collapse", () => {
        item.classList.add("active");
        // Add smooth scroll to expanded item
        setTimeout(() => {
          item.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 300);
      });

      collapse.addEventListener("hidden.bs.collapse", () => {
        item.classList.remove("active");
      });
    }

    // Add keyboard navigation
    if (button) {
      button.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          button.click();
        }
      });
    }
  });

  // Enhanced scroll animations with Intersection Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe all elements with animation classes
  document
    .querySelectorAll(
      ".animate-on-scroll, .fade-in, .slide-up, .slide-left, .slide-right",
    )
    .forEach((el) => {
      observer.observe(el);
    });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Enhanced form validation and submission
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic form validation
      const inputs = form.querySelectorAll(
        "input[required], textarea[required]",
      );
      let isValid = true;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add("error");
          input.classList.remove("success");
        } else {
          input.classList.remove("error");
          input.classList.add("success");
        }
      });

      if (isValid) {
        // Show success message or submit form
        showNotification("Form submitted successfully!", "success");
        // You can uncomment the next line to actually submit the form
        form.submit();
      } else {
        showNotification("Please fill in all required fields.", "error");
      }
    });

    // Real-time validation
    const formInputs = form.querySelectorAll("input, textarea");
    formInputs.forEach((input) => {
      input.addEventListener("blur", function () {
        if (this.hasAttribute("required") && !this.value.trim()) {
          this.classList.add("error");
          this.classList.remove("success");
        } else if (this.value.trim()) {
          this.classList.remove("error");
          this.classList.add("success");
        }
      });

      input.addEventListener("input", function () {
        if (this.classList.contains("error") && this.value.trim()) {
          this.classList.remove("error");
          this.classList.add("success");
        }
      });
    });
  });

  // Notification system
  let errorNotificationActive = false;
  function showNotification(message, type = "info") {
    if (type === "error" && errorNotificationActive) return; // Prevent duplicate error popups

    const notification = document.createElement("div");
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    if (type === "error") errorNotificationActive = true;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.classList.add("show");
    }, 100);

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
        if (type === "error") errorNotificationActive = false;
      }, 300);
    }, 3000);
  }

  // Lazy loading for images
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          img.classList.add("loaded");
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });

  // Performance optimization: Debounced scroll events
  let scrollTimeout;
  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      // Handle scroll-based animations
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll(".parallax");

      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });

      // Update scroll progress indicators
      updateScrollProgress();
    }, 16); // ~60fps
  });

  // Scroll progress indicator
  function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // Create or update progress bar
    let progressBar = document.querySelector(".scroll-progress");
    if (!progressBar) {
      progressBar = document.createElement("div");
      progressBar.className = "scroll-progress";
      progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
                z-index: 9999;
                transition: width 0.1s ease;
            `;
      document.body.appendChild(progressBar);
    }
    progressBar.style.width = scrollPercent + "%";
  }

  // Touch gesture support for mobile
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  });

  document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diffX = touchStartX - touchEndX;
    const diffY = touchStartY - touchEndY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
      if (diffX > 0) {
        // Swipe left
        console.log("Swipe left detected");
        // Add your swipe left functionality here
      } else {
        // Swipe right
        console.log("Swipe right detected");
        // Add your swipe right functionality here
      }
    } else if (Math.abs(diffY) > swipeThreshold) {
      if (diffY > 0) {
        // Swipe up
        console.log("Swipe up detected");
      } else {
        // Swipe down
        console.log("Swipe down detected");
      }
    }
  }

  // Enhanced mobile menu functionality
  const mobileMenuToggle = document.querySelector(".navbar-toggler");
  const mobileMenu = document.querySelector(".navbar-collapse");

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
      document.body.classList.toggle("menu-open");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !mobileMenu.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)
      ) {
        mobileMenu.classList.remove("show");
        document.body.classList.remove("menu-open");
      }
    });

    // Close mobile menu when clicking on a link
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("show");
        document.body.classList.remove("menu-open");
      });
    });
  }

  // Enhanced search functionality
  const searchInputs = document.querySelectorAll(
    'input[type="search"], .search-input',
  );
  searchInputs.forEach((input) => {
    let searchTimeout;
    input.addEventListener("input", (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        performSearch(e.target.value);
      }, 300);
    });
  });

  function performSearch(query) {
    if (query.length < 2) return;

    // Add your search logic here
    console.log("Searching for:", query);

    // Example: Highlight search results
    const searchableElements = document.querySelectorAll(".searchable");
    searchableElements.forEach((element) => {
      const text = element.textContent.toLowerCase();
      if (text.includes(query.toLowerCase())) {
        element.classList.add("search-highlight");
      } else {
        element.classList.remove("search-highlight");
      }
    });
  }

  // Enhanced loading states
  function showLoading(element) {
    element.classList.add("loading");
  }

  function hideLoading(element) {
    element.classList.remove("loading");
  }

  // Enhanced error handling
  window.addEventListener("error", (e) => {
    console.error("JavaScript error:", e.error);
    //showNotification('An error occurred. Please try again.', 'error');
  });

  // Enhanced accessibility
  document.addEventListener("keydown", (e) => {
    // Escape key to close modals/menus
    if (e.key === "Escape") {
      const openModals = document.querySelectorAll(
        ".modal.show, .navbar-collapse.show",
      );
      openModals.forEach((modal) => {
        modal.classList.remove("show");
      });
      document.body.classList.remove("menu-open");
    }
  });

  // Enhanced performance monitoring
  if ("performance" in window) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType("navigation")[0];
        console.log(
          "Page load time:",
          perfData.loadEventEnd - perfData.loadEventStart,
          "ms",
        );
      }, 0);
    });
  }

  // Enhanced responsive utilities
  function isMobile() {
    return window.innerWidth <= 768;
  }

  function isTablet() {
    return window.innerWidth > 768 && window.innerWidth <= 1024;
  }

  function isDesktop() {
    return window.innerWidth > 1024;
  }

  function isUltraSmallScreen() {
    return window.innerWidth <= 319;
  }

  // Responsive behavior adjustments
  function adjustForScreenSize() {
    if (isUltraSmallScreen()) {
      document.body.classList.add("ultra-small-view");
      document.body.classList.remove(
        "mobile-view",
        "tablet-view",
        "desktop-view",
      );

      // Additional optimizations for ultra-small screens
      optimizeForUltraSmallScreen();
    } else if (isMobile()) {
      document.body.classList.add("mobile-view");
      document.body.classList.remove(
        "ultra-small-view",
        "tablet-view",
        "desktop-view",
      );
    } else if (isTablet()) {
      document.body.classList.add("tablet-view");
      document.body.classList.remove(
        "ultra-small-view",
        "mobile-view",
        "desktop-view",
      );
    } else {
      document.body.classList.add("desktop-view");
      document.body.classList.remove(
        "ultra-small-view",
        "mobile-view",
        "tablet-view",
      );
    }
  }

  // Ultra-small screen optimizations
  function optimizeForUltraSmallScreen() {
    // Reduce animation complexity for better performance
    const animatedElements = document.querySelectorAll(
      ".animate-on-scroll, .fade-in, .slide-up, .slide-left, .slide-right",
    );
    animatedElements.forEach((el) => {
      el.style.transition = "opacity 0.3s ease";
    });

    // Simplify hover effects
    const hoverElements = document.querySelectorAll(
      ".hover-lift, .hover-scale, .hover-glow",
    );
    hoverElements.forEach((el) => {
      el.style.transform = "none";
      el.style.boxShadow = "none";
    });

    // Optimize images for ultra-small screens
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (img.width > 300) {
        img.style.maxWidth = "100%";
        img.style.height = "auto";
      }
    });

    // Simplify navigation for ultra-small screens
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach((link) => {
      link.style.padding = "0.5rem 0.25rem";
      link.style.fontSize = "0.9rem";
    });

    // Optimize buttons for better touch targets
    const buttons = document.querySelectorAll("button, .btn, .btn-custom");
    buttons.forEach((button) => {
      button.style.minHeight = "44px";
      button.style.minWidth = "44px";
      button.style.padding = "0.5rem";
      button.style.fontSize = "0.9rem";
    });

    // Optimize form inputs
    const inputs = document.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      input.style.minHeight = "44px";
      input.style.fontSize = "0.9rem";
      input.style.padding = "0.5rem";
    });

    // Simplify cards and containers
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.style.marginBottom = "0.5rem";
      card.style.padding = "0.5rem";
    });

    // Optimize accordion for ultra-small screens
    const accordionButtons = document.querySelectorAll(".accordion-button");
    accordionButtons.forEach((button) => {
      button.style.padding = "0.5rem";
      button.style.fontSize = "0.8rem";
      button.style.minHeight = "44px";
    });

    const accordionBodies = document.querySelectorAll(".accordion-body");
    accordionBodies.forEach((body) => {
      body.style.padding = "0.5rem";
      body.style.fontSize = "0.8rem";
    });

    // Optimize notifications for ultra-small screens
    const notifications = document.querySelectorAll(".notification");
    notifications.forEach((notification) => {
      notification.style.right = "5px";
      notification.style.left = "5px";
      notification.style.padding = "0.5rem";
      notification.style.fontSize = "0.8rem";
      notification.style.maxWidth = "none";
    });

    // Optimize modals for ultra-small screens
    const modals = document.querySelectorAll(".modal-dialog");
    modals.forEach((modal) => {
      modal.style.margin = "0.25rem";
      modal.style.maxWidth = "calc(100% - 0.5rem)";
    });

    // Optimize tables for ultra-small screens
    const tables = document.querySelectorAll("table");
    tables.forEach((table) => {
      table.style.fontSize = "0.8rem";
    });

    const tableCells = document.querySelectorAll("th, td");
    tableCells.forEach((cell) => {
      cell.style.padding = "0.25rem";
    });

    // Optimize lists for ultra-small screens
    const lists = document.querySelectorAll("ul, ol");
    lists.forEach((list) => {
      list.style.paddingLeft = "1rem";
    });

    const listItems = document.querySelectorAll("li");
    listItems.forEach((item) => {
      item.style.marginBottom = "0.25rem";
    });

    // Optimize links for ultra-small screens
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.style.fontSize = "0.9rem";
      link.style.padding = "0.25rem 0";
    });

    // Optimize icons for ultra-small screens
    const icons = document.querySelectorAll(
      ".fa-lg, .fa-2x, .fa-3x, .fa-4x, .fa-5x",
    );
    icons.forEach((icon) => {
      if (icon.classList.contains("fa-lg")) {
        icon.style.fontSize = "1.2em";
      } else if (icon.classList.contains("fa-2x")) {
        icon.style.fontSize = "1.5em";
      } else if (icon.classList.contains("fa-3x")) {
        icon.style.fontSize = "2em";
      } else if (icon.classList.contains("fa-4x")) {
        icon.style.fontSize = "2.5em";
      } else if (icon.classList.contains("fa-5x")) {
        icon.style.fontSize = "3em";
      }
    });

    // Optimize spacing for ultra-small screens
    const spacingElements = document.querySelectorAll(
      ".py-5, .py-4, .mb-5, .mb-4, .mt-5",
    );
    spacingElements.forEach((element) => {
      if (element.classList.contains("py-5")) {
        element.style.paddingTop = "1rem";
        element.style.paddingBottom = "1rem";
      } else if (element.classList.contains("py-4")) {
        element.style.paddingTop = "0.75rem";
        element.style.paddingBottom = "0.75rem";
      } else if (element.classList.contains("mb-5")) {
        element.style.marginBottom = "1rem";
      } else if (element.classList.contains("mb-4")) {
        element.style.marginBottom = "0.75rem";
      } else if (element.classList.contains("mt-5")) {
        element.style.marginTop = "1rem";
      }
    });

    // Optimize grid and flex layouts for ultra-small screens
    const gridElements = document.querySelectorAll(".responsive-grid");
    gridElements.forEach((grid) => {
      grid.style.gridTemplateColumns = "1fr";
      grid.style.gap = "0.5rem";
    });

    const flexElements = document.querySelectorAll(".responsive-flex");
    flexElements.forEach((flex) => {
      flex.style.flexDirection = "column";
      flex.style.gap = "0.5rem";
    });

    const flexItems = document.querySelectorAll(".responsive-flex > *");
    flexItems.forEach((item) => {
      item.style.flex = "1 1 100%";
      item.style.minWidth = "0";
    });

    // Optimize container padding for ultra-small screens
    const containers = document.querySelectorAll(".container");
    containers.forEach((container) => {
      container.style.paddingLeft = "0.25rem";
      container.style.paddingRight = "0.25rem";
    });

    // Optimize row and column spacing for ultra-small screens
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => {
      row.style.marginLeft = "-2.5px";
      row.style.marginRight = "-2.5px";
    });

    const columns = document.querySelectorAll(
      ".col, .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-sm, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-md, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-lg, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-xl, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12",
    );
    columns.forEach((column) => {
      column.style.paddingLeft = "2.5px";
      column.style.paddingRight = "2.5px";
    });

    // Optimize text sizes for ultra-small screens
    const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
      if (heading.tagName === "H1") {
        heading.style.fontSize = "1.5rem";
        heading.style.lineHeight = "1.2";
      } else if (heading.tagName === "H2") {
        heading.style.fontSize = "1.25rem";
        heading.style.lineHeight = "1.2";
      } else if (heading.tagName === "H3") {
        heading.style.fontSize = "1.1rem";
        heading.style.lineHeight = "1.2";
      } else {
        heading.style.fontSize = "1rem";
        heading.style.lineHeight = "1.2";
      }
    });

    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach((p) => {
      p.style.fontSize = "0.9rem";
      p.style.lineHeight = "1.3";
    });

    // Optimize specific existing classes for ultra-small screens
    const existingClasses = document.querySelectorAll(
      ".yttr, .drgrrr, .testim, .tyui, .yrce",
    );
    existingClasses.forEach((element) => {
      if (element.classList.contains("yttr")) {
        element.style.fontSize = "28px";
        element.style.lineHeight = "1.2";
      } else if (element.classList.contains("drgrrr")) {
        element.style.fontSize = "20px";
        element.style.lineHeight = "1.3";
      } else if (element.classList.contains("testim")) {
        element.style.fontSize = "22px";
        element.style.lineHeight = "1.3";
      } else if (element.classList.contains("tyui")) {
        element.style.fontSize = "20px";
        element.style.lineHeight = "1.3";
      } else if (element.classList.contains("yrce")) {
        element.style.fontSize = "20px";
        element.style.lineHeight = "1.3";
      }
    });

    // Optimize scroll box for ultra-small screens
    const scrollBoxes = document.querySelectorAll(".scroll-box");
    scrollBoxes.forEach((box) => {
      box.style.height = "200px";
      box.style.overflowY = "auto";
    });

    // Optimize image containers for ultra-small screens
    const imageContainers = document.querySelectorAll(".image-container");
    imageContainers.forEach((container) => {
      container.style.position = "relative";
      container.style.width = "100%";
      container.style.overflow = "hidden";
    });

    // Optimize section titles for ultra-small screens
    const sectionTitles = document.querySelectorAll(".section-title h2");
    sectionTitles.forEach((title) => {
      title.style.fontSize = "12px";
      title.style.lineHeight = "1.3";
    });

    // Optimize icon circles for ultra-small screens
    const iconCircles = document.querySelectorAll(".icon-circle");
    iconCircles.forEach((circle) => {
      circle.style.marginLeft = "0";
      circle.style.width = "40px";
      circle.style.height = "40px";
    });

    // Optimize feature cards for ultra-small screens
    const featureCards = document.querySelectorAll(".feature-card");
    featureCards.forEach((card) => {
      card.style.height = "auto";
      card.style.marginBottom = "10px";
      card.style.padding = "10px";
    });

    // Optimize payment cards for ultra-small screens
    const paymentCards = document.querySelectorAll(".payment-card");
    paymentCards.forEach((card) => {
      card.style.marginBottom = "10px";
      card.style.padding = "10px";
    });

    // Optimize service info for ultra-small screens
    const serviceInfos = document.querySelectorAll(".service-info p");
    serviceInfos.forEach((info) => {
      info.style.textAlign = "left";
      info.style.lineHeight = "1.4";
      info.style.fontSize = "14px";
    });

    // Optimize mockup images for ultra-small screens
    const mockupImages = document.querySelectorAll(".mockup-img");
    mockupImages.forEach((img) => {
      img.style.height = "auto";
      img.style.maxWidth = "100%";
    });

    // Optimize background elements for ultra-small screens
    const backgroundElements = document.querySelectorAll(".yerevsd");
    backgroundElements.forEach((element) => {
      element.style.backgroundRepeat = "no-repeat";
      element.style.backgroundSize = "cover";
      element.style.padding = "15px";
    });

    // Optimize spacing elements for ultra-small screens
    const spacingElements2 = document.querySelectorAll(".rffh, .bgye");
    spacingElements2.forEach((element) => {
      if (element.classList.contains("rffh")) {
        element.style.padding = "10px 0";
      } else if (element.classList.contains("bgye")) {
        element.style.paddingBottom = "15px";
        element.style.marginLeft = "0";
      }
    });

    console.log("Ultra-small screen optimizations applied");
  }

  // Initial call and resize listener
  adjustForScreenSize();
  window.addEventListener("resize", adjustForScreenSize);

  // Enhanced smooth scrolling for all internal links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);

      if (target) {
        const headerHeight =
          document.querySelector(".navbar").offsetHeight || 0;
        const targetPosition = target.offsetTop - headerHeight - 20;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Enhanced back to top functionality
  const backToTopBtn = document.querySelector(".top-btn");
  if (backToTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    });

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Enhanced image optimization
  function optimizeImages() {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      // Add loading="lazy" to images that don't have it
      if (!img.hasAttribute("loading")) {
        img.setAttribute("loading", "lazy");
      }

      // Add error handling
      img.addEventListener("error", function () {
        this.style.display = "none";
        console.warn("Image failed to load:", this.src);
      });
    });
  }

  optimizeImages();

  // Enhanced cookie consent (if needed)
  function checkCookieConsent() {
    if (!localStorage.getItem("cookieConsent")) {
      showNotification(
        "This website uses cookies to enhance your experience.",
        "info",
      );
      // Add your cookie consent logic here
    }
  }

  // Initialize cookie consent check
  setTimeout(checkCookieConsent, 2000);
});
