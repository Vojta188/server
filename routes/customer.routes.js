module.exports = app =>{
    const customer = require("../controllers/customer.controller.js");
    app.post("/customers", customer.create);
   
};