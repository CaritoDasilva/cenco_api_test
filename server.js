const express = require('express');
const app = express();
require('./server/config/mongoose.config');
const port = 8000;
const cors = require('cors')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json(), express.urlencoded({ extended: true }));

const creditsRoutes = require("./server/routes/credits.routes");
creditsRoutes(app);

app.listen(port, () => console.log(`Hi pretty girl! Im listening you in the port: ${port}`))
