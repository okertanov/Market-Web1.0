/**
    @file       server.js
    @brief      Node.JS Market Server.

    @author     Oleg Kertanov <okertanov@gmail.com>
    @date       March 2012
    @copyright  Copyright (C) 2012 Oleg Kertanov <okertanov@gmail.com>
    @license    BSD
    @see LICENSE file
*/

(function()
{

// Strict mode by default
"use strict";

// Modules
var os         = require('os');
var fs         = require('fs');
var connect    = require('connect');
var http       = require('http');

var model      = require('./market-model.js').MarketModel;
var view       = require('./market-view.js').MarketView;
var controller = require('./market-controller.js').MarketController;

// Server root
var ServerRoot = '../';

// WWW root
var WWWRoot = ServerRoot + 'wwwroot/';

// Connect2 application
var app = connect()
    .use('/market', controller.Route(connect, model, view))
    .use(connect.favicon())
    .use(connect.logger('dev'))
    .use(connect.static(WWWRoot))
    .use(connect.urlencoded())
    .use(connect.multipart())
    .use(connect.query())
    .use(function(err, req, res, next)
    {
        var resp = '';

        if ( err )
        {
            resp = "error";
            console.log(err);
        }
        else
        {
            resp = "OK";
        }

        res.writeHead(200, {'Content-Type':'text/plain'});
        res.end(resp);
    });

// HTTPS server
http.createServer(app).listen(8880);

})()

