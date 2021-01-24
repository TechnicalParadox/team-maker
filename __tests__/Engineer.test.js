const Engineer = require('../lib/Engineer.js');

test("Engineer is created", () =>
{
  const engineer = new Engineer("John Doe", 0, "johndoe@email.com", "johndoe-git");

  expect(engineer.name).toBe("John Doe");
  expect(engineer.id).toEqual(0);
  expect(engineer.email).toBe("johndoe@email.com");
  expect(engineer.githubUsername).toBe("johndoe-git");
});

test("Get GitHub username", () =>
{
  const engineer = new Engineer("John Doe", 0, "johndoe@email.com", "johndoe-git");
  const gotGHU = engineer.getGitHubUsername();

  expect(gotGHU).toBe("johndoe-git");
});

test("Get role", () =>
{
  const engineer = new Engineer("John Doe", 0, "johndoe@email.com", "johndoe-git");
  const gotRole = engineer.getRole();

  expect(gotRole).toBe("Engineer");
});
