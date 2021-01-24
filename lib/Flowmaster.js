const inquirer = require('inquirer');
const Manager = require('./Manager');

class Flowmaster
{
  constructor(state = 0)
  {
    this.state = (state); // the state of the flowmaster
    this.available = true; // the flowmaster is available to proceed
    this.employees = new Array();
  }

  next()
  {
    if (this.available)
    {
      switch(++this.state)
      {
        case 0: this.start(); break;
        case 1: this.menu(); break;
        case 2: this.end(); break;
        case 3: this.state = 0; this.start(); break;
      }
      return this.state;
    }
    return false;
  }

  start()
  {
    this.available = false;
    console.log("Welcome to Team-Member Creator");
    this.createManager();
  }

  menu()
  {

  }

  end()
  {

  }

  createManager()
  {
    // Inquire for manager. async return function should make flowmaster available and proceed to next phase
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
          message: 'What is their id #?',
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
          message: 'What is their office number?',
          validate: (i) => {return i ? true : "Enter their office number";}
        }
      ])
      .then(a =>
      {
        let manager = new Manager(a.name, a.id, a.email, a.officeNumber);
        this.employees.push(manager);
        console.log(this.employees);
      });
  }
}

module.exports = Flowmaster;
