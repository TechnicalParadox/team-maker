class Flowmaster
{
  constructor(state = 0)
  {
    this.state = (state); // the state of the flowmaster
    this.available = true; // the flowmaster is available to proceed

  }

  next()
  {
    if (this.available)
    {
      switch(++this.state)
      {
        case 0: this.start(); break;
        case 1: this.menu(); break;
        case 2: this.end(); break;
      }
      return this.state;
    }
    return false;
  }

  start()
  {

  }

  menu()
  {

  }

  end()
  {

  }
}

module.exports = Flowmaster;
