const Intern = require('../lib/Intern.js');

test("Intern is created", () =>
{
  const intern = new Intern("John Doe", 0, "johndoe@email.com", "Penn State University");

  expect(intern.name).toBe("John Doe");
  expect(intern.id).toEqual(0);
  expect(intern.email).toBe("johndoe@email.com");
  expect(intern.school).toBe("Penn State University");
});

test("Get school", () =>
{
  const intern = new Intern("John Doe", 0, "johndoe@email.com", "Penn State University");
  const gotSchool = intern.getSchool();

  expect(gotSchool).toBe("Penn State University");
});

test("Get role", () =>
{
  const intern = new Intern("John Doe", 0, "johndoe@email.com", "Penn State University");
  const gotRole = intern.getRole();

  expect(gotRole).toBe("Intern");
});
