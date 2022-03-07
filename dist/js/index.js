//JSON DE LOGIN
var datosLogin = '{"campos":[\
    {"id":"usuario","class":"formulario__input","name":"Usuario","type":"text"},\
    {"id":"clave","class":"formulario__input","name":"Contraseña","type":"password"},\
    {"id":"recordar","name":"Recordar","type":"checkbox"},\
    {"id":"contenedor_boton","name":"contenedor_boton","type":"div"},\
    {"id":"login","value":"login","type":"button"}\
]}';

//FUNCION PARA SACAR EL FORMULARIO DE LOGIN
$(function () {
    $("#btn_logearse").click(function () {
        vaciarFormulario();
        vaciarFormulario2();
        document.getElementById('btn_logearse').disabled = true;
        document.getElementById('btn_registrarse').disabled = false;

        var listaCamposLogin = JSON.parse(datosLogin);
        var formulario = document.getElementById("formulario2");
        var elemento;

        listaCamposLogin.campos.forEach(x => {
            if (x.type == "text" || x.type == "password") {
                formulario.appendChild(document.createTextNode(x.name)); //Aqui saca el valor de atributo name y lo pone en mayusculas
                formulario.appendChild(document.createElement("br")); //Crea un <br>
                elemento = document.createElement("input"); //Crea el input
                Object.keys(x).forEach(y => elemento.setAttribute(y, x[y])); //Cambia el valor de y=nombre por ej, pasa a ser y=id:nombre
                elemento.classList.add("inputs")
                formulario.appendChild(elemento); //Añade los alementos al formulario
                formulario.appendChild(document.createElement("br"));
                formulario.appendChild(document.createElement("br"));
            }

            if (x.type == "checkbox") {
                formulario.appendChild(document.createElement("br"));
                elemento = document.createElement("input"); //Crea el input
                Object.keys(x).forEach(y => elemento.setAttribute(y, x[y])); //Cambia el valor de y=nombre por ej, pasa a ser y=id:nombre
                formulario.appendChild(elemento); //Añade los alementos al formulario
                formulario.appendChild(document.createTextNode(x.name)); //Aqui saca el valor de atributo name y lo pone en mayusculas
                formulario.appendChild(document.createElement("br"));
                formulario.appendChild(document.createElement("br"));
            }

            if (x.type == "div") {
                elemento = document.createElement("div"); //Crea el div
                Object.keys(x).forEach(y => elemento.setAttribute(y, x[y])); //Cambia el valor de y=nombre por ej, pasa a ser y=id:nombre
                formulario.appendChild(elemento); //Añade los alementos al formulario
            }

            if (x.type == "button") {
                elemento = document.createElement("button"); //Crea el input
                Object.keys(x).forEach(y => elemento.setAttribute(y, x[y])); //Cambia el valor de y=nombre por ej, pasa a ser y=id:nombre
                elemento.classList.add("login_btn");
                elemento.innerHTML = x.value;
                document.querySelector("#contenedor_boton").appendChild(elemento); //Añade los alementos al formulario
            }


        });
        document.querySelector("#login").addEventListener("click", login);
    });
});

