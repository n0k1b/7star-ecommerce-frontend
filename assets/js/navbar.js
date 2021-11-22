collapsibles = document.querySelectorAll(".collapsible")

if(collapsibles.length > 0 && collapsibles !== null) {
    collapsibles.forEach(item => {
        var icon = document.createElement('i');
        icon.classList.add('bi')
        icon.classList.add('bi-caret-down-fill')
        icon.classList.add('collapse_icon')
        item.prepend(icon)

        item.addEventListener('click', () => {
            let isHidden = [...item.children[2].classList].includes('hide')
            console.log(isHidden, item)
            if(isHidden) {
                item.children[2].classList.remove('hide')
            } else {
                item.children[2].classList.add('hide')
            }
        })
    })
}


let secondaryNavOpen = false;
document.getElementById("close_navbar").addEventListener('click', () => {
    document.getElementById("close_navbar").classList.add("mobile_nav__collapse-hide")
    document.querySelector(".mobile_nav").classList.add("mobile_nav__hide")
})
document.querySelector(".primary_nav-menu").addEventListener('click', () => {
    document.getElementById("close_navbar").classList.remove("mobile_nav__collapse-hide")
    document.querySelector(".mobile_nav").classList.remove("mobile_nav__hide")

    if(secondaryNavOpen) {
        document.querySelector(".secondary_nav").classList.add("secondary_nav__hide")
    } else {
        document.querySelector(".secondary_nav").classList.remove("secondary_nav__hide")
    }
    secondaryNavOpen = !secondaryNavOpen
})