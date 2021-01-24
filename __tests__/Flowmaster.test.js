const Flowmaster = require('../lib/Flowmaster.js');

test('Flowmaster is created', () =>
{
  const flowmaster = new Flowmaster();

  expect(flowmaster instanceof Flowmaster).toBeTruthy();
  expect(flowmaster.state).toEqual(0);
  expect(flowmaster.available).toBeTruthy();
});
