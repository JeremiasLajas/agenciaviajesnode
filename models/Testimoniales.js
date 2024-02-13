import { Sequelize } from "sequelize";
import db from "../config/db.js";

export const Testimonial = db.define('testimoniales', {  //Colacamos el nombre de la tabla de la base de datos
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});