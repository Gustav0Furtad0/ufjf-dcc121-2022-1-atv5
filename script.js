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
        this.num = 1;
        this.arrayPessoas = [];
    }

    adicionarNome(){
        let pessoa = this.lerNome();

        if(this.validaCampo(pessoa)){
            this.adicionar(pessoa);
        }

        this.listaTabela();
        document.getElementById("nome").value='';
    }

    listaTabela(){
        let tabnomes = document.getElementById('tabnomes');
        tabnomes.innerText = '';

        for(let i=0; i< this.arrayPessoas.length; i++){
            let linhas = tabnomes.insertRow();

            let t_num = linhas.insertCell();
            let t_nome = linhas.insertCell();
            let t_excluir = linhas.insertCell();

            t_nome.innerText = this.arrayPessoas[i].nomepessoa;
            t_num.innerText = this.arrayPessoas[i].num;

            t_num.classList.add("num_tab");

            t_excluir.classList.add("excluir");

            let img = document.createElement("img");
            img.src = './img/delete.png';
            img.setAttribute("onclick", "pessoa.deletar("+ this.arrayPessoas[i].num +")");

            t_excluir.appendChild(img);

            console.log(this.arrayPessoas);

        }
    }

    adicionar(pessoa){
        this.arrayPessoas.push(pessoa);
        this.num++;
        numpessoas++;
        console.log(numpessoas);
        calculaPrecoFinal();
    }

    lerNome(){
        let pessoa = {}
            
            pessoa.num = this.num;
            pessoa.nomepessoa = document.getElementById('nome').value;

            return pessoa;
        
    }

    deletar(num){

        let tabnomes = document.getElementById('tabnomes');

        for(let i=0; i<this.arrayPessoas.length; i++){
            if(this.arrayPessoas[i].num == num){
                this.arrayPessoas.splice(i, 1);
                tabnomes.deleteRow(i);
            }
        }

        console.log(this.arrayPessoas);

        numpessoas--;
        console.log(numpessoas)
        calculaPrecoFinal();
       // alert("Pessoa excluída");
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