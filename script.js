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
    }

    adicionar(){
        alert("Insira um nome!");
    }

    excluir(){
        alert("Pessoa excluída");
    }


}

var pessoa = new Pessoa();