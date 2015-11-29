"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route name = "app" path = "/" handler={require('./components.app')}>
        <DefaultRoute handler={require('./components/dashboard')} />
        <Route name = "authors" handler={required('./components/authors/authorPage')} />
        <Route name = "about" handler={required('./components/about/aboutPage')} />
    </Route>
);

module.exports = routes;