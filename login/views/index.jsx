var React = require('react');
var DefaultLayout = require('./layouts/default');
class Index extends React.Component {
  render() {
    return (
      <div>
       <DefaultLayout>
       <div>
         <span>Redirecting...</span>
      </div>
        </DefaultLayout>
      </div>
    );
  }
}
module.exports = Index;