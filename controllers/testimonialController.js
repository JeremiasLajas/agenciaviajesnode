import { Testimonial } from "../models/Testimoniales.js";
const guardarTestimonial = async (req, res) => {

    // Validar---
    const {nombre, correo, mensaje} = req.body

    const errores = [];
    if(nombre.trim() === '') {
        errores.push({mensaje : 'El nombre esta vacio'});
    }
    if(correo.trim() === '') {
        errores.push({mensaje : 'El correo esta vacio'}) ;  
    }
    if(mensaje.trim() === '') {
        errores.push({mensaje : 'El mensaje esta vacio'}) ; 
    }

    if(errores.length > 0) {

        // Consultamos los testimoniales
        const testimoniales = await Testimonial.findAll(); //Consultamos los testimoniales existentes para pasarlos y se muestren de igual manera de haber un error
        // Mostrar la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre, //Le pasamos los valores de los input del formulario para que se mantengan en caso de haber un error de validacion
            correo,
            mensaje,
            testimoniales
        })
    } else {
        // Almacenarlo en la base de datos

        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje    
            })
            res.redirect('/testimoniales')

        } catch (error) {
            console.log(error)
        }
    }
}

export {
    guardarTestimonial
}