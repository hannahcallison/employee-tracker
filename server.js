const inquirer = require('inquirer');
const mysql = require('mysql2');
const consTable = require('console.table');
require('dotenv').config();
// View All Employees
// Add Employee
// Update Employee Role
// View All Roles
// Add Role
// View All Departments
// Add Department

const db = mysql.createConnection(
    {
      host: 'localhost',
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_password,
}
);

function start (){
  inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View All Employees',
        'Add Employee',
        'Update Employee Role',
        'View All Roles',
        'Add Role',
        'View All Departments',
        'Add Department',
      ],
      name: 'choice'
    }
  ])
}