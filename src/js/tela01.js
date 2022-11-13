//JS 
const inputText = document.querySelector('#nome')
const btnJogar = document.querySelector('#btnJogar')
const btnPlay = document.querySelector('#btnPlay')
const anterior = document.querySelector('#anterior')
const tentativasTxt = document.querySelector('#tentativas')

let numAleat = []
let lastNumber = ''
let pontuacao = 0
let tentativas = 0
let tipoPonto = 0

function showHide(obj,action){
    document.querySelector(obj).classList[action]('hide')
}
function play () {
    let numbers = document.querySelectorAll('#numbers img')
    numbers.forEach((el, i) => {
        numAleat[i] = parseInt(Math.random() * 3) + 1
        // el.addEventListener('click', (e) => {
        //     e.target.src = `/images/game/number_${numAleat[i]}.png`
        // })
        el.src = `/images/game/number_${numAleat[i]}.png`
    })

    tentativas++
    return numAleat
}


btnJogar.addEventListener('click',()=>{
    if (inputText.value != '') {
        localStorage.setItem('jogador', inputText.value)
    }
    else {
        alert('Insira o nome do jogador')
        return
    }

    showHide('#telaJogo','remove')
    showHide('#telaInicial','add')

    let nomeJogador = localStorage.getItem('jogador')
    document.querySelector('#user').innerText = `Olá ${nomeJogador}, boa sorte!`

    //Preparação para primeira rodada
    localStorage.removeItem('lastNumber')
    localStorage.removeItem('number')
    anterior.innerText = `0 0 0`
    $('.box img').addClass('show-box')
    $('.box img').removeClass('hidden-box')
})


btnPlay.addEventListener('click',()=>{

    $('.box img').addClass('hidden-box')
    $('.box img').removeClass('show-box')

    // Caso exista lastnumber no localstorage, carrega na varíavel
    localStorage.getItem('number')
        ? lastNumber = localStorage.getItem('number')
        : lastNumber = '0,0,0'
    // Preenche o span anterior
    if (lastNumber != '') {
        anterior.innerText = `${lastNumber[0]} ${lastNumber[2]} ${lastNumber[4]}`
    }

    // Roda o jogo e armazena valor
    localStorage.setItem('number', play())
    let number = localStorage.getItem('number')

    //Verifica casos de pontuação
    if (number == lastNumber)
        tipoPonto = 2
    else if (number == '1,1,1' || number == '2,2,2' || number == '3,3,3')  
        tipoPonto = 1

    tentativasTxt.innerText = `${10 - tentativas}`

    // console.log(tentativas)

    //Verifica a quantidade de tentativas
    if (tentativas > 10) {

        $('.modal').modal('show')
        $('#mensagemRegras').addClass('hide')
        $('#winLooser').removeClass('hide')

        showHide('#telaJogo','add')
        showHide('#user','add')

        //Verifica pontuação para escolher vitória ou derrota
        if(pontuacao >= 3)  {
            $('<p />', {
                text: `Parabéns ${localStorage.getItem('jogador')}, você venceu!`,
                class: 'my-2 text-center'
            }).prependTo('#winLooser')
            document.querySelector('#winLooser img').src = '/images/game/winner.png'
        }
        else {
            $('<p />', {
                text: `Tente novamente`,
                class: 'my-2 text-center'
            }).prependTo('#winLooser')
            document.querySelector('#winLooser img').src = '/images/game/looser.jpg'
        }
    }

    //Animação para mostrar um número por vez
    setTimeout(function() {
        $('.box img').eq(0).removeClass('hidden-box')
        $('.box img').eq(0).addClass('show-box')
    }, 1000);
    setTimeout(function() {
        $('.box img').eq(1).removeClass('hidden-box')
        $('.box img').eq(1).addClass('show-box')
    }, 1250);
    setTimeout(function() {
        $('.box img').eq(2).removeClass('hidden-box')
        $('.box img').eq(2).addClass('show-box')
    }, 1500);

    //Depois de mostrar os 3 números, apresenta mensagem de pontuação
    setTimeout(function() {
        if (tipoPonto == 1) {
            alert('1 Ponto! Combinação de 3 números iguais')
            pontuacao += 1
        }
        else if (tipoPonto == 2) {
            alert('2 Pontos! O mesmo número em sequencia')
            pontuacao += 2
        }
        document.querySelector('#pontuacao').innerText = `${pontuacao}` 
        tipoPonto = 0
    }, 2500);
})