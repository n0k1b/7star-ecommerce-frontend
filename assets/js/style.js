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