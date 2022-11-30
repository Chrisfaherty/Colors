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
        //Check for contrast
        checkTextContrast(randomColor,hexText);
        //Initial Colorize Sliders
        const color = chroma(randomColor);
        const sliders = div.querySelectorAll('.slidders input');
        const hue = sliders[0];
        const brightness = sliders[1];
        const saturation = sliders[2];

        colorizeSliders(color, hue, brightness, saturation);
    });
}

function checkTextContrast(color,text){
    const luminance = chroma(color).luminance();
    if(luminance > 0.5){
        text.style.color = "black";
    } else {
        text.style.color = "white";
    }
}

function colorizeSliders (color, hue, brightness, saturation){
    // Scale Saturation
    const noSat = color.set('hsl.s', 0);
    const fullSat = color.set('hsl.s', 1);
    const scaleSat = chroma.scale([noSat, color, fullSat]);

    //Update Input Colors
    saturation.style.backgroundImage = `linear-gradient(to right,${scaleSat(0)}, ${scaleSat(1)})`;
}

randomColors();