# mjl-eCommerceBackend

mjl-eCommerceBackend is an e-commerce backend with an Express.js API and Sequelize-based access to a MySQL database. See [Description](#description) below or the !!!!!!demo video!!!!!!! for details.

## Table of Contents

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Description](#description)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Installation](#installation)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Usage](#usage)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Contributing](#contributing)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Questions](#questions)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Screenshot](#screenshot)<br/>

## Description

mjl-eCommerceBackend is an e-commerce backend with an Express.js API and Sequelize-based access to a MySQL database. It began with starter code supplied by the UC Davis Coding Bootcamp curriculum and now has GET, POST, PUT, and DELETE routes that work with the four tables of the ecommerce_db MySQL database (category, product, product-tag, and tag) to create, update, and delete products, categories, and tags in the database. The schema and seed data for the ecommerce_db database are included in this package (in the "db" and "seeds" directories).

Here is the user story: 
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

mjl-eCommerceBackend is built on the following technologies:

- [Node.js](https://nodejs.org/), which is the JavaScript runtime used for the server.
- [Express](https://expressjs.com/), which is the JavaScript backend framework used to provide routing.
- [Sequalize](https://www.npmjs.com/package/sequelize) npm package, which is an object-relational-mapping (ORM) package for MySQL (and other relational databases).
- [MySQL](https://www.mysql.com/), which is the relational database management system (RDBMS) used for this package.
- [mysql2](https://www.npmjs.com/package/mysql2) npm package, which is a MySQL client for Node.js. 
- [dotenv](https://www.npmjs.com/package/dotenv) npm package, which makes it possible to load environment variable settings from an .env file.

## Installation 

mjl-eCommerceBackend can be installed locally by doing the following:

1. Clone this repository.
2. In MySQL, set up the database by using the DROP DATABASE and CREATE DATABASE commands (in that order) from the db/schema.sql file.
3. At a command prompt in the root directory for the project, run the following command to seed the database:
```
   node seeds/index.js
```
5. At a command prompt in the root directory for the project, run the following command, which will install the npm packages used for this app (mysql2, express, sequelize, and dotenv):
```
   npm install
```

## Usage 

To run enter the following at a command prompt in the root directory for the project: 
```
npm start   
```

## Contributing

In general, outside contributions are not being accepted since this project is for educational purposes. 

## Questions
Send questions to mjlinder218@gmail.com. 
For more information about the developer, see https://github.com/mlin901.

## Screenshot 
![Note Taker application screen capture](./mjl_notetakerscreenshot.jpg)!!!!!!
