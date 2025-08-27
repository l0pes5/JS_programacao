
var nome, idade
nome=prompt("Digite seu nome:")
idade=prarseInt(prompt("Digite a sua idade: "))

if(idade>=18){
    alert(nome +"você já pode tentar tirar a CNH")
}
else{
    alert(nome="você ainda não tem idade suficiente")
}