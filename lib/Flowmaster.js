const inquirer = require('inquirer');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');

class Flowmaster
{
  constructor(state = 0)
  {
    this.state = (state); // the state of the flowmaster
    this.available = true; // the flowmaster is available to proceed
    this.finished = false;
    this.employees = new Array();
  }

  next()
  {
    if (this.available)
    {
      switch(++this.state)
      {
        case 3: this.state = 0;
        case 0: this.start(); break;
        case 2: if (this.finished)
                {
                  this.end(); break;
                }
                else this.state = 1;
        case 1: this.menu(); break;
      }
      return this.state;
    }
    return false;
  }

  start()
  {
    this.available = false;
    console.log("* Welcome to Team-Member Creator *");
    this.createManager();
  }

  menu()
  {
    this.available = false;
    console.log("----- Main Menu -----");
    this.showMenu();
  }

  end()
  {
    console.log('\n', this.employees);
  }

  add(employee)
  {
    this.employees.push(employee);
    console.log("New Employee Added:\n", employee);
  }

  done()
  {
    this.available = true;
    this.next();
  }

  showMenu()
  {
    inquirer
      .prompt(
      {
        type: 'rawlist',
        name: 'choice',
        message: 'Select an option:',
        choices: ['Add Engineer', 'Add Intern', 'Finish']
      })
      .then(a =>
      {
        switch (a.choice)
        {
          case 'Add Engineer':
            this.createEngineer();
            break;
          case 'Add Intern':
            this.createIntern();
            break;
          default:
            this.finished = true;
            this.done();
        }
      });
  }

  createManager()
  {
    // Inquire for manager and proceed to next phase
    inquirer
      .prompt(
      [
        {
          type: 'input',
          name: 'name',
          message: 'What is the full name of the Team Manager?',
          validate: (i) => {return i ? true : 'Enter their name';}
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is their id number?',
          validate: (i) => {return parseInt(i) ? true : "Enter their ID number";}
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is their email?',
          validate: (i) => {return i ? true : "Enter their email";}
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is their office phone number?',
          validate: (i) => {return i ? true : "Enter their office phone number";}
        }
      ])
      .then(a =>
      {
        let manager = new Manager(a.name, a.id, a.email, a.officeNumber);
        this.add(manager);
        this.done();
      });
  }

  createEngineer()
  {
    // Inquire for Engineer and proceed to next phase
    inquirer
      .prompt(
      [
        {
          type: 'input',
          name: 'name',
          message: 'What is the full name of the Engineer?',
          validate: (i) => {return i ? true : 'Enter their name';}
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is their id number?',
          validate: (i) => {return parseInt(i) ? true : "Enter their ID number";}
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is their email?',
          validate: (i) => {return i ? true : "Enter their email";}
        },
        {
          type: 'input',
          name: 'githubUsername',
          message: 'What is their GitHub username?',
          validate: (i) => {return i ? true : "Enter their GitHub username?";}
        }
      ])
      .then(a =>
      {
        let engineer = new Engineer(a.name, a.id, a.email, a.githubUsername);
        this.add(engineer);
        this.done();
      });
  }

  createIntern()
  {
    // Inquire for manager and proceed to next phase
    inquirer
      .prompt(
      [
        {
          type: 'input',
          name: 'name',
          message: 'What is the full name of the Intern?',
          validate: (i) => {return i ? true : 'Enter their name';}
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is their id number?',
          validate: (i) => {return parseInt(i) ? true : "Enter their ID number";}
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is their email?',
          validate: (i) => {return i ? true : "Enter their email";}
        },
        {
          type: 'input',
          name: 'school',
          message: 'What is the name of their school?',
          validate: (i) => {return i ? true : "Enter the name of their school";}
        }
      ])
      .then(a =>
      {
        let intern = new Intern(a.name, a.id, a.email, a.school);
        this.add(intern);
        this.done();
      });
  }
}

module.exports = Flowmaster;
