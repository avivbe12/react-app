var React = require('react');
var createReactClass = require('create-react-class');

var SignUpForm = createReactClass({
    getInitialState: function(){
        return {textContent:'Default Content'};
    },
    render: function(){
        return(
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address sign up</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = SignUpForm;