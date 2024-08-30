let numero1;
let numero2;
let primeira = true;
let operador;
let historico;

function colocar(N){
    if(primeira){
        var numero=document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML=numero+N;
        document.getElementById("historico").innerHTML=numero+N; 
    }else{
        var numerox=document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML=numerox+N;
        var numero=document.getElementById("historico").innerHTML;
        historico=numero;
        document.getElementById("historico").innerHTML=numero+N;

    }
    

    
    
}
function apagarTudo(){
    document.getElementById("resultado").innerHTML="";
    document.getElementById("historico").innerHTML="";
    primeira=true;
    numero1=0;
    numero2=0;
    historico="";
    
}
function apagarCE(){
    document.getElementById("historico").innerHTML=historico;
    document.getElementById("resultado").innerHTML="";
}

function apagar(){
    //document.getElementById("historico").innerHTM=document.getElementById("historico").innerHTM.substring(document.getElementById("resultado").innerHTML);
    document.getElementById("resultado").innerHTML="";

    // primeira=true;
    
    
}


function opera(operado){
    var numero=document.getElementById("historico").innerHTML;
    document.getElementById("historico").innerHTML= numero+operado;
    if(primeira){
        operador=operado;
        numero1=Number(document.getElementById("resultado").innerHTML);
        apagar();
        if(operado=='%'){
            operador=operado;
            mostrar();
        }
        primeira=false;
    }else {
        switch (operador) {
            case '+':
                numero1=(Number(numero1)+Number(document.getElementById("resultado").innerHTML));
                
                break;
            case '*':
                numero1=numero1*Number(document.getElementById("resultado").innerHTML);
                
                break;
            case '-':
                numero1=numero1-Number(document.getElementById("resultado").innerHTML);
                    
                break;
            case '/':
                numero1=numero1/Number(document.getElementById("resultado").innerHTML);
                
                break;
            case '*':
                numero1=numero1*Number(document.getElementById("resultado").innerHTML);
                
                break;
            case '%':
                    operador=operado;
                    mostrar();
                    break;
            default:
                break;
        }
        operador=operado;
        apagar();
    }    
}



function mostrar(){
    numero2=Number(document.getElementById("resultado").innerHTML);
    var resultado;
    switch (operador) {
        case '+':
            resultado=(Number(numero1)+Number(numero2));
            document.getElementById("resultado").innerHTML=resultado;
            break;
        case '*':
            resultado=numero1*numero2;
            document.getElementById("resultado").innerHTML=resultado;
            break;
        case '-':
            resultado=numero1-numero2;
            document.getElementById("resultado").innerHTML=resultado;
            break;
        case '/':
            resultado=numero1/numero2;
            document.getElementById("resultado").innerHTML=resultado;
            break;
        case '*':
            resultado=numero1*numero2;
            document.getElementById("resultado").innerHTML=resultado;
            break;
        case '%':
            resultado=numero1/100;
            document.getElementById("resultado").innerHTML=resultado;
            break;
        default:
            break;
    }
    primeira=true;
    
}



    