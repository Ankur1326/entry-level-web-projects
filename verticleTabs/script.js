function onenCity(e, cityName){
    // console.log(e)
    let tabContents = document.getElementsByClassName('tabcontent')
    // console.log(tabContent);
    for(let i = 0; i < tabContents.length; i++){
        // console.log(tabContent[i])
        tabContents[i].style.display = "none"
    }
    // get all elements with class - tablink
    let tabLinks = document.querySelectorAll(".tablinks");
    for(let i = 0; i < tabLinks.length; i++){
        // tabLinks[i].style.display = 
        tabLinks[i].className = tabLinks[i].className.replace("active", "")
    }
    document.getElementById(cityName).style.display = "block"
    e.currentTarget.className += " active"
}
