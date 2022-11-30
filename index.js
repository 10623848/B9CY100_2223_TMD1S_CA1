const express = require("express")
const sql = require('mssql')
const app = express();
const xml = require('xml')

const MERCHANT_TABLE = 'Merchants'

var db_config = {
	user : 'user',
	Password : 'password123',
	server : 'localhost',
	port : 5000,
	database : 'EcomDB'
}

//Params
//business_name
//contant_no
app.post("/addMember", (req, res) => {
	
	sql.connect(db_config, function(err) {
		if (err) console.log(err);
		
		var request = sql.Request();
		
		request.query('create table ' + MERCHANT_TABLE + '(id int, business_name varchar(225), contant_no varchar(225))', function (err, recordset) {
			if (err) {
				console.log(err);
				res.send('Somethins went wrong!!! Please try again!!!');
				return;
			}
			const id = '1';
			const business_name = req.body.business_name;
			const contact_no = req.body.contact_no;
			
			request.query('insert into ' + MERCHANT_TABLE + 'values (' + id + ',' + business_name + ',' + contact_no + ')', function (err, recordset) {
				res.send('Member added successfully!!!')
				return;
			})
			
		})
	})
	
})

app.get('/getMembers', (req, res) => {
	var request = sql.Request();
	request.query('select * from ' + MERCHANT_TABLE, function (err, recordset) {
		if (err) {
			res.send('Something went wrong!!!')
			return;
		}
		
		res.set('Content-Type', 'text/xml');
		res.send(xml(recordset));
	})
})


app.listen(5000, () => {
	console.log
})