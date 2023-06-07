const form = document.getElementById('form-numbers');
const num1 = document.getElementById('numero1');
const num2 = document.getElementById('numero2');
const mensagem = document.getElementById('msg');
const msg = document.querySelector('msg');


form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const mensagemSucesso = 'Números enviados com Sucesso!';
    const mensagemErro = 'O segundo número precisa ser maior que o primeiro';
    
    if (parseInt(num2.value) > parseInt(num1.value)){
        const containerMensagemSucesso = document.getElementById('msg');
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block';
        containerMensagemSucesso.style.backgroundColor = '#27ae60';
        num2.classList.remove('error');
        
        num1.value = '';
        num2.value = '';
        function enviar(){
            document.getElementById('msg').style.display = 'none';
        }
        setTimeout(enviar, 4000)
    } else {
        num2.classList.add('error');
        const containerMensagemErro = document.getElementById('msg');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.backgroundColor = 'rgba(255, 0, 0, 0.736)';
        containerMensagemErro.style.display = 'block';
    }
})
