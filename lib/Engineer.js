const Employee = require('./Employee.js');

class Engineer extends Employee
{
  constructor(name, id, email, ghUsername)
  {
    super(name, id, email);

    this.githubUsername = ghUsername;
  }

  getGitHubUsername()
  {
    return this.githubUsername;
  }

  getRole()
  {
    return 'Engineer';
  }
}

module.exports = Engineer;
