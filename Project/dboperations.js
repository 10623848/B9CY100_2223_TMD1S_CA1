var config = require('./dbconfig');
var sql = require('mssql/msnodesqlv8')
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

const EMAIL_TEMPLATE_TABLE = 'emailtemplate';
const EMPLOYEE_EPOC_TABLE = 'employe_spoc';

const staticJSON = require('./StaticJSONResponces')
//Static mode to test if all front-end codes are working properly if there are no data in the database
const staticMode = true;

async function addEmailTemplate(clientId, contact_no) {
try {
let pool = await sql.connect(config);
let count = await pool.request("select * from " + EMAIL_TEMPLATE_TABLE).dataset.count;
await pool.request("insert into " + EMAIL_TEMPLATE_TABLE + " values (" + "," + email + ")");

return "Added Successfully!!!"

} catch(error) {
console.log(error);
return "Something went wrong!!!"
}
}

//Query to get details of all the Employees
async function getEmployeeDetails() {

if (staticMode) {
return JSON.parse(staticJSON.employeeDetails());
}

try {
let pool = await sql.connect(config);
const query = 'create table ' + EMPLOYEE_EPOC_TABLE + '(employeid int primary key, employename varchar(255), mob int, email varchar(255));'
await pool.request(query);
let data = await pool.request("select * from " + EMPLOYEE_EPOC_TABLE);

return data.recordsets;

} catch(error) {
console.log(error);
return "Something went wrong!!!"
}
}


async function getPhishingReport() {
if (staticMode) {
return JSON.parse(staticJSON.phishingReport());
}

try {
let pool = await sql.connect(config);
let data = await pool.request("select * from " + EMAIL_TEMPLATE_TABLE);

return data.recordsets;

} catch(error) {
return "Something went wrong!!!"
}
}

//Add employees
async function addEmployee(id, name, email, contactNo) {
if (staticMode) {

const txt = '"' + id + ' and ' + name + ' and ' + email + ' and ' + contactNo + '"'
return JSON.parse('{"data" : ' + txt + '}');
}

try {
let pool = await sql.connect(config);
let data = await pool.request("insert into " + EMAIL_TEMPLATE_TABLE + "values(" + name, email, contactno + ')');

return JSON.parse('{"data" : ' + txt + '}');

} catch(error) {
return "Something went wrong!!!"
}
}

//Get email template
async function getEmailTemplate() {
if (staticMode) {

return JSON.parse(staticJSON.emailTemplate());
}

try {
let pool = await sql.connect(config);
let data = await pool.request("insert into " + EMAIL_TEMPLATE_TABLE + "values(" + name + "," + email + "," + contactno + ")");

return JSON.parse('{"data" : ' + txt + '}');

} catch(error) {
return "Something went wrong!!!"
}
}

module.exports = {
addEmailTemplate : addEmailTemplate,
getEmailTemplate : getEmailTemplate,
getEmployeeDetails : getEmployeeDetails,
getPhishingReport : getPhishingReport,
addEmployee : addEmployee
}
