var React = require('react');
var DefaultLayout = require('./layouts/default');

class Register extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>
              <form method='post' action='/register'>
              <div>
                  <label>Name</label>
                  <input type='text' name='name' placeholder="Name" />
              </div>
              <div>
                  <label>Username</label>
                  <input type='text' name='username' placeholder="Username" />
              </div>
              <div>
                  <label>Email</label>
                  <input type='text' name='email' placeholder="Email" />
              </div>
              <div>
                  <label>Password</label>
                  <input type='text' name='password' placeholder="Password" />
              </div>
              <div>
                  <label>Confirm Password</label>
                  <input type='text' name='password2' placeholder="Confirm Password" />
              </div>
              <button type='submit'>Register</button>
          
              Have an account? <a href='/'> Login now</a>
              </form>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Register;