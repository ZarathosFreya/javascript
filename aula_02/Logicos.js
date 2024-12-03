const leia = require('readline-sync')

const usuario = 'user@email.com.br'
const senha = 'user1234'
const isAdmin = false
const isGerente = true
const isBlock = false

console.log("Tela de Login")

let usuarioLogin = leia.question('Digite o seu usuauser@rio: ')

let senhaLogin = leia.question('Digite a sua senha: ', {hideEchoBack:true,})

if (usuarioLogin === usuario && senhaLogin === senha){
    var mensagem = "Seja Bem Vindo! Usuário autenticado com sucesso!"
}else{
    var mensagem = "Acesso Negado!"
}

console.log(mensagem)

if(!isBlock){
    console.log("Usuario ativo!")
}else{
    console.log("Usuario esta inativo! Contate o Administrador!")
    process.exit(0)
}
//para ativar essa condição, mude isBlock para true
//Obs: há um ! em isBlock, significa não bloquado

if(isAdmin || isGerente){
    console.log("Acesso ao painel administrativo liberado!")
}else{
    console.log("Acesso ao painel administrativo negado!")
}