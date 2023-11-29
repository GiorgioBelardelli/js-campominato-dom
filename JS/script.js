const gridElement = document.getElementById("grid");
const playButton = document.getElementById("play-button");



playButton.addEventListener ("click", 
    function(){

        let punteggio = 0;
        gridElement.innerHTML = "";
        let selectDiff = parseInt(document.getElementById("select-difficolta").value);
        const bombe = getRandomArray(1, getLunghezza(selectDiff), 16);
        console.log(bombe);

        for( let i=1; i<=getLunghezza(selectDiff); i++){
            const newSquare = createSquare("div", "square", selectDiff);  
            newSquare.append(i);
            gridElement.append(newSquare);

            newSquare.addEventListener("click",                     
                function() {
                    
                    punteggio++;

                    this.classList.add("clicked");
                    if(bombe.includes(i)){
                        punteggio--;
                        newSquare.classList.add("bomba");
                        alert(`Spiace, hai perso. Ecco il tuo punteggio:  ${punteggio}`);
                        
                    } 
                    console.log(i)
                }
            );
        };    
    }
)

function getLunghezza(selectDiff){
    
    let arrayLen;

    if(selectDiff === 0){
        arrayLen = 100;
    }else if(selectDiff === 1){
        arrayLen = 81;
    } else if(selectDiff === 2){
        arrayLen = 49;
    }
    return arrayLen;
}

function createSquare(tagtype, classname, selectDiff) {

    const element = document.createElement(tagtype);
    element.classList.add(classname);

    if (selectDiff === 1){
        element.classList.add("squareMedium");
    }else if(selectDiff === 2){
        element.classList.add("squareHard");
    }

    return element;
}


function getRandomArray (minNum, maxNum, arrayLen){

    const genArray = [];

    while(genArray.length < arrayLen){

        let newNumber = getRandom(minNum, maxNum);

        if(!genArray.includes(newNumber)){

            genArray.push(newNumber);

        }
    }

    return genArray;
}


function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}