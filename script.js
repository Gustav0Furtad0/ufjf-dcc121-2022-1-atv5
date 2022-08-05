/*function adicionar(){

    let text = document.getElementById("nome").value;
    let list = document.getElementById("lista").innerHTML;

    if(text == null){
        alert("Insira um nome!");
    }
    
    if(text != null){
    list += "<li>" + text + "</li>";
    document.getElementById("lista").innerHTML = list;
    }else{
        alert("Insira um nome!");
    }

    document.getElementById("nome").value = null;
}*/

class Pessoa{
    constructor(){
        this.nome = '';
        this.arrayProdutos = [];
    }

    adicionarNome(){
        let pessoa = this.lerNome();

        if(this.validaCampo(pessoa)){
            alert("Pessoa adicionada");
        }

        console.log(pessoa);
    }

    lerNome(){
        let pessoa = {}

            pessoa.nomepessoa = document.getElementById("nome").value;

            return pessoa;
        
    }

    excluirNome(){
        alert("Pessoa excluída");
    }

    validaCampo(pessoa){
        let msg = '';

        if(pessoa.nomepessoa == ''){
            msg += 'Informe o nome da pessoa \n';
        }

        if(msg != ''){
            alert(msg);
            return false
        }

        return true;
    }


}

var pessoa = new Pessoa();