const Customer = require("../models/customer.model.js")

exports.create = (req,res) => {
    if (!req.body)
    {
        res.status(400).send({
            message:"Není nic Vloženo"
        });
    }

    const customer = new Customer({
        email: req.body.email,
    jmeno_prijmeni: req.body.jmeno_prijmeni,
    webova_aplikace: req.body.webova_aplikace,
    zprava: req.body.zprava
        
    });

    Customer.create(customer,(err,data) => {
        if(err)
        res.status(500).send({
            message:
            err.message || "Problém s vytvořením zprávy."
        });
        else res.send(data);
    })
};