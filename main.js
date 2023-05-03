const form = document.getElementById('form-numbers');
const num1 = document.getElementById('numero1');
const num2 = document.getElementById('numero2');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const mensagemSucesso = 'Números enviados com Sucesso!';
    const mensagemErro = 'O segundo número precisa ser maior que o primeiro';
    
    if (parseInt(num2.value) > parseInt(num1.value)){
        const containerMensagemSucesso = document.querySelector('.mensagem-sucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block';
        
        num1.value = '';
        num2.value = '';
        function enviar(){
            document.getElementById('msg-sucesso').style.display = 'none';
        }
        setTimeout(enviar, 4000)
    } else {
        num2.classList.add('error');
        const containerMensagemErro = document.querySelector('.mensagem-erro');
        containerMensagemErro.innerHTML = mensagemErro;
        document.querySelector('.mensagem-erro').style.display = 'block';
    }
})

num2.addEventListener('keyup', function(e){
    console.log(e.target.value);

    if (parseInt(num2.value) < parseInt(num1.value)){
        num2.classList.add('error');
        const containerMensagemErro = document.querySelector('.mensagem-erro');
        containerMensagemErro.innerHTML = mensagemErro
        document.querySelector('.mensagem-erro').style.display = 'block';
    } else {
        num2.classList.remove('error');
        document.querySelector('.mensagem-erro').style.display = 'none';       
    }
})