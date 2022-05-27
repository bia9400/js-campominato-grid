const gridContainerBonus = document.querySelector(".grid-container");
const refreshButton=document.getElementById("refresh-button");



function createGrid(numeroOrizontale, numeroVerticale) {
    const numeroTotale = numeroOrizontale * numeroVerticale
    for (let i = 1; i <= numeroTotale; i++) {
        const elementoHtml=document.createElement("div")
        elementoHtml.classList.add("number-container")
        elementoHtml.innerHTML=`<h6> ${i} </h6>`
        gridContainerBonus.append(elementoHtml)
        elementoHtml.addEventListener("click", function(){
           let x=this;
           x.classList.add("add-color-onClick")
        })
    }
}




function refreshMe(){
   
}
refreshButton.addEventListener("click", refreshMe)
createGrid(10,10)
