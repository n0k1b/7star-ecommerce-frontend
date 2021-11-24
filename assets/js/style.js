let section_headings = document.querySelectorAll(".section_heading")

section_headings.forEach(heading => {
    if(heading.children.length > 1) {
        if(heading.children[1].tagName === 'A') {
            var v_divider = document.createElement("DIV");
            v_divider.classList.add("v_divider");
            v_divider.innerHTML = "|"
            insertAfter(v_divider, heading.children[1])
        }   
    }
})

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

// Make star rating
function createStarRatingView()
{
    document.querySelectorAll(".star_rating").forEach(item => {
        let rating = Number(item.getAttribute('data-rating'))
        let total_star = Number(item.getAttribute('data-star_count'))
        if(Number.isInteger(rating)) {
            for(let i = 0; i < total_star; i++) {
                if(i < rating) {
                    item.innerHTML += '<i class="bi bi-star-fill"></i>'
                } else {
                    item.innerHTML += '<i class="bi bi-star"></i>'
                }
                
            }
        } else {
            let ceil_rating = Math.floor(rating)
            for(let i = 0; i < total_star; i++) {
                if(i < ceil_rating) {
                    item.innerHTML += '<i class="bi bi-star-fill"></i>'
                } else if(i === ceil_rating) {
                    item.innerHTML += '<i class="bi bi-star-half"></i>'
                } else {
                    item.innerHTML += '<i class="bi bi-star"></i>'
                }
                
            }
        }
    })
}

function makeFavouriteButton() {
    document.querySelectorAll('.favourite').forEach(item => {
        if(!item.classList.contains('activated')) {
            item.innerHTML = `<i class="bi bi-heart"></i>`
        } else {
            item.innerHTML = `<i class="bi bi-heart-fill"></i>`
        }
    })
}
function selectBadge() {
    document.querySelectorAll('.selectable_badges').forEach(item => {
        item.addEventListener('click', () => {
            if(!item.classList.contains('badge_selected')) {
                item.classList.add('badge_selected')
            } else {
                item.classList.remove('badge_selected')
            }
        })
    })
}
selectBadge()
createStarRatingView()
makeFavouriteButton()