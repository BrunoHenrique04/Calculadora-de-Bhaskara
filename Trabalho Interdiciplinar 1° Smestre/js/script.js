const $a = document.querySelector('#aValue')
const $b = document.querySelector('#bValue')
const $c = document.querySelector('#cValue')
const $x1 = document.querySelector('#x1Resp')
const $x2 = document.querySelector('#x2Resp')
 
function bhaskara() {
    console.log("bhask function executada");

    const a = $a.value;
    const b = $b.value;
    const c = $c.value;
    if( !a || !b || !c ) {
        // alert('inserir o valor de A, B, C')
         document.getElementById("info").innerHTML = 'inserir o valor de A, B, C.'
     } else if ( a == 0) {
       // alert('O valor de A, deve ser diferente de 0')
        document.getElementById("info").innerHTML = 'O valor de A, deve ser diferente de 0.'
    }
     
    const  delta = b * b -4 * a * c;
    
     if ( delta < 0 ) {
       // alert('Sem raízes reais')
        document.getElementById("info").innerHTML = 'O delta é negativo. Equação não possui raízes reais.'
    }
    else {
        const x1 = ( -b + Math.sqrt(delta)) / ( 2 *a )
        const x2 = ( -b - Math.sqrt(delta)) / ( 2 *a )

        $x1.innerHTML = "X1 = " + x1
        $x2.innerHTML = "X2 = " + x2

    }
}
