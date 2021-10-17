let peso = 80;

if(peso > 100) {
    console.log('A peça possui um peso de '+ peso + ' gramas, portanto está adequado e pode ser cadastrada!')
}else{
    console.log('A peça possui um peso de '+ peso + ' gramas, portanto não possui o peso mínimo e não pode ser cadastrado')
};

let listaPecas = ['Disco de freio','Amortecedor','Virabrequim','Vela','Bateria','Radiador','Correia','Carter','Ignição','Embreagem'];

let numeroPecas = listaPecas.length;

if (numeroPecas < 10) {
    console.log('A lista ainda possui espaço para mais peças.')    
} else {
    console.log('Não há espaço disponível na lista, a capacidade máxima foi atingida')    
};

let nomePeca = listaPecas[0];

if (nomePeca.length > 3) { 
    console.log('O nome possui ' + nomePeca.length + ' caracteres, portanto o nome é válido, pode seguir com o cadastro');
    
} else {
    console.log('O nome possui ' + nomePeca.length + ' caracteres, portanto o nome não é válido, deveria ter mais de 3 caracteres para ser válido');
}

