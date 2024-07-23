    <body>
        <div class="container-form">
            <form id="login" onsubmit="enviosformulario(event)">
                <img src="../assets/Imagenes/Inicio_Sesion.jpg" alt="">
                <input type="text" placeholder="Digite Su Usuario" id="usuario">
                <input type="password" placeholder="Digite Su Contraseña" id="pass">
                <div id="IngresoExitoso" class="IngresoExitoso">
                    <h2>Correcto</h2>
                </div>
                <div id="error" class="error">
                    <h2>Su Usuario y Contraseña No son Correctos</h2>
                </div>
                <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
            </form>
        </div>
        <script src = "../js/login.js"> </script>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</html>


