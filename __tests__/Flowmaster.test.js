const Flowmaster = require('../lib/Flowmaster.js');
const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

test('Flowmaster is created', () =>
{
  const flowmaster = new Flowmaster();

  expect(flowmaster instanceof Flowmaster).toBeTruthy();
  expect(flowmaster.state).toEqual(0);
  expect(flowmaster.available).toBeTruthy();
  expect(flowmaster.employees).toEqual([]);
});

test('A newly created Flowmaster is able to start', () =>
{
  const flowmaster = new Flowmaster();
  flowmaster.start();

  expect(flowmaster.available).toBeFalsy();
});

test('An available Flowmaster is able to move on in the flow', () =>
{
  const flowmaster = new Flowmaster();
  flowmaster.next();

  expect(flowmaster.state).toBe(1);
});
