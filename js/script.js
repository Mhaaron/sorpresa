var happy = document.getElementById('feliz');
var mediaqueryList = window.matchMedia("(max-width: 600px)");


function sorpresa() {
    let text = happy.textContent;
    let letras = [];
    let margen = -500;
    let pixels = 0;
    let iteraciones = 50;
    let contador = 0;
    let time = 0;
    let fontSize = 35;
    let marginTop = 65.5;
    let incremento = 65;

    if (mediaqueryList.matches) {
        fontSize = 20;
        marginTop = 37.5;
        margen = -300;
        incremento = 40;
    }
    
    happy.textContent = '';

    for (let i = 0; i < text.length; i++) {
        let h1 = document.createElement('h1');
        h1.textContent = text.substr(i, 1);

        h1.style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px;`;

        pixels += incremento;

        letras.push(h1);
        happy.append(h1);
    }

    while (contador < iteraciones) {
        if (contador == 0) {
            iterarColor(letras, margen, pixels, fontSize, marginTop, incremento);
            reiniciarColor(letras, margen, pixels, fontSize, marginTop, incremento);
        } else {
            setTimeout(() => {
                iterarColor(letras, margen, pixels, fontSize, marginTop, incremento);
                reiniciarColor(letras, margen, pixels, fontSize, marginTop, incremento);
            }, time);
        }

        contador++;
        time += 4500;
    }

}

function iterarColor(letras, margen, pixels, fontSize, marginTop, incremento) {
    let time = 550;

    for (let i in letras) {
        setTimeout(() => {
            if (i == 0) {
                pixels = 0;
                letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: pink;`;
            }
            if (i == 1) letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: blue;`;
            if (i == 2) letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: yellow;`;
            if (i == 3) letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: green;`;
            if (i == 4) letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: orange;`;
            if (i == 5) letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: pink;`;
            if (i == 6) letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: blue;`;
            if (i == 7) letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: yellow;`;
            if (i == 8) letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: green;`;
            if (i == 9) letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: orange;`;
            if (i == 10) letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: pink;`;
            if (i == 11) letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: blue;`;
            if (i == 12) letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: yellow;`;
            if (i == 13) letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: green;`;
            if (i == 14) letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: orange;`;
            if (i == 15) letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: pink;`;
            pixels += incremento;
        }, time);

       time += 200;
    }
}

function reiniciarColor(letras, margen, pixels, fontSize, marginTop, incremento) {
    setTimeout(() => {
        pixels = 0;
        for (let i in letras) {
            letras[i].style.cssText = `margin-left: ${margen + pixels}px; margin-top: -${marginTop}px; font-size: ${fontSize}px; color: black;`;
            pixels += incremento;
        }
    }, 4000);
}

sorpresa();