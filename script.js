function adicionarFilme() {
    var campoImagemFilme = document.querySelector('#imagemFilme')
    var campoLinkFilme = document.querySelector('#linkFilme')
    var campoNomeFilme = document.querySelector('#nomeFilme')

    var imagemFilme = campoImagemFilme.value
    var linkFilme = campoLinkFilme.value
    var nomeFilme = campoNomeFilme.value

    if (imagemFilme.endsWith('.jpg') ||
        imagemFilme.endsWith(".png") ||
        imagemFilme.endsWith(".jfif")){
            listarImagemFilmesNaTela(imagemFilme, linkFilme, nomeFilme)
        } else {
            alert('Imagem inválida')
        }

        campoImagemFilme.value = ""
        campoLinkFilme.value = ""
        campoNomeFilme.value = ""
}

var listaFilme = ["https://br.web.img3.acsta.net/pictures/19/11/29/17/57/5161763.jpg", "https://upload.wikimedia.org/wikipedia/pt/9/9c/Arrow_season_8.jpg", "https://resenhandopormarina.com/wp-content/uploads/2017/03/shadowhunters-the-mortal-instruments.40364.jpg", "https://pbs.twimg.com/media/EcapcEgXQAYNSWN.jpg", "https://upload.wikimedia.org/wikipedia/pt/4/47/Teen_Wolf_%28Temporada_2%29.jpg", "https://i.pinimg.com/564x/94/bf/81/94bf8150c0916e5e2ec94fda12ba4a7d.jpg", "https://1.bp.blogspot.com/-RTsAsul0Pmc/Xut5FZBsLII/AAAAAAAAogE/dUpJekeNZrYUGJbCY0ZTpTj2N12Pk_yFACLcBGAsYHQ/s1600/Peaky%2BBlinders%2Bposter.jpg", "https://media.fstatic.com/XxvgLIvt88BrT0DMFbya-krR9ek=/290x478/smart/media/movies/covers/2020/05/EYEz4CDWoAAzUz1.jpg", "https://m.media-amazon.com/images/M/MV5BNTRhZDY0YzQtMGIwMC00MzY2LTlhMTktNmRhMTExNzViOWMwXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_.jpg", "https://basededatos.atrae.org/media/works/giIGfFqirPk3I2azp8Ow98oOnzG.jpg"]

var linkFilme = ["https://www.imdb.com/title/tt5180504/", "https://www.imdb.com/title/tt2193021/", "https://www.imdb.com/title/tt4145054/", "https://www.imdb.com/title/tt1405406/", "https://www.imdb.com/title/tt1567432/", "https://www.imdb.com/title/tt2306299/", "https://www.imdb.com/title/tt2442560/", "https://www.imdb.com/title/tt2661044/", "https://www.imdb.com/title/tt11053220/", "https://www.imdb.com/title/tt8258074/"]

var nomeFilme = ["The Witcher", "Arrow", "Shadow Hunters", "The Vampire Diaries", "Teen Wolf", "Vikings", "Peaky Blinders", "The 100", "We are the wave", "Fantastic Fungi"]

for (var i = 0; i < listaFilme.length; i++){
    document.write("<div class='filme'><a href=" + linkFilme[i] + "><img src=" + listaFilme[i] + "><p>" + nomeFilme[i] + "</p></div>")
}

function listarImagemFilmesNaTela(imagemFilme, linkFilme, nomeFilme) {
    var listaFilme = document.querySelector('#listaFilme')
    var elementoImagemFilme = "<div class='filme'><a href=" + linkFilme + " target=_blank><img src=" + imagemFilme + "</a><p>" + nomeFilme + "</p></div>" 
    listaFilme.innerHTML = listaFilme.innerHTML + elementoImagemFilme
}