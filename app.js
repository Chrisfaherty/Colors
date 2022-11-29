//Global selection and variables
const colorDivs = document.querySelectorAll('.color');
const generateBtn = document.querySelector('.generate');
const sliders = doccument.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");
let initialColors;

//Functions


//Color Generator
function generateHex(){
    const hexColor = chroma.random();
    return hexColor
}

function randomColors(){
    colorDivs.forEach((div,index) => {
        const hexText = div.children[0];
        const randomColor = generateHes();
    
        //Add the color to the bg
        div.style.backgroundColor = randomColor;
        hexText.innerText = randomColor;
    });
}