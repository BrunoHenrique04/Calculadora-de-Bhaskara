const dropDownBtn = document.querySelector('#dropDownBtn'); //armazena o botão do dropdown em uma variavel

dropDownBtn.addEventListener('click', dropDown)
function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show"); // altera a classe do dropdown para conseguir exibilo
}

// fecha o dropdown caso seja clicado na parte de fora dele
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show'); //remove a classe que exibe o dropdown fazendo ele voltar a se tornar invisivel
            }
        }
    }
}
// fecha o dropdown caso a tela seja delizada
window.addEventListener("scroll", ()=> {

        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');//remove a classe que exibe o dropdown fazendo ele voltar a se tornar invisivel
            }
        }

})