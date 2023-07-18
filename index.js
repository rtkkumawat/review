let express = require('express');
require("./config/modelConfig");
let router = require('./routes/userRoutes');
let app = express();

app.use(express.json());
app.use('/',router)

app.listen(6001, ()=>{
    console.log('listening on port 6001');
})