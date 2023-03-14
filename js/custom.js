function resetSubmenuStyles() {
    let submenus = document.querySelectorAll('.submenu div')
    for (let submenu of submenus) {
      submenu.style.width = ''
      submenu.style.visibility = ''
    }
}
  
document.querySelector('#menuOne').addEventListener('click', e => {
    let submenu = document.querySelector('.submenu')
    let submenuOne = document.querySelector('#submenuOne')
    let submenuStyle = window.getComputedStyle(submenuOne)
    let submenuWidth = parseInt(submenuStyle.getPropertyValue('width')) - parseInt(submenuStyle.getPropertyValue('padding-left')) - parseInt(submenuStyle.getPropertyValue('padding-right'))
    
    resetSubmenuStyles()
    if (submenuWidth == 0) {
      submenu.style.width = '20%'
      submenuOne.style.width = '100%'
      submenuOne.style.visibility = 'visible'
    }
    else {
      submenu.style.width = ''
      submenuOne.style.width = ''
      submenuOne.style.visibility = ''
    }
})
  
document.querySelector('#menuTwo').addEventListener('click', e => {
    let submenu = document.querySelector('.submenu')
    let submenuTwo = document.querySelector('#submenuTwo')
    let submenuStyle = window.getComputedStyle(submenuTwo)
    let submenuWidth = parseInt(submenuStyle.getPropertyValue('width')) - parseInt(submenuStyle.getPropertyValue('padding-left')) - parseInt(submenuStyle.getPropertyValue('padding-right'))
    resetSubmenuStyles()
    if (submenuWidth == 0) {
      submenu.style.width = '20%'
      submenuTwo.style.width = '100%'
      submenuTwo.style.visibility = 'visible'
    }
    else {
      submenu.style.width = ''
      submenuTwo.style.width = ''
      submenuTwo.style.visibility = ''
    }
})

jQuery(function($){
  $("ul li a").click(function(){
      var id = $(this).attr("id");
  
      $(".main-content > section").removeClass("visible");
      $(".main-content > section." + id).addClass("visible");
  });
});