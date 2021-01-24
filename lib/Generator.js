const Employee = require('./Employee.js');
const Manager = require('./Manager.js');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const fs = require('fs');

class Generator
{
  constructor(employees)
  {
    this.employees = employees;
  }

  generate(filename)
  {
    filename = __dirname+'/../dist/'+filename;

    let content = ``;
    let formatter = new Formatter();
    content += formatter.top();
    content += formatter.content();
    for (let e of this.employees)
    {
      content += formatter.employee(e);
    }
    content += formatter.bottom();

    fs.writeFile(filename, content, function (err)
    {
      if (err) throw err;
      console.log("File generated >",filename);
    });
  }
}

class Formatter
{
  constructor(){}

  top()
  {
    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">

  <title>Your Team</title>
  <link rel="stylesheet" href="css/styles.css?v=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css" integrity="sha512-P5MgMn1jBN01asBgU0z60Qk4QxiXo86+wlFahKrsQf37c9cro517WzVSPPV1tDKzhku2iJ2FVgL67wG03SGnNA==" crossorigin="anonymous" />
</head>
<body>
  <div class="container p-1">
    <div class="container-fluid p-3 text-white bg-dark">
`;
  }

  content()
  {
    return `      <h1>My Team</h1>
    </div>`

  }

  employee(e)
  {
    console.log("Inserting",e);
    let target="#", newtab = "", info;
    switch (e.getRole())
    {
      case 'Manager':
        target="tel:"+e.getOfficeNumber();
        info=e.getOfficeNumber();
        break;
      case 'Engineer':
        target="https://www.github.com/"+e.getGitHubUsername();
        newtab='target="_blank"';
        info=e.getGitHubUsername();
        break;
      case 'Intern':
        info=e.getSchool();
    }

    return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${e.getName()}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${e.getRole()}</h6>
    <p class="card-text">ID #: ${e.getId()}</p>
    <a href="mailto:${e.getEmail()}" class="card-link">${e.getEmail()}</a>
    <br>
    <a href="${target}" ${newtab} class="card-link">${info}</a>
  </div>
</div>`
  }

  bottom()
  {
    return `
  </div>
</body>
</html>
`;
  }
}

module.exports = Generator;
