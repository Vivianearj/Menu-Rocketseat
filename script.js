function toggleMode() {
    const html = document.documentElement //no doc, irá procurar um elemento no doc
    html.classList.toggle("light")  //no html, 

    //também poderiamos usar
    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // }else {
    //     html.classList.add('light')
    // }
   
    //pegar a tag img
     const img = document.querySelector("#profile img") //funcção do doc,irá fazer uma pesquisa do seletor
     
    //substituir a imagem 
     if(html.classList.contains('light')){
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png') //ajustar um atributo
     } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')

     }
}