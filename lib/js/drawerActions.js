window.onload = () => {
    const drawer = document.getElementById("drawer");
    const menubtn = document.getElementById("drawermenubtn");
    const overlay = document.getElementById("overlay");
    const triggerdrawer = () => {
        if (!drawer.classList.contains("drawer-triggered")) {
            drawer.classList.add("drawer-triggered");
            overlay.classList.add("overlay-triggered");
        }
        else{
            drawer.classList.remove("drawer-triggered");
            overlay.classList.remove("overlay-triggered");
        }
    }
    menubtn.onclick = triggerdrawer;
    overlay.onclick = triggerdrawer;
    
}
const changeLanguage = (selectObject) => {
    if(selectObject.value=="english"){
        window.location.href="/portfolio";
    }
    else if(selectObject.value=="spanish"){
        window.location.href="portfolio/sp.html";
    }
}