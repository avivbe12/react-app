var React = require('react');
var ListManager = require('./ListManager.jsx');
var createReactClass = require('create-react-class');

var ListsManager = createReactClass({
    getInitialState: function(){
        return {lists: [], newListText:''};
    },
    onChange: function(e){
        this.setState({newListText: e.target.value});
    },
    handleSubmit: function(e){
        e.preventDefault();

        var currentLists = this.state.lists;

        if(this.state.newListText){
            currentLists.push(this.state.newListText);
            console.log(currentLists);
            this.setState({Lists: currentLists, newListText:''});
        }
        
    },
    render: function(){
        var createList = function(text, index){
            return (
                    <div className="py-3">
                        <ListManager key={index + text + index} text={text} />
                    </div>
            );
        };

        return (
            <div className="py-5 ">
                <div className="jumbotron py-3">
                    <div className="row py-1">
                        <h3 className="col-md-6 px-0">Create List</h3>
                    </div>
                    <form onSubmit={this.handleSubmit} className="form-group">
                        <div className="row py-1">
                            <input onChange={this.onChange} value={this.state.newListText} className="col-md-8 form-control"/>
                            <div className="col-md-1 py-1"/>
                            <button className="btn btn-primary col-md-2">Add List</button>
                        </div>
                    </form>
                </div>
                
                <div className="">
                    {this.state.lists.map(createList)}
                </div>
            </div>   
        );
    }
});

module.exports = ListsManager;