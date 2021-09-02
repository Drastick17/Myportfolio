//=========FUNCTIONS========================
function ShowMenu(){
    menu = document.getElementById('menu')
    btn= document.getElementById('btn-menu')
    menu_class = menu.classList.value
    if(menu_class == ""){
      menu.classList.add('quit')
      btn.innerHTML ='<i class="fas fa-bars"></i>'
    }else{
      menu.classList.remove('quit')
      btn.innerHTML ='<i class="fas fa-times "></i>'
    }

}



/*function clicked(slide){
  const background= document.getElementById('modal')
  background.classList.toogle('showmodal')

  var id = slide.id
  if(id==1){
    var modal =document.getElementById('modal'+id)
    modal.classList.toggle('show')
  }else if(id==2){
    var modal =document.getElementById('modal'+id)
    modal.classList.toggle('show')
  }else if(id==3){
    var modal =document.getElementById('modal'+id)
    modal.classList.toggle('show')
  }
  else if(id==4){
    var modal =document.getElementById('modal'+id)
    modal.classList.toggle('show')
  }else{
    console.error('Invalid')
  }

}*/