const registrarUsuario= async()=>{
    var correo=document.querySelector("#correo").value;
    var password=document.querySelector("#password").value;
    var nombre=document.querySelector("#nombre").value;

    if(correo.trim()==='' || 
    password.trim()==='' || 
    nombre.trim()==='' ){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Por favor complete todos los datos!',
            footer: 'CONTACTOS'
          })
          return;
    }

    if(!validarNombre(nombre)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Introduzca un nombre válido',
            footer: 'CONTACTOS'
          })
          return;
    }
    if(!validarCorreo(correo)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Introduzca un correo electrónico válido',
            footer: 'CONTACTOS'
          })
          return;
    }
    if(!validarPassword(password)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            html: 'Introduzca una contraseña válida <br> [Mayúsculas, minúsculas, números, caracter especial y mín. 8 caracteres]',
            footer: 'CONTACTOS'
          })
          return;
    }
    
    const datos=new FormData();
    datos.append("nombre",nombre);
    datos.append("correo",correo);
    datos.append("password",password);

    
    if(validarNombre(nombre), validarCorreo(correo), validarPassword(password)){
        Swal.fire({
            icon: 'success',
            title: 'ÉXITO',
            text: 'Su cuenta se creó con éxito!',
            footer: 'CONTACTOS'
          })
          return;
    }
    document.querySelector("#formRegistrar").reset();
          setTimeout(()=>{
            window.location.href="iniciosesion.html";
          });
}


const loginUsuario= async()=>{
    var correo=document.querySelector("#correo").value;
    var password=document.querySelector("#password").value;

    if(correo.trim()==='' || 
    password.trim()===''){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Por favor complete todos los datos!',
            footer: 'CONTACTOS'
          })
          return;
    }

    if(!validarCorreo(correo)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Introduzca un correo electrónico válido',
            footer: 'CONTACTOS'
          })
          return;
    }
    if(!validarPassword(password)){
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            html: 'Introduzca una contraseña válida <br> [Mayúsculas, minúsculas, números, caracter especial y mín. 8 caracteres]',
            footer: 'CONTACTOS'
          })
          return;
    }

    const datos=new FormData();
    datos.append("correo",correo);
    datos.append("password",password);

    if(validarCorreo(correo), validarPassword(password)){
      Swal.fire({
          icon: 'success',
          title: 'ÉXITO',
          text: 'BIENVENIDO A VERONA!',
          footer: 'CONTACTOS'
        })
        return;
    }else{
        Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Ocurrió un error, por favor vuelva a intentarlo!',
            footer: 'CONTACTOS'
          });
        document.querySelector("#formInicio").reset();
        setTimeout(()=>{
          window.location.href="index.html";
         });
    }
}