(async () => {
    const app = require('express')();
    process.env['NC_DB']="pg://elwhats.postgres.database.azure.com:5432?u=mahmouds12&p=Sawsan@elmawkaa1&d=noco"
    const {Noco} = require("nocodb");
    app.use(await Noco.init({}));
    console.log(`Visit : localhost:${process.env.PORT}/dashboard`)    
    app.listen(process.env.PORT);
})()
