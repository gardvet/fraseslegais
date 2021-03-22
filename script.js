(function () {
    const quotes = [
        {
            quote: "Uma pessoa que nunca cometeu um erro, nunca tentou nada novo.",
            author: "Albert Einstein"
        },
        {
            quote: "Nada é permanente, exceto a mudança.",
            author: "Heráclito"
        },
        {
            quote: "O ignorante afirma, o sábio duvida, o sensato reflete.",
            author: "Aristóteles"
        },
        {
            quote: "Não existem métodos fáceis para resolver problemas difíceis.",
            author: "René Descartes"
        },
        {
            quote: "A morte não é nada para nós, pois, quando existimos, não existe a morte, e quando existe a morte, não existimos mais.",
            author: "Epicuro"
        },
        {
            quote: "A nossa maior glória não está em nunca falharmos, mas em nos levantarmos cada vez que falhamos.",
            author: "Confúcio"
        }
    ];
    const btn = document.getElementById("generate-btn");

  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);

    document.getElementById("quote").textContent = quotes[random].quote;
    document.querySelector(".author").textContent = quotes[random].author;
  });
    

}) ();