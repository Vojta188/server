const sql = require("./db.js");

const Customer = function(customer)
{
    this.email = customer.email;
    this.jmeno_prijmeni = customer.jmeno_prijmeni;
    this.webova_aplikace = customer.webova_aplikace;
    this.zprava = customer.zprava;
}

Customer.create = (newCustomer, result) => {
    sql.query("INSERT INTO customer SET?", newCustomer,(err,res)=>{
        if(err)
        {
            console.log("error:",err);
            result (err,null);
            return;
        }
        console.log("vytvořeno", {id: res.insertId, ...newCustomer});
        result(null,{id:res.insertId,...newCustomer});

    });
};


module.exports = Customer;