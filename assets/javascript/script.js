let nome = document.querySelector('#inserirNome')
let email = document.querySelector('#email')
let senha = document.querySelector('#coloqueSenha')
let endereco = document.querySelector('#inserirEndereco')
let cidade = document.querySelector('#inserirCidade')
let estado = document.querySelector('inserirEstado')
let cep = document.querySelector('#inserirCEP')
let check = document.querySelector('#gridCheck')
let mapa = document.querySelector('#mapa')


let nomeOk = false
let emailOk = false
let senhaOk = false
let enderecoOk = false
let cidadeOk = false
let estadoOk = false
let cepOk = false
let checkOk = false


/*Validando nome */ 

function validaNome(){
    let txtNome = document.querySelector('#txtNome')

    if(nome.value.length < 3){
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }

}


function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }

}


function validaSenha(){
    let txtSenha = document.querySelector('#txtSenha')

    if(senha.value.length < 5){
        txtSenha.innerHTML = 'Senha inválida'
        txtSenha.style.color = 'red'
    }else{
        txtSenha.innerHTML = 'Senha Válida'
        txtSenha.style.color = 'green'
        senhaOk = true
    }
}


function validaEndereco(){
    let txtEndereco = document.querySelector('#txtEndereco')
    if(endereco.value.length < 10){
        txtEndereco.innerHTML = 'Endereço inválido'
        txtEndereco.style.color = 'red'
    }else{
        txtEndereco.innerHTML = 'Endereço Válido'
        txtEndereco.style.color = 'green'
        enderecoOk = true
    }

}

function validaCidade(){
    let txtCidade = document.querySelector('#txtCidade')
    if(cidade.value.length < 5){
        txtCidade.innerHTML = 'Cidade inválido'
        txtCidade.style.color = 'red'
    }else{
        txtCidade.innerHTML = 'Cidade Válido'
        txtCidade.style.color = 'green'
        cidadeOk = true
    }

}

function validaEstado(){
    let txtEstado = document.querySelector('#txtEstado')
    if(estado == 'null'){
        txtEstado.innerHTML = 'Estado inválido'
        txtEstado.style.color = 'red'
    }else{
        txtEstado.innerHTML = 'Estado Válido'
        txtEstado.style.color = 'green'
    }
}

function validaCep(){
    let txtCep = document.querySelector('#txtCep')
    if(cep.value.length < 8){
        txtCep.innerHTML = 'CEP inválido'
        txtCep.style.color = 'red'
    }else{
        txtCep.innerHTML = 'CEP Válido'
        txtCep.style.color = 'green'
        cepOk = true
    }

}




function enviar(){
    if (nomeOk == true && emailOk == true && senhaOk == true && enderecoOk == true && cidadeOk == true){
        alert ('Formulário enviado com sucesso!')
    } else{
        alert('Preencha o formulário corretamente antes de enviar!')
    }
}
