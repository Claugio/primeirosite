const apiUrl = 'http://localhost:3000/produtos';

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const codigo = document.getElementById('codigo').value;
    const nome = document.getElementById('nome').value;
    const preco = document.getElementById('preco').value;

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ codigo, nome, preco }),
    }).then(response => response.json())
      .then(data => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
});

function listarProdutos() {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('listaProdutos');
            lista.innerHTML = '';
            data.forEach(produto => {
                const item = document.createElement('li');
                item.textContent = `${produto.codigo} - ${produto.nome} - ${produto.preco}`;
                lista.appendChild(item);
            });
        })
        .catch((error) => console.error('Error:', error));
}

function checkInputCodigo() {
    const codigoValor = codigo.value;
    if(codigoValor === ""){
        errorInput(codigo, "Preencha um código")
    }
}

function errorInput (input, mensagem){
    const formItem = input.parentElement;
    const textMensagem = formItem.querySelector("a")
    textMensagem.innerText = mensagem;
    formItem.className = "conteudo-formulario erro"
}