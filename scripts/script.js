let form = document.querySelector('#formulario');
let imagenPaleta = document.querySelector('#imgPaleta');
let selectPaletas = document.querySelector('select');
let pedidosAgendados = [];


form.addEventListener('submit', function (e) {

    e.preventDefault();

    let name = document.getElementById('nombre').value;
    let lastName = document.getElementById('apellido').value;
    let address = document.getElementById('dir').value;
    let flavor = selectPaletas.value;

    let pedido = {
        name,
        lastName,
        address,
        flavor
    }

    pedidosAgendados.unshift(pedido);

    console.log(pedidosAgendados)

    form.reset();
    
})

function mostrarImagen(value){

    let urlImage;

    switch (selectPaletas.value) {
        case '1': {//if youre going to reassign the value of a variable inside a case because its going to show a block scope error, put {} between the content of the case to avoid this
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
   
    return urlImage;
}

selectPaletas.addEventListener('change', function () {
    // imagenPaleta.style.display = 'inline';

    let urlPaleta = mostrarImagen(selectPaletas.value)

})




