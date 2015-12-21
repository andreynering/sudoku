var React = require('react');
var Store = require('./store');

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = Store.getState();
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

module.exports = HelloWorld;
