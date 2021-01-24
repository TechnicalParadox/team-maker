class Employee
{
  constructor(n, i, e)
  {
    this.name = n;
    this.id = i;
    this.email = e;
  }

  getName()
  {
    return this.name;
  }

  getId()
  {
    return this.id;
  }

  getEmail()
  {
    return this.email;
  }

  getRole()
  {
    return 'Employee';
  }
}

module.exports = Employee;
