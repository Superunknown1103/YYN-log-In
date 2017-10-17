var React = require('react');
var DefaultLayout = require('./layouts/default');

class Login extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>
        Welcome to mf Yum Yum Nasty!!!
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Login;