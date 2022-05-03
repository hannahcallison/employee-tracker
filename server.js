const inquirer = require('inquirer');
const mysql = require('mysql2');
const consTable = require('console.table');
require('dotenv').config();


const db_connect = mysql.createConnection(
    {
      host: 'localhost',
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
},
console.log(`Connected to the employee_db database.`)
);

console.log('Welcome to our Employee Tracker\n===================')

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
        employeeInfo();
        break;
      case 'Add Employee':
        addEmployee();
        break;
      case 'Update Employee Role':
        updateEmployee();
        break;
      case 'View All Roles':
        viewRoles();
        break;
      case 'Add Role':
        addRole();
        break;
      case 'View All Departments':
        allDepartments();
        break;
      case 'Add Department':
        addDepartment();
        break;
      case 'Quit':
        db_connect.end;
        break;
    }
  })
}

function employeeInfo(){
  db_connect.promise().query('SELECT * FROM employee').then(([data]) => {
    console.table(data)
    start();
  }).catch(err => console.log(err))
}

function addEmployee(){
  inquirer.prompt([
    {
      type: "input",
      message: "First Name: ",
      name: "firstName",
    },
    {
      type: "input",
      message: "Last Name: ",
      name: "lastName",
    },
    {
      type: "list",
      message: "Employee Role ID: ",
      choices: ['Sales Lead', 'Sales Person', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer'],
      name: "role",
    },
  ]).then(data => {
    switch(data.role){
      case 'Sales Lead':
        data.role = '1';
        manager_id = null;
        break;
      case 'Sales Person':
        data.role = '2';
        manager_id = '1';
        break;
      case 'Lead Engineer':
        data.role = '3';
        manager_id = null;
        break;
      case 'Software Engineer':
        data.role = '4';
        manager_id = '3';
        break;
      case 'Account Manager':
        data.rol ='5';
        manager_id = null;
        break;
      case 'Accountant':
        data.role = '6';
        manager_id = '5';
        break;
      case 'Legal Team Lead':
        data.role = '7';
        manager_id = null;
        break;
      case 'Lawyer':
        data.role ='8';
        manager_id = '7';
        break;
    }
    db_connect.promise().query('INSERT INTO employee SET ?', {first_name: data.firstName, last_name: data.lastName, role_id: data.role, manager_id}).then(([data]) => {
    start();
    })
  }).catch(err => console.log(err))
}

// function updateEmployee(){
//   inquirer.prompt([
//     {
//       type: "list",
//       message: "Update Profile for:",
//       choices: ['John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malia Brown', 'Sarah Lourd', 'Tom Allen'],
//       name: 'profile',
//     },
//     {
//       type: 'list',
//       message: 'New Role: ',
//       choices: ['Sales Lead', 'Sales Person', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer'],
//       name: 'newRole'
//     }
//   ]).then(data => {
//     switch(data.profile){
//       case 'John Doe':
//         data.profile = 'John';
//         break;
//       case 'Mike Chan':
//         data.profile = '2';
//         break;
//       case 'Ashley Rodriguez':
//         data.profile = '3';
//         break;
//       case 'Kevin Tupik':
//         data.profile = '4';
//         break;
//       case 'Kunal Singh':
//         data.rol ='5';
//         break;
//       case 'Malia Brown':
//         data.profile = '6';
//         break;
//       case 'Sarah Lourd':
//         data.profile = '7';
//         break;
//       case 'Tom Allen':
//         data.profile ='8';
//         break;
//     }
//     switch(data.newRole){
//       case 'Salesperson':
//       data.newRole = '2';
//       break;
//     }
//     db_connect.promise().query('UPDATE employee SET ?  WHERE ? ', {role_id: data.newRole, first_name: data.profile}).then(([data]) => {
//     start();
//     })
//   }).catch(err => console.log(err))
// }

function viewRoles(){
  db_connect.promise().query('SELECT * FROM role').then(([data]) => {
    console.table(data)
    start();
  }).catch(err => console.log(err))
}

function addRole(){
  inquirer.prompt([
    {
      type:'input',
      message: "Role Title: ",
      name: "title"
    },
    {
      type:'input',
      message: "Salary: ",
      name: "salary"
    },
    {
      type:'input',
      message: "Department ID: ",
      name: "deptId"
    },
  ]).then(data => {
    db_connect.promise().query('INSERT INTO role SET ?', {title: data.title, salary: data.salary, department_id: data.deptId}).then(([data]) => {
    console.table(data);
    start();
    })
  }).catch(err => console.log(err))
}


function allDepartments(){
    db_connect.promise().query('SELECT * FROM department').then(([data]) => {
      console.table(data)
      start();
    }).catch(err => console.log(err))
}

function addDepartment(){
  inquirer.prompt([
    {
      type:'input',
      message: "Department Title: ",
      name: "title"
    }
  ]).then(data => {
    db_connect.promise().query('INSERT INTO department SET ?', {name: data.title}).then(([data]) => {
    start();
    })
  }).catch(err => console.log(err))
}

start();

