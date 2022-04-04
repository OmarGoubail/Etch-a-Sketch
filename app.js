const Container = document.querySelector('.container');

for (let i=1; i<257; i++){
    const div = document.createElement('div')
    div.classList.add('grid')
    Container.appendChild(div)
}


let items = document.querySelectorAll('.grid')

items.forEach( item => {
    item.addEventListener('mouseover', () => {
        item.style.background = 'black'
    })
})
