var React = require('react');
var DefaultLayout = require('./layouts/default');



class Login extends React.Component {
  render() {
    return (
      <DefaultLayout >
        <div>
        <form method="post" action="/login">
            <div >
            <label>Username</label>
            <input type="text" name="username" placeholder="Username" />
            </div>
            <div >
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
            </div>
            <button type="submit">Login</button>
            
            Don't Have An Account? <a href="/register">Register</a>
        </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Login;