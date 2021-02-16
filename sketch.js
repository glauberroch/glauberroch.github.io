//este template inclui já exemplos de como capturar o som do vosso microfone e a vossa câmara
//Instituto das Artes e da Imagem, 12ºI, Oficina de Produtos Multimédia
//Prof. Marcelo Reis, 2021



//antes das funções deve-se definir as variáveis globais que vão usar no resto do código, ver 'let' e 'var'
//let mic;
//let capture; 
let xoff = 0;

//função que serve para fazerem o load das vossas imagens, sons e outros conteúdos
function preload() {

}

//função que corre uma vez antes do draw
function setup() {
    createCanvas(displayWidth, displayHeight);
    getAudioContext().resume();

    //capture = createCapture(VIDEO);
    //capture.size(320, 240);

    //mic = new p5.AudioIn();
    //mic.start();


}

// função que corre todos os frames
function draw() {
    background(0, 20);
    xoff += 0.01;
    let posX = map(noise(xoff), 0, 1, 0, width);
    let posY = map(noise(xoff + 10000), 0, 1, 0, height);
    noFill();
    stroke(255);
    rect(posX, posY, 50, 50, 10);

    //vol = mic.getLevel();

    //image(capture, 0, 0, 320, 240);


}