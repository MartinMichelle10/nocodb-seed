(async () => {
    require('dotenv').config()
    const app = require('express')();
    // process.env['NC_DB']="pg://34.65.205.61:5432?u=postgres&p=postgres&d=nocodb"
    console.log(process.env['NC_DB'])
    const { Noco } = require("nocodb");
    app.use(await Noco.init({}));
    console.log(`Visit : localhost:${process.env.PORT}/dashboard`)
    app.listen(process.env.PORT);
})()
