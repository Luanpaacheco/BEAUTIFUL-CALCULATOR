let numero1;
let numero2;
let primeira = true;
let operador;

function colocar(N){
    var numero=document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML=numero+N;
}


function apagar(){
    document.getElementById("resultado").innerHTML="";
    primeira=true;
}


function opera(operado){
    operador=operado;
    numero1=document.getElementById("resultado").innerHTML;
    apagar(0);
    
}

// function opera(operador){
//     if(!primeira){
//         operador=operador;
//         colocar(operador);
//     }else{
//         apagar();
//         operador='';

//     }
// }

function mostrar(){
    numero2=document.getElementById("resultado").innerHTML;
    var resultado;
    switch (operador) {
        case '+':
            resultado=(numero1+numero2);
            document.getElementById("resultado").innerHTML=resultado;
            break;
        case '*':
            resultado=numero1*numero2;
            document.getElementById("resultado").innerHTML=resultado;
            break;
    
        default:
            break;
    }
    
}



    