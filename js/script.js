var happy = document.getElementById('feliz');
var mediaqueryList = window.matchMedia("(max-width: 600px)");


function sorpresa() {
    let text = happy.textContent;
    let letras = [];
    let iteraciones = 50;
    let contador = 0;
    let time = 0;
    let fontSize = 35;
    
    if (mediaqueryList.matches) {
        fontSize = 18;
    }
    
    happy.textContent = '';

    for (let i = 0; i < text.length; i++) {
        let sp = document.createElement('span');

        sp.textContent = text.substr(i, 1);

        sp.style.cssText = `font-size: ${fontSize}px;`;

        letras.push(sp);
        happy.append(sp);
    }

    while (contador < iteraciones) {
        if (contador == 0) {
            iterarColor(letras, fontSize);
            reiniciarColor(letras, fontSize);
        } else {
            setTimeout(() => {
                iterarColor(letras, fontSize);
                reiniciarColor(letras, fontSize);
            }, time);
        }

        contador++;
        time += 4500;
    }

}

function iterarColor(letras, fontSize) {
    let time = 550;

    for (let i in letras) {
        setTimeout(() => {
            if (i == 0) letras[i].style.cssText = `font-size: ${fontSize}px; color: pink;`;
            if (i == 1) letras[i].style.cssText = `font-size: ${fontSize}px; color: blue;`;
            if (i == 2) letras[i].style.cssText = `font-size: ${fontSize}px; color: yellow;`;
            if (i == 3) letras[i].style.cssText = `font-size: ${fontSize}px; color: green;`;
            if (i == 4) letras[i].style.cssText = `font-size: ${fontSize}px; color: orange;`;
            if (i == 5) letras[i].style.cssText = `font-size: ${fontSize}px; color: pink;`;
            if (i == 6) letras[i].style.cssText = `font-size: ${fontSize}px; color: blue;`;
            if (i == 7) letras[i].style.cssText = `font-size: ${fontSize}px; color: yellow;`;
            if (i == 8) letras[i].style.cssText = `font-size: ${fontSize}px; color: green;`;
            if (i == 9) letras[i].style.cssText = `font-size: ${fontSize}px; color: orange;`;
            if (i == 10) letras[i].style.cssText = `font-size: ${fontSize}px; color: pink;`;
            if (i == 11) letras[i].style.cssText = `font-size: ${fontSize}px; color: blue;`;
            if (i == 12) letras[i].style.cssText = `font-size: ${fontSize}px; color: yellow;`;
            if (i == 13) letras[i].style.cssText = `font-size: ${fontSize}px; color: green;`;
            if (i == 14) letras[i].style.cssText = `font-size: ${fontSize}px; color: orange;`;
            if (i == 15) letras[i].style.cssText = `font-size: ${fontSize}px; color: pink;`;
        }, time);

       time += 200;
    }
}

function cambiarColor(letras, fontSize) {
    for (let i in letras) {
        setTimeout(() => {
            if (i == 0) letras[i].style.cssText = `font-size: ${fontSize}px; color: pink;`;
            if (i == 1) letras[i].style.cssText = `font-size: ${fontSize}px; color: blue;`;
            if (i == 2) letras[i].style.cssText = `font-size: ${fontSize}px; color: yellow;`;
            if (i == 3) letras[i].style.cssText = `font-size: ${fontSize}px; color: green;`;
            if (i == 4) letras[i].style.cssText = `font-size: ${fontSize}px; color: orange;`;
            if (i == 5) letras[i].style.cssText = `font-size: ${fontSize}px; color: pink;`;
            if (i == 6) letras[i].style.cssText = `font-size: ${fontSize}px; color: blue;`;
            if (i == 7) letras[i].style.cssText = `font-size: ${fontSize}px; color: yellow;`;
            if (i == 8) letras[i].style.cssText = `font-size: ${fontSize}px; color: green;`;
            if (i == 9) letras[i].style.cssText = `font-size: ${fontSize}px; color: orange;`;
            if (i == 10) letras[i].style.cssText = `font-size: ${fontSize}px; color: pink;`;
            if (i == 11) letras[i].style.cssText = `font-size: ${fontSize}px; color: blue;`;
            if (i == 12) letras[i].style.cssText = `font-size: ${fontSize}px; color: yellow;`;
            if (i == 13) letras[i].style.cssText = `font-size: ${fontSize}px; color: green;`;
            if (i == 14) letras[i].style.cssText = `font-size: ${fontSize}px; color: orange;`;
            if (i == 15) letras[i].style.cssText = `font-size: ${fontSize}px; color: pink;`;
        }, 4500);

    }
}

function reiniciarColor(letras, fontSize, timePlus) {
    setTimeout(() => {
        for (let i in letras) {
            letras[i].style.cssText = `font-size: ${fontSize}px; color: black;`;
        }
    }, 4000 + timePlus);
}

sorpresa();