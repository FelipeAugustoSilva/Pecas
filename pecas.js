var listadePeca = ["Tensor","Correia","Rolamento","Filtros","Palhetas","Mangueira","Barra estabilidazora"]

if (listadePeca.length < 3){
    console.log("E possivel cadastar mais pecas")
} else {
    console.log("Nao tem espaço na lista")
}

let peso = 50;
if(peso<100){
    console.log("A peça deve pesar no minimo 100g")
} else {
    console.log("A peça possui o peso adequado")
}

let nomePeca = "Tensor"
if (nomePeca.length>3){
    console.log("Nome da peça esta adequado")
} else {
    console.log("Nome da peça não esta adequado")
}