const x1resp = document.querySelector('#x1Resp')
const x2resp = document.querySelector('#x2Resp')
const expressao = document.querySelector('#expArit'); 
const page2 = document.querySelector('#page2')
const calcBtn = document.querySelector('#calcBtn');
const textoLousa = document.querySelector('#textoLousa');
const x1Pos = document.querySelector('#x1Pos');
const x2Pos = document.querySelector('#x2Pos');
const xResp = document.querySelector('#xResp');


calcBtn.addEventListener('click', bhaskara)

expressao.addEventListener('click', () => {
    console.log("scroll");

    // Obtém a posição da div em relação à janela
    let posicaoDiv = page2.getBoundingClientRect().y;

    // Rola até a div, considerando a posição atual
    window.scrollBy({ 
        top: posicaoDiv - 100, // Ajusta para cima 100 pixels
        behavior: 'smooth' //suave
    });
})


function bhaskara() {
    const a = document.querySelector('#aValue').value
    const b = document.querySelector('#bValue').value
    const c = document.querySelector('#cValue').value

    document.getElementById('info').innerHTML = "Informações";
    x1resp.innerHTML = "X1 = 0";
    x2resp.innerHTML = "X2 = 0";
    textoLousa.innerHTML = 'EXECUTE UMA CALCULO PARA TER SEU PASSO A PASSO'
    x1Pos.innerHTML = ''
    x2Pos.innerHTML = ''

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
        textoLousa.innerHTML = `
        Δ = B² -4 * A * C. <br/>
        Δ = ${b}² -4 * ${a} * ${c}. <br/>
        Δ = ${b * b} -4 * ${a} * ${c}. <br/>
        Δ = ${b * b} -4 * ${a * c}. <br/>
        Δ = ${b * b} ${-4 * (a * c)}. <br/>
        Δ = ${(b * b) -4 * (a * c)}. <br/>
        ` 
    }
    else {
        let raizDelta = Math.sqrt(delta)
         raizDelta = parseFloat(raizDelta.toFixed(2))
        const x1 = ( -b + Math.sqrt(delta)) / ( 2 *a )
        const x2 = ( -b - Math.sqrt(delta)) / ( 2 *a )
        textoLousa.innerHTML = `
        CALCULO DO DELTA: <br/>
        Δ = B² -4 * A * C. <br/>
        Δ = ${b}² -4 * ${a} * ${c}. <br/>
        Δ = ${b * b} -4 * ${a} * ${c}. <br/>
        Δ = ${b * b} -4 * ${a * c}. <br/>
        Δ = ${b * b} ${-4 * (a * c)}. <br/>
        Δ = ${(b * b) -4 * (a * c)}. <br/>
        <hr>
        CALCULO DA BASKHARA: <br/>
        X = <span class="fracao"> -B ± √Δ <hr> 2 * A </span> <br/>
        ${b < 0 ? `
            X = <span class="fracao"> -(${b}) ± √${delta} <hr> 2 * ${a} </span> <br/>
            X = <span class="fracao"> -(${b}) ± √${delta} <hr> 2 * ${a} </span><br/>
        ` : `
            X = <span class="fracao"> -${b} ± √${delta} <hr> 2 * ${a} </span> <br/>
            X = <span class="fracao"> -${b} ± √${delta} <hr> 2 * ${a} </span><br/>
        `}
        
        X = <span class="fracao"> ${-b} ± ${raizDelta} <hr> ${2 * a} </span><br/>  `

        x1Pos.innerHTML = `
        X1 = <span class="fracao"> ${-b} + ${raizDelta} <hr> ${2 * a} </span><br/>
        X1 = <span class="fracao"> ${-b + raizDelta} <hr> ${2 * a} </span><br/>
        X1 = <span class="fracao"> ${x1.toFixed(2)} </span><br/>`

        x2Pos.innerHTML = `
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
}


document.addEventListener("DOMContentLoaded", function () {
    // Exibir o coach mark ao carregar a página
    exibirCoachMark();
});

function exibirCoachMark() {
    let coachMark = document.getElementById("coachMark");
    coachMark.style.display = "block";
}

function fecharCoachMark() {
    let coachMark = document.getElementById("coachMark");
    coachMark.style.display = "none";
}
