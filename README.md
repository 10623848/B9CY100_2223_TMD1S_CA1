# B9CY100_2223_TMD1S_CA1
# Project Name: Phishing Reporter
Name: Haseeb Ahmed Khan 
Roll no: 10622774 
Work Assigned to me: Designing Front End

My name is Hafiz Muhammad Touseef : 10626327, I will be handling backend database queries.

I am Saqlain Shohrab, Student ID : 10623848. I will work with the backend services needed in the project. Mostly with database pull, push, update and error handling.

Name: Vinay Nair
Student ID: 10609822
Work Assigned to me: Backend API Handling


Name : Anant Prajapati
Student ID: 10622674
Work Assigned : Frontend

Testing image addition
![alt text](https://github.com/10623848/B9CY100_2223_TMD1S_CA1/blob/main/Screenshots/DB-Operations.png?raw=true)


# Introduction
Phishing Reporter

### Introduction to Phishing:
Phishing is a type of cybercrime in which attackers use fraudulent emails or websites to trick individuals into divulging sensitive information such as login credentials or financial information. These attacks can have serious consequences, as they can lead to identity theft, financial losses, and damage to an organization's reputation.  We understood that there’s a need to educate employees coming from a non-IT background on how dangerous a phishing email can be since they have no understanding on how a phishing email looks and what harm a single click on a wrong email can make company lose millions of money and their sensitive data.
What PhishReporter does?
We decided to build a project that covers a basic of how a phishing reporter tool can be used to understand how an organizations and individuals can generate a phishing report which will show a detailed analysis of a phishing simulation conducted in their organization. Our project will help them analyse and understand the number of employees who were subjected to a phishing email and how did they respond to it. Our project covers basics of how many users clicked on a phishing email and it can vary from organization to organization
Our tool provides and easy-to-use interface on the employees who clicked on a phishing email and provides a place where they can just copy paste a suspected phishing email and our tool will help them identify how much percent of that email relates to a phishing email. This will help them identify or understand that the email they have received might be a phishing email.

Requirements: 
To make the our work, we have created APIs to render data over a react based frond-end application in Node.js
1.	addEmailTemplate – This gives the email template stored, needed to check phishing matching percentage.
2.	getEmailTemplate – This gives as all the email template e gave already stored.
3.	getPhishingReport – This gives us the list of all the companies’ and its its employee
4.	addEmployee – This is needed to add new employees, which will help us generate the report and have a track of all the employee company wise.
5.	getEmployee – This gives us all the employee we have in our server and we could filter it with company keyword.

Architecture:
User			Node.js(React)		Node Backend		MSSQL DB
![image](https://user-images.githubusercontent.com/118562423/209240969-55ecb331-cd50-411d-829d-2062b8e718a8.png)

 

The architecture clearly indicates the flow is when a user is surfing our website, the user hits and frontend server based on React which renders the template of the UI created and to show all the data, an API is called from the backend server based on Node.js and it pulls data from our MSSQL DB, finally the exact data with all required data is rendered over the browser which the user is using.

Technologies and library used:
1.	Backend Technologies
a.	Node.js
b.	Exprees
c.	Mssql
d.	Cors
e.	Tedious
2.	Frontend Technologies
a.	React.js
b.	Node.js
c.	HTML
d.	CSS
3.	Database
a.	SQL
4.	Version Control and Testing Technologies
a.	Git
b.	Postman

Project Structure:
After cloning the project, we can see three folder - Project, Screenshots, Testing along with a readme file. When we move under the project folder, we have multiple files and folders which is a collection of backend and frontend server files. The entry point of the backend server is index.js. We have a directory named as phishing, which contains all the frontend server codes and the entry point of this server is src/index.js.
Version control:
The code is regularly pushed on GitHub to keep a track and merge the contribution of all the contributors, in cloud. It becomes easy when we are working remotely.
Git link : https://github.com/10623848/B9CY100_2223_TMD1S_CA1

Database:
client
In this table we have the information about the client type of client and I use the create, insert and update command 
emailtemplate
In this table I add the information about the email and I use the create, insert and update command
employee_spoc
In this table we have the information about the employee of the organization and I use the create, insert and update command
 landing_Template 
In this table we have the information about the and I use the select, create, insert and update command
Phishing _type
In this table we have data about the phishing type like email phishing and store the email name and i use the select, create, insert and update command.
 Report
It is the information of the client who phished and phished percentage of the particular client and I use select, create, insert and update commands.

 I have created tables by using the SQL create command and add data by insert command. I have added the filter in the database to filter the phished client. 
Functionality 
I make the connection between and backend and API to push and get the data by the tables.
I use the node.js to connect the APIs with the database and use the SQL tom retrieve, add, update, and delete the data in the tables.

Project Deployement:
To deploy this project, simple and few steps needs to be followed.
1.	Setup git
There are 2 ways on getting the project, install git bash or git cli and clone it with from the URL provided.
Command – ‘git clone https://github.com/10623848/B9CY100_2223_TMD1S_CA1’
2.	Setup Node.js
Download or install it from https://nodejs.org/en/download/ according to your OS
3.	Set up React
Command – ‘npm install react-scripts’
4.	Install MSSQL
Install MSSQL server management studio and set up a server with a database named as ‘Master_db’ and create the tables as mentioned. The SQL queries to create all DB elements are mentioned below
a.	create database if not exists Master_db;
b.	create table client(clientid int primary key, clientname varchar(255), license varchar(255), price decimal);
c.	create table employe_spoc(employeid int primary key, employename varchar(255), mob varchar(255), email varchar(255));
d.	create table phishing_type(phishingid int primary key, phishingname varchar(255), tempname varchar(255), detailstocapture varchar(255));
e.	create table landingtemplate(landingid int primary key, credtocapture varchar(255), clientlogo varchar(255));
f.	create table backend_database(backendid int primary key,is_phished varchar(255), credentials_captured varchar(255),clientid int, phishingid int, FOREIGN KEY (clientid) REFERENCES client(clientid), FOREIGN KEY (phishingid) REFERENCES phishing_type(phishingid));
g.	create table report(reportid int primary key, phishing_status varchar(255), clientid int,FOREIGN KEY (clientid) REFERENCES client(clientid));

5.	The username, password, server and port is supposed to be changed according to your machine. The file under /Project/dbconfig.js needs to be altered.

Contribution report: -

@Anant
-	Inserted animations in ADDEmployee.jsx -- AddEmployee.css
-	Created the page using react -- AddEmployee.jsx
-	Inserted animations in EmailTemplate.jsx -- EmailTemplate.css
-	Created the page using react -- EmailTemplate.jsx
-	Created the page using react -- Fishing.jsx
-	Inserted animations in FishingReport.jsx -- FishingReport.css
-	Created the page using react --FishingReport.jsx
![Email-Template](https://user-images.githubusercontent.com/118562423/209243708-e35c28c4-ec59-4193-966a-c18c1ec3cf58.png)
![User-Details](https://user-images.githubusercontent.com/118562423/209243793-a6bbff27-b654-4643-a333-45540e758fe8.png)



@Haseeb
-	login.css 
-	login.jsx 
-	templatecheck.js 
-	URLManager.js 
-	UserDetails.css 
-	UserDetail.jsx
![Login-Page](https://user-images.githubusercontent.com/118562423/209243749-ba2e2e6d-71ad-4e07-9b2a-4718e05ff4aa.png)



@Saqlain
-	Testing codes
-	Worked with frontend Navigation bar
-	Bug fixes
-	Complete project setup

![Project-Codes-Files](https://user-images.githubusercontent.com/118562423/209243634-1715bb76-dba7-46f5-8bc0-afd63e66ff38.png)
![Postman API Test](https://user-images.githubusercontent.com/118562423/209243503-f6e69264-c72a-43d3-9347-b476d042cc2f.png)



@Touseef
-	MSSQL Database server setup
-	SQL Queries to be implemented on backend
![DB-Operations](https://user-images.githubusercontent.com/118562423/209243591-b4679c0b-63a8-4985-b1f5-3e9e231e67aa.png)



@Vinay
-	APIs on backend – addEmailTemplate, getEmailTemplate, getPhishingReport, addEmployee, getEmployee

![URL-Manager](https://user-images.githubusercontent.com/118562423/209243899-0b3260b5-151e-48e3-a6f5-a9874ed8624c.png)
![APIS](https://user-images.githubusercontent.com/118562423/209243570-e8d447ef-c896-4578-a189-c654c142d46e.png)



Conclusion:
PhishReporter is a valuable tool for helping individuals and organizations protect themselves against phishing attacks. By providing a simple and effective way to analyse suspicious emails and websites, PhishReporter helps to stop the spread of phishing attacks and prevent further harm. If you or your organization is concerned about the risk of phishing attacks, consider using a tool like PhishReporter to help protect yourself and others.







# Project setup commands:-
## The project is divided in 3 different part: 

Backend, Frontend and Database.
For version control we have used Git Bash and GitHub.

### Backend Commands: Node.js
Install Node js on your pc
Download from https://nodejs.org/en/download/ and Install according to your OS

Initialize your project
**npm init  -y** '-y' is used to start with default package values.

Create all necessary file and write codes according to project's requirement

Install dependencies if any 
**npm install** or **npm install <library name>** for a perticular library

Development tool *nodemon* is also used to see quick affect while development

To run at development use **npm run dev**
TO run on production use **node index.js**



### Frontend commands: Node.js, React, CSS, HTML

Initialize react app
**npx create-react-app <app name>**

Install react script
**npm install react-scripts** <- This is us required only if you are cloning the application and you have not initialized the app.

Install all dependencies or single dependencies same as done for Backend.

Start the server with **npm start**



### Database commands: SQL

To create database
**CREATE DATABASE <Database name>**

To create tables with primary key(s)
**CREATE TABLE <Table name> (columnName Datatype, .... , PRIMARY KEY(One or more column))**

To insert values to tables
**Insert into <Table name> values(columnvalue, ...)**

To pull data from table
**Select * from <Table name>**




### Git commands:

To check all the commits
**git log**

To check the the status of what all changed locally before a commit
**git status**

To add all the files for commiting and pushing it to repository
**git add .**

To commit what all we are pushing to the repo
**git commit -m "<Commit message>"**

To push all local changes to repository
**git push origin <Branch name>**
