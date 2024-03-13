function menushow(){
    let menuMobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
       menuMobile.classList.remove('open') 
       document.querySelector('.icon').src = "assets/icons/menu.png"
    }else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "assets/icons/close.png"
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var btnToTop = document.getElementById('btnToTop');

    function toggleButtonVisibility() {
      if (window.scrollY > 100) { 
        btnToTop.style.display = 'block'; 
      } else {
        btnToTop.style.display = 'none'; 
      }
    }


    window.addEventListener('scroll', toggleButtonVisibility);


    btnToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    });
  });