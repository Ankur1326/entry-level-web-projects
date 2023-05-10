
function onenCity(cityName, element, color){
    
    let tabcontent = document.getElementsByClassName('tabcontent');
    for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none"
    }
    
    let tablink = document.getElementsByClassName('tablink');
    for(let i = 0; i < tablink.length; i++){
        tablink[i].style.backgroundColor = "";
    }
    
    document.getElementById(cityName).style.display = "block";
    element.style.backgroundColor = color;
    
}
// tabcontent[0].style.display = "block"
// tablink[0].style.backgroundColor = "red"

document.getElementById("defaultOpen").click();