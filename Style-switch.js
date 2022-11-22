/*---Style Toggle----*/
const StyleSwitchToggle = document.querySelector(".Style-switch-toggle");

StyleSwitchToggle.addEventListener("click",()=>{
    document.querySelector(".Style-switch").classList.toggle("open");
})
//hide Style Switcher on Scroll//

window.addEventListener("scroll",()=>{
    if(document.querySelector(".Style-switch").classList.contains("open")){

        document.querySelector(".Style-switch").classList.remove("open")
    }
})
/*---Theme Color----*/

const alternateStyles = document.querySelectorAll(".Alternate-style");
function setActiveStyle(Color) {

    alternateStyles.forEach((Style) => {

        if (Color === Style.getAttribute("title")) {
            Style.removeAttribute("disabled");
        }
        else {
            Style.setAttribute("disabled", true);
        }

    });
}
/* --------Day-night--------*/
const DayNight = document.querySelector(".Day-night");
DayNight.addEventListener("click",()=>{
    DayNight.querySelector("i").classList.toggle("fa-sun");
    DayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        DayNight.querySelector("i").classList.add("fa-sun");

    }
    else{
        DayNight.querySelector("i").classList.add("fa-moon");
    }
})




