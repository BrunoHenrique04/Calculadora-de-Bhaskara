const $a = document.querySelector('#aValue')
const $b = document.querySelector('#bValue')
const $c = document.querySelector('#cValue')
const $x1 = document.querySelector('#x1Resp')
const $x2 = document.querySelector('#x2Resp')
const expressao = document.querySelector('#expArit'); 
const page2 = document.querySelector('#page2')
const calcBtn = document.querySelector('#calcBtn');
const $textoLousa = document.querySelector('#textoLousa');
const $x1Pos = document.querySelector('#x1Pos');
const $x2Pos = document.querySelector('#x2Pos');
const $xResp = document.querySelector('#xResp');


calcBtn.addEventListener('click', bhaskara)

expressao.addEventListener('click', () => {
    console.log(page2);

    // Obtém a posição da div em relação à janela
    let posicaoDiv = page2.getBoundingClientRect().y;

    // Rola até a div, considerando a posição atual
    window.scrollBy({ 
        top: posicaoDiv - 100, // Ajusta para cima 20 pixels
        behavior: 'smooth'
    });
})


function bhaskara() {
    document.getElementById('page2')
    document.getElementById('louusa_texto')
    document.getElementById('info').innerHTML = "Informações";
    $x1.innerHTML = "X1 = 0";
    $x2.innerHTML = "X2 = 0"; 
    console.log("bhask function executada");

    const a = $a.value;
    const b = $b.value;
    const c = $c.value;
    if( !a || !b || !c ) {
        // alert('inserir o valor de A, B, C')
         document.getElementById("info").innerHTML = 'inserir o valor de A, B, C.'
         return
     } else if ( a == 0) {
       // alert('O valor de A, deve ser diferente de 0')
        document.getElementById("info").innerHTML = 'O valor de A, deve ser diferente de 0.'
    }
     
    const  delta = b * b -4 * a * c;
    
     if ( delta < 0 ) {
       // alert('Sem raízes reais')
        document.getElementById("info").innerHTML = 'O delta é negativo. Equação não possui raízes reais.'
        $textoLousa.innerHTML = `
        \u0394 = B^2 -4 * A * C. <br/>
        \u0394 = ${b}^2 -4 * ${a} * ${c}. <br/>
        \u0394 = ${b * b} -4 * ${a} * ${c}. <br/>
        \u0394 = ${b * b} -4 * ${a * c}. <br/>
        \u0394 = ${b * b} ${-4 * (a * c)}. <br/>
        \u0394 = ${(b * b) -4 * (a * c)}. <br/>
        ` 
    }
    else {
        const raizDelta = Math.sqrt(delta)
        const x1 = ( -b + Math.sqrt(delta)) / ( 2 *a )
        const x2 = ( -b - Math.sqrt(delta)) / ( 2 *a )
        $textoLousa.innerHTML = `
        CALCULO DO DELTA: <br/>
        \u0394 = B^2 -4 * A * C. <br/>
        \u0394 = ${b}^2 -4 * ${a} * ${c}. <br/>
        \u0394 = ${b * b} -4 * ${a} * ${c}. <br/>
        \u0394 = ${b * b} -4 * ${a * c}. <br/>
        \u0394 = ${b * b} ${-4 * (a * c)}. <br/>
        \u0394 = ${(b * b) -4 * (a * c)}. <br/>
        <hr>
        CALCULO DA BASKHARA: <br/>
        X = -B &#177 &#8730\u0394 / 2 * A <br/>
        X = -${b} &#177 &#8730 ${delta} / 2 * ${a} <br/>
        X = ${-b} &#177 ${raizDelta} / 2 * ${a} <br/>
        X = ${-b} &#177 ${raizDelta} / ${2 * a} <br/>  `

        $x1Pos.innerHTML = `
        X1 = ${-b} + ${raizDelta} / ${2 * a} <br/>
        X1 = ${-b + raizDelta} / ${2 * a} <br/>
        X1 = ${(-b + raizDelta) / (2 * a)} <br/>`

        $x2Pos.innerHTML = `
        X2 = ${-b} - ${raizDelta} / ${2 * a} <br/>
        X2 = ${-b - raizDelta} / ${2 * a} <br/>
        X2 = ${(-b - raizDelta) / (2 * a)} <br/>`

        $xResp.innerHTML = `
        <br/>
        X1 = ${x1.toFixed(2)} <br/>
        X2 = ${x2.toFixed(2)} <br/>
        `

        
        $x1.innerHTML = "X1 = " + x1.toFixed(2)
        $x2.innerHTML = "X2 = " + x2.toFixed(2)

    }
}


document.addEventListener("DOMContentLoaded", function () {
    // Exibir o coach mark ao carregar a página
    exibirCoachMark();
});

function exibirCoachMark() {
    var coachMark = document.getElementById("coachMark");
    coachMark.style.display = "block";
}

function fecharCoachMark() {
    var coachMark = document.getElementById("coachMark");
    coachMark.style.display = "none";
}
