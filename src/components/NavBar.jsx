var React = require('react');
var createReactClass = require('create-react-class');
var Modal = require('./Modal.jsx');

var navbar = createReactClass({

    render: function(){
        return(
            <div>
                <Modal modalTitle="Login" confirmBtnName="Login"></Modal>
                <nav className="navbar navbar-light bg-light">
                <div className="">
                    <a className="navbar-brand col-md-5" href="#">
                        <img src="https://i7.pngguru.com/preview/940/556/897/check-mark-symbol-clip-art-svg.jpg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        <span className="px-2">
                            Lists Ahoy
                        </span>
                    </a>
                </div>
                <div className="text-right px-0">
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                            Login
                        </button>
                </div>
               
            </nav>
            </div>
            
        );
    }
});

module.exports = navbar;