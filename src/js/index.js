function redirecionar1() {
    window.location.href = ''
}

var menu = window.document.getElementById('menu')
menu.addEventListener('mouseenter', entrar1)
menu.addEventListener('mousemove', movimento1)
menu.addEventListener('mouseout', sair1)

function entrar1() {
    menu.style.color = 'White'
}

function movimento1() {
    menu.style.color = 'White'
}

function sair1() {
    menu.style.color = 'Black'
}

var sobre = window.document.getElementById('sobre')
sobre.addEventListener('mouseenter', entrar2)
sobre.addEventListener('mousemove', movimento2)
sobre.addEventListener('mouseout', sair2)

function entrar2() {
    sobre.style.color = 'White'
}

function movimento2() {
    sobre.style.color = 'White'
}

function sair2() {
    sobre.style.color = 'Black'
}

var projetos = window.document.getElementById('projetos')
projetos.addEventListener('mouseenter', entrar3)
projetos.addEventListener('mousemove', movimento3)
projetos.addEventListener('mouseout', sair3)

function entrar3() {
    projetos.style.color = 'White'
}

function movimento3() {
    projetos.style.color = 'White'
}

function sair3() {
    projetos.style.color = 'Black'
}

var contato = window.document.getElementById('contato')
contato.addEventListener('mouseenter', entrar4)
contato.addEventListener('mousemove', movimento4)
contato.addEventListener('mouseout', sair4)

function entrar4() {
    contato.style.color = 'White'
}

function movimento4() {
    contato.style.color = 'White'
}

function sair4() {
    contato.style.color = 'Black'
}