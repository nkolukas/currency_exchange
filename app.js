let pesos_1 = document.getElementById('pesos-1')
let dolares_1 = document.getElementById('dolares-1')
let boton = document.getElementById('boton')
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

boton.addEventListener('click',principal)