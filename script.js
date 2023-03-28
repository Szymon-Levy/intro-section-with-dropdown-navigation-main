const offcanvasOpen = document.getElementById("offcanvas-open")
const offcanvasClose = document.getElementById("offcanvas-close")
const navigation = document.getElementById("navigation")
const navigationHeading = navigation.querySelectorAll(".nav-list > .nav-item > .nav-item-heading .menu-arrow")


function menuOpen(){
    const offcanvasOverlay = document.createElement("div")
    offcanvasOverlay.id = "offcanvas-overlay"
    document.body.prepend(offcanvasOverlay)
    navigation.classList.add("active")
}

function menuClose(){
    if (document.getElementById("offcanvas-overlay")){
        document.getElementById("offcanvas-overlay").remove()
    }
    navigation.classList.remove("active")
}

offcanvasOpen.addEventListener("click", menuOpen)
offcanvasClose.addEventListener("click", menuClose)

navigationHeading.forEach(navItem => {
    let isDropdownActive = false
    navItem.addEventListener("click", () => {
        if (window.innerWidth <= 991){
            if (navItem.parentElement.parentElement.contains(navItem.parentElement.parentElement.querySelector(".nav-dropdown-list"))) {
                let currentDropdown = navItem.parentElement.parentElement.querySelector(".nav-dropdown-list")
                navItem.classList.toggle("active")
                if (!isDropdownActive) {
                    isDropdownActive = true
                    let dropDownHeight = currentDropdown.scrollHeight;
                    currentDropdown.style.maxHeight = dropDownHeight + "px";
                } else{
                    isDropdownActive = false
                    currentDropdown.style.maxHeight = "0px";
                }
            }
        }
    })
    
})