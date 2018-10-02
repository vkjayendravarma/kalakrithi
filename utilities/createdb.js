var db = require("../models/db");

db.sequelize.sync().then(() => {
    console.log("Created the tables.");
}).catch(function(err){
    console.log("Error creating the database");
    console.log(err);
});
