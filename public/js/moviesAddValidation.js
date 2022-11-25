/* const { invalid } = require("moment/moment"); */

window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//  

let $ = (e) => document.querySelector(e)

const funcValidate= (obj) =>{
    let arr= Object.values(obj)
    console.log(arr);
    if (!arr.includes(false)) {
        btn.disabled=false
        btn.style.backgroundColor= '#198754'        
    }else{
        btn.disabled=true
        btn.style.backgroundColor= '#7b9c8d'
    }
}

let form = $('#form')
let errores = $('#errores')

/* input */

let inputTitulo = $('#title')
let rating = $('#rating')
let awards = $('#awards')
let release_date = $('#release_date')
let duracion = $('#length')
let genre = $('#genre_id')

let btn = $('#btn-agregar')

inputTitulo.focus()

inputTitulo.addEventListener('blur', (e)=>{
    let error= "<li id='titleError'>Debes escribir un titulo</li>"
    if (!inputTitulo.value) {
        inputTitulo.classList.add('is-invalid')
        inputTitulo.classList.remove('is-valid')
        errores.classList.add('alert-warning')
        errores.innerHTML = error
        validate.titulo=false        
    }else{
        inputTitulo.classList.remove('is-invalid')
        inputTitulo.classList.add('is-valid')
        $('#titleError').innerHTML = ''
        errores.classList.remove('alert-warning')
        validate.titulo=true
    }
    funcValidate(validate)
})
rating.addEventListener('blur', (e)=>{
    let errorExistente=true
    if (!rating.value) {
        let error= "<li id='ratingError'>Debes escribir una puntuacion para la pelicula</li>"
        rating.classList.add('is-invalid')
        rating.classList.remove('is-valid') 
        errores.classList.add('alert-warning')
        $('#ratingError') ? null : errores.innerHTML += error
        validate.rating=false       
    }else if(rating.value<=0 || rating.value>10){
        let error= "<li id='ratingError'>La puntuacion debe ser entre 1 y 10</li>"
        rating.classList.add('is-invalid')
        rating.classList.remove('is-valid') 
        errores.classList.add('alert-warning')
        $('#ratingError') ? $('#ratingError').innerHTML= 'La puntuacion debe ser entre 1 y 10' : errores.innerHTML += error
        validate.rating=false
    }else{
        rating.classList.remove('is-invalid')
        rating.classList.add('is-valid')
        errores.removeChild($('#ratingError'))
        validate.rating=true
    }
    funcValidate(validate)
})
awards.addEventListener('blur', (e)=>{
    let error= "<li id='titleError'>Debes escribir un titulo</li>"
    if (!awards.value) {
        awards.classList.add('is-invalid')
        awards.classList.remove('is-valid')
        errores.classList.add('alert-warning')
        errores.innerHTML = error 
        validate.awards=false         
    }else{
        awards.classList.remove('is-invalid')
        awards.classList.add('is-valid')
        validate.awards=true
    }
    funcValidate(validate)
})
release_date.addEventListener('blur', (e)=>{
    let error= "<li id='titleError'>Debes escribir un titulo</li>"
    if (!release_date.value) {
        release_date.classList.add('is-invalid')
        release_date.classList.remove('is-valid')
        errores.classList.add('alert-warning')
        errores.innerHTML = error
        validate.release_date=false          
    }else{
        release_date.classList.remove('is-invalid')
        release_date.classList.add('is-valid')
        validate.release_date=true
    }
    funcValidate(validate)
})
duracion.addEventListener('blur', (e)=>{
    let error= "<li id='titleError'>Debes escribir un titulo</li>"
    if (!duracion.value) {
        duracion.classList.add('is-invalid')
        duracion.classList.remove('is-valid')
        errores.classList.add('alert-warning')
        errores.innerHTML = error
        validate.duracion=false          
    }else if(duracion.value<=59 || duracion.value>360){
        duracion.classList.add('is-invalid')
        duracion.classList.remove('is-valid') 
        errores.classList.add('alert-warning')
        errores.innerHTML = error
        validate.duracion=false
    }else{
        duracion.classList.remove('is-invalid')
        duracion.classList.add('is-valid')
        validate.duracion=true
    }
    funcValidate(validate)
})
genre.addEventListener('blur', (e)=>{
    let error= "<li id='genreError'>Debes escribir un titulo</li>"
    if (!genre.value) {
        genre.classList.add('is-invalid')
        genre.classList.remove('is-valid')
        errores.classList.add('alert-warning')
        errores.innerHTML = error
        validate.genre=false          
    }else{
        genre.classList.remove('is-invalid')
        genre.classList.add('is-valid')
        validate.genre=true
    }
    funcValidate(validate)
})

const validate={
    titulo: false,
    rating: false,
    awards: false,
    release_date: false,
    duracion: false,
    genre: false
}
funcValidate(validate)

}