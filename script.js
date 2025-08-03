const RandomColor= document.querySelector("#randomcolor");
const ApplyColor= document.querySelector("#applycolor");
const ColorName= document.querySelector(".colorname");
const CurrentColor= document.querySelector("#currentColor");
const body = document.querySelector("body");
const colorRN = document.querySelector(".colorRN");
const title = document.querySelector(".title");

function getRandomColor() {
    const colour = Math.floor(Math.random()*16777215).toString(16);
    return `#${colour}`;
}
const handleRandomcolor = () => {
    const bgColor = getRandomColor();
    const textColor = getRandomColor();
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
    CurrentColor.innerText = bgColor;
}

RandomColor.addEventListener("click", handleRandomcolor);

const handleApplyColor = () => {
    if (!ColorName.value) {
        alert("Please enter a color name or hex code.");
        return;
    }
    const colorInput = ColorName.value;
        return changecolor(colorInput);
};

const changecolor = (colorInput) => {
    body.style.backgroundColor = colorInput;
    CurrentColor.innerText = colorInput;
    if (colorInput === "black") {
        CurrentColor.style.color = "white";
        title.style.color = "white";
        colorRN.style.color = "white";
    } else {
        CurrentColor.style.color = "black";
        title.style.color = "black";
        colorRN.style.color = "black";
    }
};
ApplyColor.addEventListener("click", handleApplyColor);



