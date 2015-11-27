"use strict"

var React = require('react');

var Base = React.createClass({
    render: function() {
        return (
            <div className = "jumbotron">
                <h1>Title</h1>
                <p>React, React Router, and Flux for ultra-responsive web apps</p>
            </div>
        );
    }
});

module.exports = Base;