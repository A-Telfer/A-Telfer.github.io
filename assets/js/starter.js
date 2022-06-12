
// Option 1
//
// Import Bootstrap's bundle (all of Bootstrap's JS + Popper.js dependency)

// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// Fix masonry glitch for slow loading images
window.addEventListener("load", ()=>{
    new Masonry(document.querySelector('#projects-content'), {
        itemSelector: 'div.row>div'
    })
})
