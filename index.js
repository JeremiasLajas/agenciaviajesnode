import express from 'express'

import router from './routes/index.js';
import db from './config/db.js';



const app = express();

// Conectar a la base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));
    

// Definir puerto:
const port = process.env.PORT || 3000; //process.env.PORT => variable de entorno

// Habilitar PUG
app.set('view engine', 'pug');

// Obtener el año actual
app.use( (req, res, next) => {
    
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes"

   return next()
})

// Agregar body parser para leer los datos del formulario y llena el obj de req.body con la informacion del usario
app.use(express.urlencoded({extended: true}));

// Definir la carpeta publica
app.use(express.static('public'));

// Agregar Router
app.use('/', router)


app.listen( port, () => {
    console.log(`El Servidor esta funcionando en el puerto ${port}`)
});

// Importamos express desde el paquete, luego asignamos la variable de importacion a otra llamada app como un funcion.
// a app le decimos que arranque el servidor por medio de la funcion .listen a la cual le vamos a pasar el puerto donde queremos que inicie