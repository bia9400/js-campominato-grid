const gridContainerBonus = document.getElementById("grid-container");
const refreshButton = document.getElementById("refresh-button");
const playButton = document.getElementById("play-button")
const selectDifficult = document.getElementById("selectInput")
let numeroOrizontale;


playButton.addEventListener("click", function () {
const difficolta = parseInt(selectDifficult.value);
    
    console.log(difficolta);
    if(difficolta==0){
        numeroOrizontale=0
        
    }
    else if(difficolta==1){
        numeroOrizontale=10
        
    }
    else if(difficolta==2){
        numeroOrizontale=9
    }
    else if(difficolta==3){
        numeroOrizontale=7
    }



    function createGrid(numeroOrizontale) {
        
        console.log(numeroOrizontale);
        const numeroTotale = numeroOrizontale * numeroOrizontale
        let classString=`grid-container-${difficolta}`
        console.log(classString);
        gridContainerBonus.classList.add(classString)
        
         
        for (let i = 1; i <= numeroTotale; i++) {
            const elementoHtml = document.createElement("div")
            elementoHtml.classList.add("number-container")
            elementoHtml.innerHTML = `<h6> ${i} </h6>`
            gridContainerBonus.append(elementoHtml)
            elementoHtml.addEventListener("click", function () {
                let x = this;
                x.classList.add("add-color-onClick")
            })


            refreshButton.addEventListener("click", function () {
                elementoHtml.classList.remove("add-color-onClick")
            })

        }
    }

createGrid(numeroOrizontale)
})









