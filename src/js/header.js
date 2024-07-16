export function header() {
        // const header = document.getElementById("header");
        const main = document
        .getElementById("main")
        .offsetHeight;
    // let scrollOffset = window.pageYOffset; Fixed Header
    window.onscroll = function showHeader() {
        let header = document.getElementById("header");

        if (window.pageYOffset > 50) {
            header
                .classList
                .add('fixed');
        } else {
            header
                .classList
                .remove('fixed');
        }
    }

    // Smooth scroll
    const scrollLinks = document.querySelectorAll("[data-scroll]");

    scrollLinks.forEach(function (link) {
        link
            .addEventListener("click", function (event) {
                event.preventDefault();

                const blockId = this.getAttribute("data-scroll");
                const blockOffset = document
                    .querySelector(blockId)
                    .offsetTop;

                document
                    .querySelectorAll("#nav a")
                    .forEach(function (navLink) {
                        navLink
                            .classList
                            .remove("active");
                    });
                this
                    .classList
                    .add("active");

                window.scrollTo({top: blockOffset, behavior: "smooth"});
            });
    });

    // Menu nav toggle
    const navToggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav");

    navToggle.addEventListener("click", function (event) {
        event.preventDefault();

        this
            .classList
            .toggle("active");
        nav
            .classList
            .toggle("active");
    });
}