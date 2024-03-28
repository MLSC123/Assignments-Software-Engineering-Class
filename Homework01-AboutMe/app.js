const photoWrapper = document.querySelectorAll(".photoWrapper img");

let indice = 0;

setInterval(() => {
    photoWrapper.forEach((element, index) => {
        if(index == (indice%3)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
        
    })
    indice = indice + 1;
    
}, 1000);