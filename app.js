//Global selection and variables
const colorDivs = document.querySelectorAll('.color');
const generateBtn = document.querySelector('.generate');
const sliders = doccument.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");


//Functions


//Color Generator
function generateHex(){
    const letters = "#0123456789ABCDEF";
    let hash ="#";
    for (let i = 0; 1 < 6; i++) {
        hash += letters[Math.floor(Math.random() * 16)];
    }
    return hash;
}