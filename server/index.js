// 1. IMPORTACIONES
const express = require('express')
const app = express()
const cors = require('cors')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const auth = require('./middleware/authorization')

const connectDB = require('./config/db')

const Mug = require('./models/Mug.model')
const User = require('./models/User.model')



// 2. MIDDLEWARES
// VARIABLES DE ENTORNO
require('dotenv').config()

// CONEXIÓN A DB
connectDB()

// Habilitar CORS
app.use(cors())

app.use(express.json());


// MERCADO PAGO

const mercadopago = require("mercadopago")
const { update } = require('./models/Mug.model')

mercadopago.configure({
    access_token: "TEST-2852776318752517-113018-7fb33fe86c386cf7a0c1d3f925e64447-1544041689"
})


// 3. RUTEO

app.get("/get-mugs", async (req, res) => {
    try {
        const mugs = await Mug.find({})

        res.json({
            mugs
        })

    } catch (error) {
        res.status(500).json({
            msg: "Get Data Error"
        })
    }
})

app.get("/get-mug/:id", async (req, res) => {

    const { id } = req.params

    try {
        
        const mug = await Mug.findById(id)

        res.json({
            mug
        })

    } catch (error) {
        res.status(500).json({
            msg: "Get Data Error"
        })
    }


})

app.post("/create-mug", async (req, res) => {

    const {
        name,
        price,
        image } = req.body

    try {

        const newMug = await Mug.create({ name, price, image })

        res.json(newMug)

    } catch (error) {

        res.status(500).json({
            msg: "Create Mug Error",
            error
        })

    }
})

app.put("/update-mug", async (req, res) => {

    const { id, name, price } = req.body

    try {
        const updateMug= await Mug.findByIdAndUpdate(id, { name, price }, { new: true })

        res.json(updateMug)

    } catch (error) {

        res.status(500).json({
            msg: "Update Mug Error"
        })

    }


})

app.delete("/delete-mug", async (req, res) => {

    const { id } = req.body

    try {

        const deleteMug = await Mug.findByIdAndRemove({ _id: id })

        res.json(deleteMug)


    } catch (error) {
        res.status(500).json({
            msg: "Delete Mug Error"
        })
    }

})

// B. USUARIOS
// CREAR UN USUARIO
app.post("/user/create", async (req, res) => {

    // OBTENER USUARIO, EMAIL Y PASSWORD DE LA PETICIÓN
    const { name, email, password } = req.body

    try {
        // GENERAMOS FRAGMENTO ALEATORIO PARA USARSE CON EL PASSWORD
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // CREAMOS UN USUARIO CON SU PASSWORD ENCRIPTADO
        const respuestaDB = await User.create({
            name,
            email,
            password: hashedPassword
        })

        // USUARIO CREADO. VAMOS A CREAR EL JSON WEB TOKEN

        // 1. EL "PAYLOAD" SERÁ UN OBJETO QUE CONTENDRÁ EL ID DEL USUARIO ENCONTRADO EN BASE DE DATOS.
        // POR NINGÚN MOTIVO AGREGUES INFORMACIÓN CONFIDENCIAL DEL USUARIO (SU PASSWORD) EN EL PAYLOAD.
        const payload = {
            user: {
                id: respuestaDB._id
            }
        }

        // 2. FIRMAR EL JWT
        jwt.sign(
            payload, // DATOS QUE SE ACOMPAÑARÁN EN EL TOKEN
            process.env.SECRET, // LLAVE PARA DESCIFRAR LA FIRMA ELECTRÓNICA DEL TOKEN,
            {
                expiresIn: 360000 // EXPIRACIÓN DEL TOKEN
            },
            (error, token) => { // CALLBACK QUE, EN CASO DE QUE EXISTA UN ERROR, DEVUELVA EL TOKEN

                if (error) throw error

                res.json({
                    token
                })
            }
        )

    } catch (error) {

        return res.status(400).json({
            msg: error
        })

    }
})


// INICIAR SESIÓN
app.post("/user/login", async (req, res) => {

    // OBTENEMOS EL EMAIL Y EL PASSWORD DE LA PETICIÓN
    const { name, password } = req.body

    try {
        // ENCONTRAMOS UN USUARIO
        let foundUser = await User.findOne({ name })

        // SI NO HUBO UN USUARIO ENCONTRADO, DEVOLVEMOS UN ERROR
        if (!foundUser) {
            return res.status(400).json({ msg: "User does not exist" })
        }

        // SI TODO OK, HACEMOS LA EVALUACIÓN DE LA CONTRASEÑA ENVIADA CONTRA LA BASE DE DATOS
        const passChecked = await bcryptjs.compare(password, foundUser.password)

        // SI EL PASSWORD ES INCORRECTO, REGRESAMOS UN MENSAJE SOBRE ESTO
        if (!passChecked) {
            return await res.status(400).json({ msg: "Wrong password" })
        }

        // SI TODO CORRECTO, GENERAMOS UN JSON WEB TOKEN
        // 1. DATOS DE ACOMPAÑAMIENTO AL JWT
        const payload = {
            user: {
                id: foundUser.id
            }
        }

        // 2. FIRMA DEL JWT
        jwt.sign(
            payload,
            process.env.SECRET,
            {
                expiresIn: 3600000
            },
            (error, token) => {
                if (error) throw error;

                //SI TODO SUCEDIÓ CORRECTAMENTE, RETORNAR EL TOKEN
                res.json({ token })
            })

    } catch (error) {
        res.json({
            msg: "Error",
            error
        })
    }

})

// VERIFICAR USUARIO

// COMO OBSERVACIÓN, ESTAMOS EJECUTANDO EL MIDDLEWARE DE AUTH (AUTORIZACIÓN) ANTES DE ACCEDER
// A LA RUTA PRINCIPAL
app.get("/user/verify-user", auth, async (req, res) => {

    try {
        // CONFIRMAMOS QUE EL USUARIO EXISTA EN BASE DE DATOS Y RETORNAMOS SUS DATOS, EXCLUYENDO EL PASSWORD
        const user = await users.findById(req.user.email).select("-password")
        res.json({ user })

    } catch (error) {
        // EN CASO DE ERROR DEVOLVEMOS UN MENSAJE CON EL ERROR
        res.json({
            msg: "Error",
            error
        })
    }
})

// ACTUALIZAR USUARIO
app.put("/user/update", auth, async (req, res) => {

    // CAPTURAMOS USUARIO DEL FORMULARIO
    const newDataForOurUser = req.body

        try {
        // LOCALIZAMOS EL USUARIO
        const updatedUser = await User.findByIdAndUpdate(
            req.user.id,
            newDataForOurUser,
            { new: true }
        ).select("-password")
        
        res.json(updatedUser)
            

        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
)




// C. CHECKOUT MERCADOPAGO


app.post("/mercadopago", async (req, res) => {

    const preference = req.body
  
    const responseMP = await mercadopago.preferences.create(preference)

    console.log(responseMP)

    res.json({
        checkoutId: responseMP.body.id
    });

})



// 4. SERVIDOR
app.listen(process.env.PORT, () => console.log("Server is running on port 3005"))