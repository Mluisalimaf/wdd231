(function(){
    // defensive DOM-ready handling in case someone uses defer/head script
    function ready(fn){
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
    }
    
    
    ready(function(){
    const navButton = document.querySelector('#nav-button');
    const navMenu = document.querySelector('#nav-menu');
    
    
    if (!navButton || !navMenu) {
    // helpful console warning for debugging
    console.warn('Navigation elements not found. Check IDs: #nav-button and #nav-menu');
    return;
    }
    
    
    navButton.addEventListener('click', () => {
    const nowOpen = navMenu.classList.toggle('show-menu');
    navButton.classList.toggle('show', nowOpen);
    
    
    // accessibility attributes
    navButton.setAttribute('aria-expanded', String(nowOpen));
    navMenu.setAttribute('aria-hidden', String(!nowOpen));
    });
    });
    })();