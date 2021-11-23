function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();

    if (hora < 10) {
        hora = "0" + hora
    } if (minuto < 10) {
        minuto = "0" + minuto
    } if (segundo < 10) {
        segundo = "0" + segundo
    }



    msg.innerHTML = `Agora são: ${hora}:${minuto}:${segundo} `
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e5d6c6'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#99a6a7'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#00182c'
    }


}

var tempo = setInterval(carregar, 1000);