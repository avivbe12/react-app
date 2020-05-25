var React = require('react');
var List = require('./List.jsx');
var createReactClass = require('create-react-class');

var ListManager = createReactClass({
    getInitialState: function(){
        return {items: [], newItemText:''};
    },
    onChange: function(e){
        this.setState({newItemText: e.target.value});
    },
    handleClear: function(e){
        this.setState({items: []});
    },
    handleSubmit: function(e){
        e.preventDefault();

        var currentItems = this.state.items;

        if(this.state.newItemText){
            currentItems.push(this.state.newItemText);
            console.log(currentItems);
            this.setState({items: currentItems, newItemText:''});
        }
        
    },
    render: function(){
        return (
            <div className="jumbotron py-5">
                <div className="row py-1">
                    <h3 className="col-md-6 px-0">{this.props.text}</h3>
                    <div className="col-md-2 px-0 text-right">
                        <button className="btn btn-primary" onClick={this.handleClear}>Clear List</button>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row py-3">
                        <input onChange={this.onChange} value={this.state.newItemText} className="col-md-8 form-control"/>
                        <div className="col-md-1 py-1"/>
                        <button className="btn btn-primary col-md-2">Add</button>
                    </div>
                </form>
                <List items={this.state.items} />
            </div>
        );
    }
});

module.exports = ListManager;