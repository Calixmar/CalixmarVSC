function suma(a,b){
    return a+b;
}
//genera una funcion para restar dos variables
function resta(a,b){
    return a-b;
}
//genera una funcion para multiplicar dos variables
function multiplica(a,b){
    return a*b;
}
//genera una funcion para dividir dos variables
function divide(a,b){

    if ( b == 0 ){ //si el divisor es 0 se muestra un mensaje de error y se retorna undefined

        alert("No se puede dividir por cero");

        return undefined;

    }else{ //si el divisor no es 0 se retornara la division entre los dos numeros ingresados

        return a/b;

    } 
}