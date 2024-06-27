//if user click menu button
//nav is closed, open it
//nav is open, close it

const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click',()=>{
    console.log(nav)
    const visible = nav.getAttribute('data-visible');

    if(visible === 'false'){
        nav.setAttribute('data-visible',true);
        navToggle.setAttribute('aria-expanded',true);
    }
    else{
        nav.setAttribute('data-visible',false);
        navToggle.setAttribute('aria-expanded',false)
    }
})