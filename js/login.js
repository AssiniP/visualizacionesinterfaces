let cuil = document.getElementById('input-cuil');
let password = document.getElementById('input-pass');
let mensaje = document.getElementById('mensaje');
let mensaje_cuil = document.getElementById('mensaje-cuil');
cuil.addEventListener('keyup', () => {

    console.log(cuil.value);
    if (cuil.value.length > 11) {
        mensaje_cuil.innerText = "Cuil no válido";
        mensaje_cuil.style.color = 'red';
        setInterval(function () {
            window.location.reload();
        }, 5000);
    } else {
        if (cuil.value.length == 11) {
            let variable = cuil.value[0] + cuil.value[1];

            switch (variable) {
                case '23':
                    break;
                case '30':
                    break;
                case '27':
                    break;
                case '20':
                    break;
                case '24':
                    break;
                case '25':
                    break;
                case '26':
                    break;
                default:

                    mensaje_cuil.innerText = "Cuil no válido";
                    mensaje_cuil.style.color = 'red';
                    setInterval(function () {
                        window.location.reload();
                    }, 5000);
                    break;
            }
        }

    }

});

password.addEventListener('keyup', () => {
    if (password.value.length > 8) {
        mensaje.innerText = "Contraseña no válido, su contraseña debe contener 8 caracteres, sin carácteres especiales.";
        mensaje.style.color = 'red';
    } else {
        if (password.value.length == 8) {
            var patron = /^[a-zA-Z0-9]+$/;

            patron.test(password.value) ? mensaje.innerText = "Contraseña no válido, su contraseña debe contener 8 caracteres, sin carácteres especiales." : "";
            if (!patron.test(password.value)) {
                setInterval(function () {
                    window.location.reload();
                }, 5000);
            }
        }
    }
})