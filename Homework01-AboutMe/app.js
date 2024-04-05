const photoWrapper = document.querySelector(".photoWrapper");
const moreInterests = document.querySelector("#moreInterests");
const modal = document.querySelector(".modal");
const formElement = document.querySelector(".form");
const card = document.querySelector(".card");
const toggleInfo = document.querySelector(".toggle");


// Handle functions for carousel
let widthImages = 0;

const handleRight = () => {
    if(widthImages < 1120) {
        widthImages = widthImages + 560;
        photoWrapper.style.transform = `translateX(-${widthImages}px)`;
    }
    
}

const handleLeft = () => {
    if(widthImages > 0) {
        widthImages = widthImages - 560;
        photoWrapper.style.transform = `translateX(-${widthImages}px)`;
    }
}


const handleHide = () => {
    modal.style.display = "none";
    card.style.filter = "blur(0px)";

}

moreInterests.addEventListener("click", () => {
    card.style.filter = "blur(5px)";
    modal.style.display = "block"
})

// Validate info in the Form

const validateForm = () => {
    const name = document.getElementById("inputName").value;
    const number = document.getElementById("inputNumber").value;
    const consultation = document.getElementById("inputConsultation").value;


    if(name.length < 3 || number.length < 8 || consultation.length < 3) {
        const errorMessage = document.createElement("h3");

        errorMessage.textContent = "Datos invalidos";
        errorMessage.style = "color: red"
        formElement.appendChild(errorMessage);
        return false;
    } 
    
    // Para verlos en consola
    console.log(name);
    console.log(number);
    console.log(consultation);
    return true;
}

const handleU = () => {
    toggleInfo.style.display = "block";
}
const hideAboutU = () => {
    toggleInfo.style.display = "none";

}