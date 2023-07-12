const numeros = document.querySelectorAll("[data-number]");
const operadores = document.querySelectorAll("[data-operator]");
const botaoDelete = document.querySelector("[data-del]");
const botaoReset = document.querySelector("[data-reset]");
const botaoigualdade = document.querySelector("[data-igualdade]");
const resultado = document.querySelector("[data-resultado]");

numeros.forEach((numero) => numero.addEventListener("click", (e) => {

    const numero = e.target.innerText;

    if (resultado.innerHTML.includes(".") && numero === "." || resultado.innerHTML === "" && numero === ".") return;

    resultado.innerHTML = resultado.innerHTML + numero;

}));

operadores.forEach((operador) => operador.addEventListener("click", (e) => {

    const operador = e.target.innerText;
    const ultimoElementoDoResultado = resultado.innerHTML.length -1;
    const operadorAnterior = resultado.innerHTML.slice(ultimoElementoDoResultado);

    
    
    if (resultado.innerHTML === "" || resultado.innerHTML.lastIndexOf(operador) === ultimoElementoDoResultado) return;
        
    if (operadorAnterior === "+" || operadorAnterior === "-" || operadorAnterior === "x" || operadorAnterior === "/") {
        if (operador != operadorAnterior) {
            return;
        }
    };
    
    resultado.innerHTML = resultado.innerHTML + operador;

}));

botaoDelete.addEventListener("click", () => {
    resultado.innerText = resultado.innerText.slice(0, -1);
});

botaoReset.addEventListener("click", () => {
    resultado.innerText = "";
});

botaoigualdade.addEventListener("click", () => {

    if (resultado.innerHTML === "") {
        return;
    } else {
        if (resultado.innerHTML.indexOf("x") > 0) {
            const trocaFormatoDoOperador = resultado.innerHTML.replace(/x/g, "*");
            resultado.innerHTML = eval(trocaFormatoDoOperador);                                                                                                                                                                                                                                                       
        } else {
            resultado.innerHTML = eval(resultado.innerHTML);
        };
    };
    
});

// ESCOLHA DE TEMA

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
