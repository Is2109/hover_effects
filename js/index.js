// Cuando hago "mouseover" en cada .Container-product (index)
    // Le ADD la clase .Container-(index) a .Container

// Cuando hago "mouseout" en cada .Container-product (index)
    // Le REMOVE la clase .Container-(index) a .Container
    
const container = document.querySelector('.Container')
const productOne = document.querySelector('.Container-product.one')
const productTwo = document.querySelector('.Container-product.two')
const productThree = document.querySelector('.Container-product.three')
const productFour = document.querySelector('.Container-product.four')
const productFive = document.querySelector('.Container-product.five')
const productSix = document.querySelector('.Container-product.six')
const productSeven = document.querySelector('.Container-product.seven')
const productEight = document.querySelector('.Container-product.eight')
const productNine = document.querySelector('.Container-product.nine')
const productTen = document.querySelector('.Container-product.ten')


console.log(productOne)
console.log(container)


productOne.addEventListener('mouseover' , () => {
    container.classList.add('one')
})
productOne.addEventListener('mouseout' , () => {
    container.classList.remove('one')
})

productTwo.addEventListener('mouseover' , () => {
    container.classList.add('two')
})
productTwo.addEventListener('mouseout' , () => {
    container.classList.remove('two')
})

productThree.addEventListener('mouseover' , () => {
    container.classList.add('three')
})
productThree.addEventListener('mouseout' , () => {
    container.classList.remove('three')
})

productFour.addEventListener('mouseover' , () => {
    container.classList.add('four')
})
productFour.addEventListener('mouseout' , () => {
    container.classList.remove('four')
})

productFive.addEventListener('mouseover' , () => {
    container.classList.add('five')
})
productFive.addEventListener('mouseout' , () => {
    container.classList.remove('five')
})

productSix.addEventListener('mouseover' , () => {
    container.classList.add('six')
})
productSix.addEventListener('mouseout' , () => {
    container.classList.remove('six')
})

productSeven.addEventListener('mouseover' , () => {
    container.classList.add('seven')
})
productSeven.addEventListener('mouseout' , () => {
    container.classList.remove('seven')
})

productEight.addEventListener('mouseover' , () => {
    container.classList.add('eight')
})
productEight.addEventListener('mouseout' , () => {
    container.classList.remove('eight')
})

productNine.addEventListener('mouseover' , () => {
    container.classList.add('nine')
})
productNine.addEventListener('mouseout' , () => {
    container.classList.remove('nine')
})

productTen.addEventListener('mouseover' , () => {
    container.classList.add('ten')
})
productTen.addEventListener('mouseout' , () => {
    container.classList.remove('ten')
})




