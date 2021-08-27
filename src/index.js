const express = require("express");
const app = express();
const morgan = require("morgan");
//Configuraciones
app.set("post", process.env.POST || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//router
app.use(require("./routes/index"));
app.use('/api/movies',require("./routes/movis"));
app.use('/api/users',require("./routes/users"));

//enpesando el servido
app.listen(app.get("post"), () => {
  console.log(`http://localhost:${app.get("post")}`);
});
