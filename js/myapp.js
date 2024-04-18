const $usuario = $("#usuario");
const $password = $("#password");
const $tipoUsuario = $("#tipoUsuario");

/* CREDENCIALES VERDADERAS */
const credenciales = {
    alumno: {
        usuario: "UCHALUMNO",
        pass: "ALUMNO"
    },
    profesor: {
        usuario: "UCHPROFESOR",
        pass: "PROFESOR"
    }
};

$("#login").on("click", function(){
    const valueUsuario = $usuario.val();
    const valuePassword = $password.val();
    const valueTipoUsuario = $tipoUsuario.val();
    
    if (valueTipoUsuario === "alumno" || valueTipoUsuario === "profesor") {
        const tipoUsuario = valueTipoUsuario;
        if (valueUsuario == credenciales[tipoUsuario].usuario) {
            if (valuePassword == credenciales[tipoUsuario].pass) {
                if (tipoUsuario === "alumno") {
                    location.href = "dashboard_alumno.html";
                } else {
                    location.href = "dashboard_profe.html";
                }
            } else {
                Swal.fire({
                    title: "ERROR",
                    text: "Contraseña incorrecta",
                    icon: "error"
                });
            }
        } else {
            Swal.fire({
                title: "ERROR",
                text: "Usuario no encontrado",
                icon: "error"
            });
        }
    } else {
        Swal.fire({
            title: "ERROR",
            text: "Selecciona un tipo de usuario",
            icon: "error"
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});
