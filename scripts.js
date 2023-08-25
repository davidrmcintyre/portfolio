document.addEventListener("DOMContentLoaded", function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    const navbarHeight = document.querySelector('.navbar').offsetHeight; // Get the actual navbar height

    smoothScrollLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const topOffset = targetSection.offsetTop - navbarHeight;
                window.scrollTo({
                    top: topOffset,
                    behavior: "smooth",
                });
            }
        });
    });
});



    