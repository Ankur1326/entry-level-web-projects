function onenCity(e, cityName) {
    
    let tabContents = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
    }
    
    
    let tabLinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tabLinks.length; i++) {
        // firt remove actice class from all tabLinks
        tabLinks[i].className = tabLinks[i].className.replace(' active', "")
    }

    document.getElementById(cityName).style.display = "block";
    e.currentTarget.className += " active"

}
