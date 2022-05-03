INSERT INTO department (name)
VALUES ('Enginnering'), ('Finance'), ('Legal'), ('Service');

INSERT INTO roles (title, salary, department_id)
VALUES ('Sales Lead', 1000000.00, 1), ('Salesperson', 80000.00, 2), ('Lead Engineer', 150000.00, 3), ('Software Enginner', 120000.00, 4), ('Account Manager', 160000.00, 5), ('Accountant', 125000.00, 5), ('Legal Team Lead', 250000.00, 7), ('Lawyer', 190000.00, 8);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('John','Doe', 1, null), ('Mike', 'Chan', 2, 1), ('Ashley', 'Rodriguez', 3, null), ('Kevin', 'Tupik', 4, 3), ('Kunal', 'Singh', 5, null), ('Malia', 'Brown', 6, 5), ('Sarah', 'Lourd', 7, null), ('Tom', 'Allen', 8, 7);