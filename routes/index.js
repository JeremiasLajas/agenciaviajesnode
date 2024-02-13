import express from 'express'
import { paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaTestimoniales,
    paginaDetalleViaje
} from '../controllers/paginasControllers.js';
import  { guardarTestimonial }  from '../controllers/testimonialController.js'
const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes)
router.get('/viajes/:slug', paginaDetalleViaje) //'Comodin' que va a contener lo que le solicitimos con el controlador al modelo

router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);


export default router;

// TEMPLATE ENGINE
// Usualmente puedes escribir codigo javascript dentro del html
// Los mas comundes en node y express:
// PUG - (antes JADE)
// EJS - EMBEDDED JAVASCRIPT
// REACT
// INSTALACION (npm install pug)
