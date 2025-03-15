window.addEventListener("DOMContentLoaded", () => {
    const bodyHtml = document.body;

    /**
     * menu mobile
     */
    const menuButton = document.querySelector('.button-menu');
    const menu = document.querySelector('.header-nav');
    if (menuButton) {
        menuButton.addEventListener('click', (e) => {
            e.preventDefault();
            bodyHtml.classList.toggle('menu-open');
        });
    }
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
            bodyHtml.classList.remove('menu-open');
        }
    });

    function handleResize() {
        const jsClone = document.querySelector('.js-clone').cloneNode(true);
        const jsInner = document.querySelector('.js-inner');
        const isMobile = window.matchMedia("(max-width: 1199px)").matches;
        if (isMobile) {
            if (!jsInner.contains(jsClone)) {
                jsInner.append(jsClone);
            }
        } else {
            const cloneElement = jsInner.querySelector('.js-clone');
            if (cloneElement) {
                jsInner.removeChild(cloneElement);
            }
        }
    }
    handleResize();
    window.matchMedia("(max-width: 1199px)").addEventListener("change", handleResize);

    /**
     * auto scroll right
     */
    const container = document.querySelector(".js-right-scroll");
    if (container) {
        const observer = new MutationObserver(scrollToRight);
        observer.observe(container, { childList: true, subtree: true });
    }
    function scrollToRight() {
        if (container) {
            container.scrollLeft = container.scrollWidth;
        }
    }
    scrollToRight();
    window.addEventListener("resize", scrollToRight);


    /**
     * tooltip
     */
    document.querySelectorAll(".js-tooltip").forEach((icon) => {
        icon.addEventListener("mouseenter", function () {
            let tooltipText = this.dataset.tooltip;
            let tooltip = document.createElement("div");
            tooltip.className = "custom-tooltip";
            tooltip.textContent = tooltipText;
            document.body.appendChild(tooltip);

            let rect = this.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX}px`;
            tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 3}px`;

            this.dataset.tooltipId = tooltip;
        });

        icon.addEventListener("mouseleave", function () {
            document.querySelector(".custom-tooltip")?.remove();
        });
    });

    /**
     * replace name
     */
    function updateNamesForMobile() {
        const isMobile = window.matchMedia("(max-width: 575px)").matches;
        const splitName = document.querySelectorAll(".js-split-name");

        splitName.forEach(nameEl => {
            const originalText = nameEl.textContent.trim();

            if (isMobile) {
                if (originalText.includes("days ago")) {
                    nameEl.textContent = originalText.replace(/(\d+) days ago/, "$1d ago");
                } else {
                    let nameParts = originalText.split(" ");
                    if (nameParts.length > 1) {
                        nameEl.textContent = nameParts[0] + " " + nameParts[1][0] + ".";
                    }
                }
            } else {
                nameEl.textContent = originalText;
            }
        });
    }

    updateNamesForMobile();
    window.addEventListener('resize', updateNamesForMobile);





});


//If you really need Jquery
/*
$(document).ready(function(){

})
 */