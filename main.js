const form = document.getElementById('form');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
let formEValido = false;


function validaCampo(numA,numB){
    return Number(numB) > Number(numA)
}



form.addEventListener('submit', function(e){
    console.log(document.getElementsByTagName('button').value)
    e.preventDefault();
    const mensagemSucesso = `Enviado e aprovado! O numero <b>${campoB.value}</b> é maior que o número <b>${campoA.value}</b>`

    formEValido = validaCampo(campoA.value,campoB.value);
    const containerMensagemSucesso = document.querySelector('.sucess-message');
    const containerMensagemErro = document.querySelector('.error-message');
    if (formEValido){
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemErro.style.display = 'none';

        campoA.value = ''
        campoB.value = ''
    }else{
        containerMensagemErro.style.display = 'block';
    }
}
)

form.addEventListener('keyup', function(e){
    formEValido = validaCampo(campoA.value,e.target.value);
    console.log(e);
    if (!formEValido && campoB.value > 0){
        campoB.classList.add('error');
    }else{
        campoB.classList.remove('error');
    }
}
)

