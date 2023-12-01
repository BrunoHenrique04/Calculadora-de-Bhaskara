// ----------------------------VARIAVEIS----------------------------------------
let a = document.querySelector('#aValue').value //valor de A
let b = document.querySelector('#bValue').value //Valor de B
let c = document.querySelector('#cValue').value //valor de C
const x1resp = document.querySelector('#x1Resp') //resposta X1 no campo da calculadora
const x2resp = document.querySelector('#x2Resp') //resposta X2 no campo da calculadora
const calcBtn = document.querySelector('#calcBtn'); //bortao de calculo
const deltaLousa = document.querySelector('#deltaLousa'); //campo informação delta na lousa
const baskLousa = document.querySelector('#baskLousa'); //informação barkhara lousa
const calcX1Position = document.querySelector('#x1Pos'); //alinhamento do calculo x1 na lousa
const calcX2Position = document.querySelector('#x2Pos'); //alinhamento do calculo x2 na lousa
const xResp = document.querySelector('#xResp'); //resposta lousa
const autoScrollExpressao = document.querySelector('#express'); //posicao da expressao
const autoScrollDelt = document.querySelector('#delta'); //posicao delta
const logo = document.querySelector('#logo'); //posicao logo

//-----------------------AUTO SCROOL-----------------------------------------
autoScrollDelt.addEventListener('click', () => {
    // Obtém a posição da div em relação à janela
    let deltaLousaPos = deltaLousa.getBoundingClientRect().y;

    // Rola até a div, considerando a posição atual
    window.scrollBy({ 
        top: deltaLousaPos - 100,
        behavior: 'smooth'
    });
})
autoScrollExpressao.addEventListener('click', () => {
    // Obtém a posição da div em relação à janela
    let baskLousaPos = baskLousa.getBoundingClientRect().y;

    // Rola até a div, considerando a posição atual
    window.scrollBy({
        top: baskLousaPos,
        behavior: 'smooth'
    });
})
function autoScrollCalculadora() {
    // rola a tela para a calculadora quando carregar o arquivo
    let logoPos = logo.getBoundingClientRect().y;

    // Rola até a div, considerando a posição atual
    window.scrollBy({
        top: logoPos,
        behavior: 'smooth'
    })
}

//--------------------------calculo de bhaskara-----------------------
calcBtn.addEventListener('click', bhaskara)
function bhaskara() {
    a = document.querySelector('#aValue').value
    b = document.querySelector('#bValue').value
    c = document.querySelector('#cValue').value

    resetarCampos()

    if( !a || !b || !c ) {
        // alert('inserir o valor de A, B, C')
         document.getElementById("info").innerHTML = 'inserir o valor de A, B, C.'
         return
     } else if ( a == 0) {
       // alert('O valor de A, deve ser diferente de 0')
        document.getElementById("info").innerHTML = 'O valor de A, deve ser diferente de 0.'
        return
    }
     
    const  delta = b * b -4 * a * c;
    
     if ( delta < 0 ) {
       // alert('Sem raízes reais')
        document.getElementById("info").innerHTML = 'O delta é negativo. Equação não possui raízes reais.'
            exibirDelta();
    }
    else {

        let raizDelta = Math.sqrt(delta)
         raizDelta = parseFloat(raizDelta.toFixed(2))
        const x1 = ( -b + Math.sqrt(delta)) / ( 2 *a )
        const x2 = ( -b - Math.sqrt(delta)) / ( 2 *a )
         console.log(raizDelta)
         exibirDelta()
         exibirBaskhara(delta, raizDelta, x1, x2)
         if( c == 0) {
             document.getElementById("info").innerHTML = 'O valor de C é zero, sua raiz será incompleta.'
         }

    }
}

//exibi o passo a passo para calcular delta
function exibirDelta() {
    document.querySelector('#delta').innerHTML = `Δ = ${(b * b) -4 * (a * c)}`;
    deltaLousa.innerHTML = `
        CALCULO DO DELTA <br/>
        Δ = B² -4 * A * C. <br/>
        Δ = ${b}² -4 * ${a} * ${c}. <br/>
        Δ = ${b * b} -4 * ${a} * ${c}. <br/>
        Δ = ${b * b} -4 * ${a * c}. <br/>
        Δ = ${b * b} ${-4 * (a * c)}. <br/>
        Δ = ${(b * b) -4 * (a * c)}. <br/>
        `
}
//exibi o passo a passo para calcular baskara
function exibirBaskhara(delta, raizDelta, x1, x2) {
    document.querySelector('#express').innerHTML = `
    ${a}x² ${b < 0 ? `${b}` : `+ ${b}`}x + ${c} = 0`;

    baskLousa.innerHTML = `
        <hr>
        <span> CALCULO DA BASKARA: </span> <br/>
        X = <span class="fracao"> -B ± √Δ <hr> 2 * A </span> <br/> <!-- Verifica se b é menor que 0, caso seja adiciona  colchetes na exibição -->
        ${b < 0 ? ` 
            X = <span class="fracao"> -(${b}) ± √${delta} <hr> 2 * ${a} </span> <br/>
            X = <span class="fracao"> -(${b}) ± √${delta} <hr> 2 * ${a} </span><br/>
        ` : `
            X = <span class="fracao"> -${b} ± √${delta} <hr> 2 * ${a} </span> <br/>
            X = <span class="fracao"> -${b} ± √${delta} <hr> 2 * ${a} </span><br/>
        `}
        
        X = <span class="fracao"> ${-b} ± ${raizDelta} <hr> ${2 * a} </span><br/>  `

    calcX1Position.innerHTML = `
        X1 = <span class="fracao"> ${-b} + ${raizDelta} <hr> ${2 * a} </span><br/>
        X1 = <span class="fracao"> ${-b + raizDelta} <hr> ${2 * a} </span><br/>
        X1 = <span class="fracao"> ${x1.toFixed(2)} </span><br/>`

    calcX2Position.innerHTML = `
        X2 = <span class="fracao">  ${-b} - ${raizDelta} <hr> ${2 * a} </span><br/>
        X2 = <span class="fracao"> ${-b - raizDelta} <hr> ${2 * a} </span><br/>
        X2 = <span class="fracao">  ${x2.toFixed(2)} </span><br/>`

    xResp.innerHTML = `
        <br/>
        X1 = ${x1.toFixed(2)} <br/>
        X2 = ${x2.toFixed(2)} <br/>
        `
    x1resp.innerHTML = "X1 = " + x1.toFixed(2)
    x2resp.innerHTML = "X2 = " + x2.toFixed(2)
}
//reseta os campos
function resetarCampos() { // limpa todos os campos
    document.getElementById('info').innerHTML = "Informações";
    baskLousa.textContent = "";
    x1resp.innerHTML = "X1 = 0";
    x2resp.innerHTML = "X2 = 0";
    deltaLousa.innerHTML = 'Os valores de A, B e C não foram informados'
    calcX1Position.innerHTML = ''
    calcX2Position.innerHTML = ''
    xResp.textContent = ""
}

//PopUp de dica quando carregar o documento e auto scrool para a calculadora
document.addEventListener("DOMContentLoaded", function () {
    // Exibir o coach mark ao carregar a página
    exibirCoachMark();

    autoScrollCalculadora()
});

function exibirCoachMark() {
    let coachMark = document.getElementById("coachMark");
    coachMark.style.display = "block";
}

function fecharCoachMark() {
    let coachMark = document.getElementById("coachMark");
    coachMark.style.display = "none";
}

