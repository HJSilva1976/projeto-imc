//var -> variável que pode ser redeclarada e "vaza" o escopo
//let -> variável que não pode ser redeclarada e só pode ser ultilizada dentro do escopo
//const -> constante que não pode ter seu valor alterado

const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btn = document.querySelector('#btn');
const btnModal = document.querySelector('#btn-modal');
const bgModal = document.querySelector('.bg-modal');
const resultado = document.querySelector('.resultado');
const classificacao = document.querySelector('.classificacao');

const lgpd = document.querySelector('.lgpd');
const btnLgpd = document.querySelector('#btn-lgpd');

//verificar se o usuário já fechou a lgpd
//Se sim, não mostrar mais a informação

// == comparação (igualdade)
// != comparação (diferença)

if (localStorage.getItem('fechouLgpd') == 'sim') {
    lgpd.classList.add('closed');
}

function fecharLgpd() {
    lgpd.classList.add('closed'); //existe no modal essa classe closed
    //lgpd.style.display='none';   -->podeia ser assim também para esconder a barra vermelha ao clicar no botão

    //guardar a informação que ele fechou
    //session -> armazena durante a navegção(apaga quando fecha a aba)
    //local -> armazena na máquina (só apaga quando o usuário limpa o browser)

    //chave,    valor
    localStorage.setItem('fechouLgpd', 'sim');
    //sessionStorage.setitem('fechouLgpd', 'sim');


}

// console.log(peso);
// console.log(altura);
// console.log(btn);

//cor é um argumento/parâmetro da função //poderia ser qualquer outro nome
function colorImc(cor) {
    classificacao.style.color = cor;
    resultado.style.color = cor;
}

function calcularImc() {
    //imc = peso / (altura*altura)
    //!= comparação (simbolo de diferente - diferença)
    //== comparação (igualdade)

    //&& e
    // || ou

    //verficar se os valores são deferentes do vazio
    if (peso.value != '' && altura.value != '') {

        let imc = peso.value / (altura.value * altura.value);

        // alert('Seu IMC é: ' + imc.toFixed(2))
        bgModal.classList.remove('closed'); //mostrando o modal
        resultado.innerHTML = imc.toFixed(2); //escrevendo o resultado da fórmula dentro do <span> resultado tpfixed(2) duas casas após o zero



        if (imc < 18.5) {
            classificacao.innerHTML = 'Abaixo do peso';
            colorImc('#E82C03'); //acionando afunção que irá alterar as cores (ver linha 16)
        }

        else if (imc < 24.9) {
            classificacao.innerHTML = 'Peso Normal';
            colorImc('#00A11A');
        }

        else if (imc < 29.9) {
            classificacao.innerHTML = 'Sobrepeso';
            colorImc('#BCAA05');
        }

        else if (imc < 34.9) {
            classificacao.innerHTML = 'Obesidade grau I';
            colorImc('#FF0000');
        }

        else if (imc < 39.9) {
            classificacao.innerHTML = 'Obesidade grau II';
            colorImc('#C60000');
        }

        else {
            classificacao.innerHTML = 'Obesidade grau III';
            colorImc('#820101');
        }
    }

    else {
        alert('Preencha todos os campos!');
    }


}

function fecharModal() {
    // alert('fechar modal');
    bgModal.classList.add('closed');
    peso.value = '';
    altura.value = '';
}


btnModal.addEventListener('click', fecharModal)

//acionando a função calcularImc a partir do click no botão
btn.addEventListener('click', calcularImc);

const nome = prompt('Qual o seu nome?')
alert('Olá ' + nome)
