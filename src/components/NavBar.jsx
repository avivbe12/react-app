var React = require('react');
var createReactClass = require('create-react-class');
var Modal = require('./Modal.jsx');

var navbar = createReactClass({
    getInitialState: function(){
        return {modalTitle:'Login', confirmBtnName:'Login', signup:false};
    },
    clickedLogin: function(){
        this.setState({modalTitle:'Login', confirmBtnName:'Login', signup:false});
    },
    clickedSignUp: function(){
        this.setState({modalTitle:'Signup', confirmBtnName:'Signup', signup:true});
    },
    render: function(){
        return(
            <div>
                <Modal modalTitle={this.state.modalTitle} confirmBtnName={this.state.confirmBtnName} signup={this.state.signup}></Modal>
                <nav className="navbar navbar-light bg-light">
                <div className="">
                    <a className="navbar-brand col-md-5" href="#">
                        <img src="https://i7.pngguru.com/preview/940/556/897/check-mark-symbol-clip-art-svg.jpg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        <span className="px-2">
                            Lists Ahoy
                        </span>
                    </a>
                </div>
                <div className="text-right px-0 row" style={{width: '150px'}}>
                    <button type="button" className="btn btn-primary px-0 col-md-5" data-toggle="modal" data-target="#exampleModal" onClick={this.clickedSignUp}>
                        Signup
                    </button>
                    <div className="col-md-1 px-0"/>
                    <button type="button" className="btn btn-primary col-md-5 px-0" data-toggle="modal" data-target="#exampleModal" onClick={this.clickedLogin}>
                        Login
                    </button>
                </div>
               
            </nav>
            </div>
            
        );
    }
});

module.exports = navbar;