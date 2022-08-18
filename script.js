

function salvar() {
    let dados = this.lerDados()
    if (this.validacampos(dados)) {
        alert("salvar")
    }
    console.log(dados)
}

function lerDados() {
    event.preventDefault()

    let dados = {}

    dados.nome = document.getElementById("nome").value
    dados.endereco = document.getElementById("endereco").value
    dados.telefone = document.getElementById("telefone").value
    dados.email = document.getElementById("email").value
    dados.motivo = document.getElementById("motivo").value
    dados.obs = document.getElementById("obs").value

    return dados
}

function validacampos(dados) {
    if (dados.nome == "") {
        alert("informe o nome : ")
        return false
    } if (dados.endereco == "") {
        alert("informe o endereço:")
        return false
    } if (dados.telefone == "") {
        alert("informe o telefone:")
        return false
    } if (dados.email == "") {
        alert("informe o email ")
        return false
    } if (dados.motivo == "") {
        alert("informe o motivo do motivo do contato: ")
        return false
    } 
    return true
}