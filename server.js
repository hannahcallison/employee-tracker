const inquirer = require('inquirer');
const mysql = require('mysql2');
const consTable = require('console.table');
require('dotenv').config();


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
        'Quit'
      ],
      name: 'choice'
    }
  ]).then(answers => {
    switch(answers.choice){
      case 'View All Employees':
        // employeeInfo();
        break;
      case 'Add Employee':
        // addEmployee();
        break;
      case 'Update Employee Role':
        // updateEmployee();
        break;
      case 'View All Roles':
        // viewRoles();
        break;
      case 'Add Role':
        // addRole();
        break;
      case 'View All Departments':
        // allDepartments();
        break;
      case 'Add Department':
        // addDepartment;
        break;
      case 'Quit':
        // return;??
        break;
    }
  })
}

// db.query???
