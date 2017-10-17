var React = require('react');
var Login = require('../Login');
class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}
module.exports = DefaultLayout;