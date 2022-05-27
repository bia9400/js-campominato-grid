const gridContainer = document.querySelector(".grid-container")

function createGrid(numeroOrizontale, numeroVerticale) {
    const numeroTotale = numeroOrizontale * numeroVerticale
    for (let i = 1; i <= numeroTotale; i++) {
        const elementoHtml=document.createElement("div")
        elementoHtml.classList.add("number-container")
        elementoHtml.innerHTML=`<h6> ${i} </h6>`
        gridContainer.append(elementoHtml)
        elementoHtml.addEventListener("click", function(){
           let x=this;
           x.classList.add("add-color-onClick")
        })
    }
}



createGrid(10,10)
