const sum = require ('../lib/Employee');

test('Employee is created', () =>
{
  const employee = new Employee('John', 0, 'john@email.com');

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
