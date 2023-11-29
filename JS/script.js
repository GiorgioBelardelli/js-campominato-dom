const gridElement = document.getElementById("grid");
const playButton = document.getElementById("play-button");



playButton.addEventListener ("click", 

    function(){

        gridElement.innerHTML = "";
        let selectDiff = parseInt(document.getElementById("select-difficolta").value);

        const bombe = getRandomArray(1, 16, 16);

        if(selectDiff===0){
          for( let i=1; i <= 100; i++ ){
                
                const newSquare = createSquare("div", "square"); 
                newSquare.append(i);
                gridElement.append(newSquare);

                newSquare.addEventListener("click", 
                        
                    function() {
                        this.classList.add("clicked")
                        console.log(i)
                    }
                );
            }  
        }else if(selectDiff===1){
            for( let i=1; i <= 81; i++ ){
                
                const newSquare = createSquare("div", "square"); 
                newSquare.classList.add("squareMedium");
                newSquare.append(i);
                gridElement.append(newSquare);

                newSquare.addEventListener("click", 
                        
                    function() {
                        this.classList.add("clicked")
                        console.log(i)
                    }
                );
            }
        }else if (selectDiff===2){
            for( let i=1; i <= 49; i++ ){
                
                const newSquare = createSquare("div", "square");
                newSquare.classList.add("squareHard"); 
                newSquare.append(i);
                gridElement.append(newSquare);

                newSquare.addEventListener("click", 
                        
                    function() {
                        this.classList.add("clicked")
                        console.log(i)
                    }
                );
            }
        }
            
    }
)


function createSquare(tagtype, classname) {

    const element = document.createElement(tagtype);
    element.classList.add(classname);

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