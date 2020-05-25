var React = require('react');
var createReactClass = require('create-react-class');
var ListItem = require('./ListItem.jsx');

var List = createReactClass({
    render: function(){

        var createItem = function(text, index){
            console.log(index + text);
            return <ListItem key={index + text} text={text} />
        };


       return (<ul className="list-group list-group-flush">{this.props.items.map(createItem)}</ul>);
    }
});

module.exports = List;