require('dotenv').config();
let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors")

let app = express();
const port = 4000;

//Conexión BD
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

let db = mongoose.connection;


db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conectando a la base de datos..."));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tareas", require("./routes/tareas-routes"));


app.listen(port, () => {
    console.log("El servidor esta escuchando en el puerto "+ port);
});


