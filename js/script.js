const bolinhaTheme = document.querySelector("[data-bolinha]");
const linkCssTheme = document.querySelector("[data-theme]");

bolinhaTheme.addEventListener("click", function() {

    if (bolinhaTheme.classList[1] == "theme2") {

        bolinhaTheme.classList.remove("theme2");
        bolinhaTheme.classList.add("theme3");
        linkCssTheme.href = "style/temas/theme3.css"

    } else if (bolinhaTheme.classList[1] == "theme3") {

        bolinhaTheme.classList.remove("theme3");
        bolinhaTheme.classList.add("theme1");
        linkCssTheme.href = "style/temas/theme1.css"

    } else {
        bolinhaTheme.classList.remove("theme1")
        bolinhaTheme.classList.add("theme2");
        linkCssTheme.href = "style/temas/theme2.css"
    }
});
