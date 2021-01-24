const Manager = require('../lib/Manager.js');

test('Manager is created', () =>
{
  const manager = new Manager("John Doe", 0, "johndoe@email.com", '1-800-123-4567');

  expect(manager.name).toBe("John Doe");
  expect(manager.id).toEqual(0);
  expect(manager.email).toBe("johndoe@email.com");
  expect(manager.officeNumber).toBe('1-800-123-4567');
});

test('Gets office number of Manager', () =>
{
  const manager = new Manager("John Doe", 0, "johndoe@email.com", '1-800-123-4567');
  const gotON = manager.getOfficeNumber();

  expect(gotON).toBe('1-800-123-4567');
});

test('Gets role of Manager', () =>
{
  const manager = new Manager("John Doe", 0, "johndoe@email.com", '1-800-123-4567');
  const role = manager.getRole();

  expect(role).toBe('Manager');
});
