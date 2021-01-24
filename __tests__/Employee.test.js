const Employee = require('../lib/Employee.js');

test('Employee is created', () =>
{
  var employee = new Employee('John', 0, 'john@email.com');
  console.log(employee);

  expect(employee.name).toBe('John');
  expect(employee.id).toEqual(0);
  expect(employee.email).toBe('john@email.com');

  const gotName = employee.getName();
  const gotId = employee.getId();
  const gotEmail = employee.getEmail();
  const gotRole = employee.getRole();

  expect(gotName).toBe('John');
  expect(gotId).toEqual(0);
  expect(gotEmail).toBe('john@email.com');
  expect(gotRole).toBe('Employee');
});
