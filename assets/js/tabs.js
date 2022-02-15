document.querySelectorAll(".tab").forEach(item=> {
    item.addEventListener('click', e => {
        document.querySelectorAll(".tab").forEach(item => {
            item.classList.remove('selected')
        })
        e.target.classList.add('selected')
        renderTabView()
    })
})
function renderTabView () {
    document.querySelectorAll(".tab").forEach(item => {
        if(item.classList.contains('selected')) {
            if(document.getElementById(item.dataset.field) !== null ) document.getElementById(item.dataset.field).classList.remove('hide');
        } else {
            if(document.getElementById(item.dataset.field) !== null ) document.getElementById(item.dataset.field).classList.add('hide');
        }
    })
}
renderTabView()