//FUNCION PARA SACAR EL FORMULARIO DE REGISTRO
$(function () {
    $("#btn_registrarse").click(function () {
        vaciarFormulario();
        vaciarFormulario2();
        document.getElementById('btn_logearse').disabled = false;
        document.getElementById('btn_registrarse').disabled = true;

        const formulario = document.getElementById("formulario");
        const formularioContent = `
        <div class="formulario__grupo" id="grupo__correo">
            <label for="correo" class="formulario__label">Correo</label>
            <div class="formulario__grupo-input">
                <input type="text" class="formulario__input" name="correo" id="correo">
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">Email no valido.</p>
        </div>

        <div class="formulario__grupo" id="grupo__usuario">
            <label for="usuario" class="formulario__label">Usuario</label>
            <div class="formulario__grupo-input">
                <input type="text" class="formulario__input" name="usuario" id="usuario" placeholder="john123">
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">Longitud entre 4 y 16 digitos. Puede contener numeros, letras y guiones.</p>
        </div>

        <div class="formulario__grupo" id="grupo__contraseña">
            <label for="contraseña" class="formulario__label">Contraseña</label>
            <div class="formulario__grupo-input">
                <input type="password" class="formulario__input" name="contraseña" id="contraseña">
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">Debe contener al menos una mayuscula y un caracter especial. Longitud entre 4 y 15 digitos. No dejar espacios.</p>
        </div>

        <div class="formulario__grupo" id="grupo__contraseña2">
            <label for="contraseña2" class="formulario__label">Repetir Contraseña</label>
            <div class="formulario__grupo-input">
                <input type="password" class="formulario__input" name="contraseña2" id="contraseña2">
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">Las contraseñas no coinciden.</p>
        </div>

        <div class="formulario__grupo" id="grupo__telefono">
            <label for="telefono" class="formulario__label">Telefono</label>
            <div class="formulario__grupo-input">
                <input type="number" class="formulario__input" name="telefono" id="telefono">
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">Telefono no valido.</p>
        </div>

        <div class="formulario__grupo" id="grupo__localidad">
            <label for="localidad" class="formulario__label">Localidad</label>
            <div class="formulario__grupo-input">
                <input type="text" class="formulario__input" name="localidad" id="localidad">
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">Debe empezar por mayuscula. Localidad no valida.</p>
        </div>

        <div class="formulario__grupo" id="grupo__codigo_postal">
            <label for="codigo_postal" class="formulario__label">Codigo Postal</label>
            <div class="formulario__grupo-input">
                <input type="number" class="formulario__input" name="codigo_postal" id="codigo_postal">
                <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">Codigo postal no valido.</p>
        </div>
        
        <div class="formulario__grupo" id="grupo__provincia">
            <label class="formulario__label">Provincia</label>
            <select id="provincia">
                <option value='alava'>Alava</option>
                <option value='albacete'>Albacete</option>
                <option value='alicante'>Alicante</option>
                <option value='almeria'>Almeria</option>
                <option value='asturias'>Asturias</option>
                <option value='avila'>Avila</option>
                <option value='badajoz'>Badajoz</option>
                <option value='barcelona'>Barcelona</option>
                <option value='burgos'>Burgos</option>
                <option value='caceres'>Caceres</option>
                <option value='cadiz'>Cadiz</option>
                <option value='cantabria'>Cantabria</option>
                <option value='castellon'>Castellon</option>
                <option value='ceuta'>Ceuta</option>
                <option value='ciudadreal'>Ciudad Real</option>
                <option value='cordoba'>Cordoba</option>
                <option value='cuenca'>Cuenca</option>
                <option value='girona'>Girona</option>
                <option value='laspalmas'>Las Palmas</option>
                <option value='granada'>Granada</option>
                <option value='guadalajara'>Guadalajara</option>
                <option value='guipuzcoa'>Guipuzcoa</option>
                <option value='huelva'>Huelva</option>
                <option value='huesca'>Huesca</option>
                <option value='illesbalears'>Islas Baleares</option>
                <option value='jaen'>Jaen</option>
                <option value='acoruña'>A Coruña</option>
                <option value='larioja'>La Rioja</option>
                <option value='leon'>Leon</option>
                <option value='lleida'>Lleida</option>
                <option value='lugo'>Lugo</option>
                <option value='madrid'>Madrid</option>
                <option value='malaga'>Malaga</option>
                <option value='melilla'>Melilla</option>
                <option value='murcia'>Murcia</option>
                <option value='navarra'>Navarra</option>
                <option value='ourense'>Ourense</option>
                <option value='palencia'>Palencia</option>
                <option value='pontevedra'>Pontevedra</option>
                <option value='salamanca'>Salamanca</option>
                <option value='segovia'>Segovia</option>
                <option value='sevilla'>Sevilla</option>
                <option value='soria'>Soria</option>
                <option value='tarragona'>Tarragona</option>
                <option value='santacruztenerife'>Santa Cruz de Tenerife</option>
                <option value='teruel'>Teruel</option>
                <option value='toledo'>Toledo</option>
                <option value='valencia'>Valencia</option>
                <option value='valladolid'>Valladolid</option>
                <option value='vizcaya'>Vizcaya</option>
                <option value='zamora'>Zamora</option>
                <option value='zaragoza'>Zaragoza</option>
            </select>
        </div>

        <div class="formulario__grupo" id="grupo__tipoUsuario">
            <label class="formulario__label">TIPO DE USUARIO: <span id="indicaciones_arrastrar">(arrastre una opcion)</span></p> <span id="particular" draggable="true" ondragstart="fase1(event);">Particular</span><span id="empresa" draggable="true" ondragstart="fase1(event);">Empresa</label>
            <input  class="formulario__input" id="tipo_usuario" name="tipo_usuario" type="text" ondragover="fase2(event);" ondrop="fase3(event);" readonly required>
        </div>
        `;

        document.getElementById("contenedor_btn_registro")
        const contenidoBoton = `
            <button id="btn_registro" class="formulario__btn">REGISTRARSE</button>
        `;

        formulario.innerHTML = formularioContent;
        document.getElementById("contenedor_btn_registro").innerHTML = contenidoBoton;
        document.querySelector("#btn_registro").addEventListener("click", add);
        validacion(); //Esto hace que valide el formulario
        startDB();

    });
});

function vaciarFormulario() {
    document.getElementById("formulario").innerHTML = "";
    document.getElementById("contenedor_btn_registro").innerHTML = "";
}
function vaciarFormulario2() {
    document.getElementById("formulario2").innerHTML = "";
}


/*   DRAGS AND DROPS  */
function fase1(pEvento) {
    pEvento.dataTransfer.setData("", pEvento.target.id);
}

function fase2(pEvento) {
    pEvento.preventDefault();
}

function fase3(pEvento) {
    var datos = pEvento.dataTransfer.getData("");
    datos = MaysPrimera(datos.toLowerCase());
    document.getElementById("tipo_usuario").value = datos;
}

