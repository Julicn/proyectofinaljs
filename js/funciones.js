const validarCorreo=(correo)=>{
    return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(correo.trim());
}
const validarPassword=(password)=>{
    return /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/.test(password.trim());
}
const validarNombre=(nombre)=>{
    return /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(nombre.trim());
}