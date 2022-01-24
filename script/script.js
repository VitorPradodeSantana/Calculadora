let limpar = document.querySelector('.clear');

function inserir(num){
    let resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado + num;

}

limpar.addEventListener('click', function(){
    let resultado = document.getElementById('resultado').value = '';
});

function calcular(n1, n2){
    let operacao = `${n1} ${operador} ${n2}`; 
}

function limparUm(){
    let resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.substring(0, resultado.length - 1);
}

function calcular(){
    let resultado = document.getElementById('resultado').value;
    if(resultado){
        document.getElementById('resultado').value = eval(resultado);
    }else{
       let resultado = document.getElementById('resultado').value = "Digite uma operação !"; 
    }
}



