const Employee = require('../lib/Employee.js');

test('Employee is created', () =>
{
  const employee = new Employee('John', 0, 'john@email.com');
  console.log(employee);

  expect(employee.name).toBe('John');
  expect(employee.id).toEqual(0);
  expect(employee.email).toBe('john@email.com');
});

test('Gets name of employee', () =>
{
  const employee = new Employee('John', 0, 'john@email.com');
  const gotName = employee.getName();

  expect(gotName).toEqual(expect.stringContaining(employee.name));
});

test ('Gets ID of employee', () =>
{
  const employee = new Employee('John', 0, 'john@email.com');
  const gotId = employee.getId();

  expect(gotId).toBe(employee.id);
});

test ('Gets email of employee', () =>
{
  const employee = new Employee('John', 0, 'john@email.com');

  const gotEmail = employee.getEmail();
  expect(gotEmail).toEqual(expect.stringContaining(employee.email));
});

test ('Gets role of employee', () =>
{
  const employee = new Employee('John', 0, 'john@email.com');
  const gotRole = employee.getRole();
  
  expect(gotRole).toEqual('Employee');
});