function MaysPrimera(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


/* VALIDACION EN VIVO DEL FORMULARIO DE REGISTRO*/
const campos = {
    correo: false,
    usuario: false,
    contraseña: false,
    localidad: false,
    codigo_postal: false,
    telefono: false
}

function validacion() {
    const formulario = document.getElementById("formulario");
    const inputs = document.querySelectorAll("#formulario input");

    const expresiones = {
        correo: /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, //Letras, num, guion y guion bajo. Entre 4 y 16 caracteres
        contraseña: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,//Min una mayusc y minusc. Entre 4 y 15 difigitos. Min 1 special char. No espacios.
        localidad: /^[A-Z]{1}[a-z]+|[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+$/,
        codigo_postal: /^\d{5}$/,
        telefono: /^(6|9)\d{8}$/
    }

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "correo":
                validarCampo(expresiones.correo, e.target, 'correo');
                break;
            case "usuario":
                validarCampo(expresiones.usuario, e.target, 'usuario');
                break;
            case "contraseña":
                validarCampo(expresiones.contraseña, e.target, 'contraseña');
                validarPassword2();
                break;
            case "contraseña2":
                validarPassword2();
                break;
            case "localidad":
                validarCampo(expresiones.localidad, e.target, 'localidad');
                break;
            case "codigo_postal":
                validarCampo(expresiones.codigo_postal, e.target, 'codigo_postal');
                break;
            case "telefono":
                validarCampo(expresiones.telefono, e.target, 'telefono');
                break;
        }
    }



    const validarCampo = (expresion, input, campo) => {
        if (expresion.test(input.value)) {
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true;
        } else {
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos[campo] = false;
        }
    }

    const validarPassword2 = () => {
        const inputPassword1 = document.getElementById('contraseña');
        const inputPassword2 = document.getElementById('contraseña2');

        if (inputPassword1.value !== inputPassword2.value) {
            document.getElementById(`grupo__contraseña2`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__contraseña2`).classList.remove('formulario__grupo-correcto');
            document.querySelector(`#grupo__contraseña2 i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo__contraseña2 i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo__contraseña2 .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos['contraseña'] = false;
        } else {
            document.getElementById(`grupo__contraseña2`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__contraseña2`).classList.add('formulario__grupo-correcto');
            document.querySelector(`#grupo__contraseña2 i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo__contraseña2 i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo__contraseña2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos['contraseña'] = true;
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });
}


/*  CREAR USUARIOS Y AÑADIRLOS A INDEXDB  */
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
var dataBase = null;

function startDB() {
    dataBase = indexedDB.open("usuarios", 1);

    dataBase.onupgradeneeded = function (e) {
        active = dataBase.result;
        usuarios = active.createObjectStore("usuarios", { keyPath: 'id', autoIncrement: true });
        var nick = usuarios.createIndex('usuario', 'usuario', { unique: true });
        var password = usuarios.createIndex('tipo_usuario', 'tipo_usuario', { unique: false });


    };
    dataBase.onsuccess = function (e) {
        //alert('Base de datos cargada correctamente');
    };

    dataBase.onerror = function (e) {
        alert('Error cargando la base de datos');
    };
}

function add() {
    var active = dataBase.result;
    var data = active.transaction(["usuarios"], "readwrite");
    var object = data.objectStore("usuarios");

    if (campos.correo && campos.usuario && campos.contraseña && campos.localidad && campos.codigo_postal && campos.telefono && document.getElementById("tipo_usuario").value != "") {
        object.put({
            correo: document.getElementById("correo").value,
            usuario: document.getElementById("usuario").value,
            contraseña: document.getElementById("contraseña").value,
            tlf: document.getElementById("telefono").value,
            localidad: document.getElementById("localidad").value,
            cp: document.getElementById("codigo_postal").value,
            provincia: document.getElementById("provincia").value,
            tipo_usuario: document.getElementById("tipo_usuario").value
        });

        data.oncomplete = function (e) {
            alert('Usuario registrado correctamente');
            location.href = "index.html";
            ponerUnaCookie(document.getElementById("usuario").value, document.getElementById("contraseña").value);
        };
    } else {
        alert("Error de registro. Rellene correctamente todos los campos.");
    }
}

function ponerUnaCookie(clave, valor) {
    var miCookie = clave + "=" + valor;
    document.cookie = miCookie;
}

function login() {
    var u = document.getElementById("usuario").value;
    var c = document.getElementById("clave").value;
    var listaCookies = document.cookie.split(';');
    var nombresCookies = [];
    var valoresCookies = [];
    var existe = false;

    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (5 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + fecha.toUTCString();

    for (var i = 0; i < listaCookies.length; i++) {
        nombresCookies.push(listaCookies[i].split('=')[0].trim());
        valoresCookies.push(listaCookies[i].split('=')[1].trim());
    }

    for (var i = 0; i < nombresCookies.length; i++) {
        if (u == nombresCookies[i] && c == valoresCookies[i]) {
            existe = true;
            if (document.getElementById("recordar").checked) {
                document.cookie = u + "=" + c + ";" + expires;
            }
        }
    }
    existe ? location.href = "principal.html" : alert("Loggin incorrecto");
}