import {products} from './products.js';

console.log(products)

let paging = 12


let myPage = Math.ceil(products.length / 12)

console.log(myPage)
// pageBtn.addEventListener('click', function(){
//     let inputPage = this.textContent

//     for (let i = paging * inputPage-1; i < paging*inputPage; i++){
    
//     }
// })

// let paging = 12

const pagination = document.querySelector('.pagination')

for (let i = 1; i <= 6; i++) {
    
    let asd = document.createElement('div')
    asd.setAttribute('class', 'link')

    asd.textContent = i

    pagination.appendChild(asd)
}