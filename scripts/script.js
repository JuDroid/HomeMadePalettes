let form = document.querySelector('form');
let imagenPaleta = document.querySelector('#imgPaleta');
let selectPaletas = document.querySelector('select');
let pedidosAgendados = [];


form.addEventListener('submit', function (e) {

    e.preventDefault();

    let name = document.getElementById('nombre').value;
    let lastName = document.getElementById('apellido').value;
    let addres = document.getElementById('direccion').value;
    let flavor = selectPaletas.value;

    let pedido = {
        name,
        lastName,
        addres,
        flavor
    }

    pedidosAgendados.unshift(pedido);

    
})


selectPaletas.addEventListener('change', function () {
    imagenPaleta.style.display = 'inline';

    let urlImage;


    switch (selectPaletas.value) {
        case '1': {
            urlImage = "./Images/Mango.png";
            break;}

        case '2':{
            urlImage = "./Images/Sandia.png";
            break;}

        case '3': {
            urlImage = "./Images/Fresa.png";
            break;}

        case '4':{
            urlImage = "./Images/Arandanos.png";
            break;}

        default:
            imagenPaleta.style.display = 'none';
        break;
    }
   

    imagenPaleta.setAttribute('src', urlImage);
})


