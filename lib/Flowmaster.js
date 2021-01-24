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
      }
      return this.state;
    }
    return false;
  }

  start()
  {
    this.available = false;
    console.log("Welcome to Team-Member Creator");
    // Inquire for manager. async return function should make flowmaster available and proceed to next phase
    inquirer
      .prompt(
      [
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of the Team Manager?',
          validate: (i) => {if(i.name) return true; else return 'Enter a name';}
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is their id #?',
          validate: (i) => {i instanceof Number}
        }
      ])
      .then(answers =>
      {

      });
  }

  menu()
  {

  }

  end()
  {

  }
}

module.exports = Flowmaster;
