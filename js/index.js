function login() {
    var usuario = document.getElementById("usuario").value;
    var pass = document.getElementById("pass").value;

    if (usuario == "admin" && pass == "admin"){
        //alert("Has iniciado sesion");
        window.location = "index.html";
    }
    else{
        throw new Error('¡Upsssssssss!')
    }
}