let pesos_1 = document.getElementById('dolares-1')
let dolares_1 = document.getElementById('pesos-1')
let boton_1 = document.getElementById('boton-1')
let pesos_2 = document.getElementById('dolares-2')
let dolares_2 = document.getElementById('pesos-2')
let boton_2 = document.getElementById('boton-2')
let dolar;
let valor;
let dolares;





let respuesta = () => {
    return fetch('https://api.bluelytics.com.ar/v2/latest')
    .then(response => response.json())
};
let principal = async()=>{
    dolar = await respuesta();
    valor = dolar.blue.value_buy;
    dolares = valor * pesos_1.value;
    dolares_1.innerHTML = dolares;
}

boton_1.addEventListener('click',principal)

let secundario = async()=>{
    dolar = await respuesta();
    valor = dolar.blue.value_sell;
    dolares = valor * pesos_2.value;
    dolares_2.innerHTML = dolares;
}

boton_2.addEventListener('click',secundario)