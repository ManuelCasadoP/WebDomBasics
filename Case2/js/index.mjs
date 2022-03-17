
/*
function multiplicaPorDos(event){
    let campoResultado=document.querySelector("#campoResultado").value;
    campoResultado = campoResultado * 2;
    document.querySelector("#campoResultado").value = campoResultado;  
    console.log("Multiplica por 2");
}

const botonPorDos = document.querySelector("#multiplicaPorDos");
  
botonPorDos.addEventListener("click", multiplicaPorDos);
*/

const botonPorDos = document.querySelector("#multiplicaPorDos")
botonPorDos.addEventListener("click", multiplicaPorDos);

function multiplicaPorDos(event){
    let campoResultado=document.querySelector("#campoResultado");
    campoResultado.value=campoResultado.value*2;
    document.querySelector("#multiplicaPorDos").value=campoResultado.value;
    
    console.log("Multiplica por 2");

}




