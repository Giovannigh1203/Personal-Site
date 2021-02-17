const selecNav = document.getElementById('nav');
function scrollMenu(){
    window.addEventListener("scroll", onscroll =>{
      let selecheadder = document.getElementById('headder')
      let posicionNav = selecheadder.getBoundingClientRect().bottom 
      let heigthHeadder = selecheadder.getBoundingClientRect().height
      
      heigthHeadderrTrigger= heigthHeadder/2
      if (posicionNav >= heigthHeadderrTrigger){
        selecNav.classList.replace("navscroll","nav-top")
      }
    })
  }