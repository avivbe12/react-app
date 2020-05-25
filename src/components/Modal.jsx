var React = require('react');
var createReactClass = require('create-react-class');
var LoginForm = require('./LoginForm.jsx')

var Modal = createReactClass({
    getInitialState: function(){
        return {textContent:'Default Content'};
    },
    render: function(){
        return(
            <div className="modal fade" id="exampleModal" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{this.props.modalTitle}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <LoginForm></LoginForm>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">{this.props.confirmBtnName}</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Modal;