const URL = "https://www.psswrd.net/api/v1/password/?length=17&lower=1&upper=0&int=1&special=0";
const btnGerar = document.getElementById("btn-gerar");
const inputSenha = document.getElementById("input-senha");
const btnCopiar = document.getElementById("btn-copiar");

btnGerar.addEventListener("click", gerarSenha);

async function gerarSenha () {
    const resp = await fetch(URL);
    const obj = await resp.json();
    inputSenha.value = obj.password;
}

btnCopiar.addEventListener("click", function () {
    const senhaGerada = inputSenha.value;
    inputSenha.select();
    navigator.clipboard.writeText(senhaGerada);
    btnCopiar.textContent = "Copiado!";
    btnCopiar.classList.add("btn-copiado");
    setTimeout(() => {
        btnCopiar.textContent = "Copiar";
        btnCopiar.classList.remove("btn-copiado");
    }, 2000);
});

gerarSenha();