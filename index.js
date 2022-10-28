const featuresEl = document.getElementById('features')
const booksEl = document.getElementById('featured')
const bestSalesEl = document.getElementById('bestSales')
const bookSearchEl = document.getElementById('searchBook')
const footer = document.querySelector('footer')

let observer = 
new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.style.opacity = 1
      entry.target.style.transform = 'translateX(0)'
      entry.target.style.transform = 'translateY(0)'
    }
  })
})
observer.observe(featuresEl);
observer.observe(booksEl);
observer.observe(footer);
observer.observe(bestSalesEl);
observer.observe(bookSearchEl);

function openMenu () {
  document.body.classList += " menu--open"
}
function closeMenu () {
  document.body.classList.remove('menu--open')
}