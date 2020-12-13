window.addEventListener("resize", AutoScale);
console.log("Hello");
AutoScale();

function AutoScale(){
    let width = window.innerWidth; //Ширина окна
    console.log("Hello");
    if (width > 1280)
    {
        ChangeScale("big");
    }
    else if (width > 720 && width < 1280) 
    {
        ChangeScale("normal");
    }
    else if (width < 720) 
    {
        ChangeScale("small");
    }
}

function ChangeScale(size)
{
    console.log("Hello");
    link.setAttribute("href", "home-style-" + size + ".css");
}