var React = require('react');
var createReactClass = require('create-react-class');


var ListItem = createReactClass({
    render: function(){
        return(
            <li className="list-group-item py-1">
                <h4>{this.props.text}</h4>
            </li>
        );
    }
});

module.exports = ListItem;