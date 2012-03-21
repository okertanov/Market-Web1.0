/**
    @file       market-controller.js
    @brief      Market controller.

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

var underscore = require('underscore')._;

function IsEmptyObject(o)
{
    return Object.keys(o).length === 0;
}

exports.MarketController =
{
    Route: function(connect, model, view)
    {
        return connect()
            .use(connect.logger('dev'))
            .use(connect.query())
            .use(function(req, res, next)
            {
                switch(req.method)
                {
                    case 'GET':
                        if (req.body) console.log(req.body);
                        model.query.cat  = NaN;
                        model.query.prod = NaN;
                        if (!IsEmptyObject(req.query))
                        {
                            model.query.cat  = parseInt(req.query['cat'],  10);
                            model.query.prod = parseInt(req.query['prod'], 10);
                        }
                        console.log("Category: " + model.query.cat);
                        console.log("Product:  " + model.query.prod);
                        res.writeHead(200, {'Content-Type':'text/html'});
                        res.end(underscore.template(view.Render(), model));
                    break;
                    case 'PUT':
                        console.log(req.body);
                    break;
                    case 'POST':
                        console.log(req.body);
                    break;
                    case 'DELETE':
                        console.log(req.body);
                    break;
                    default:
                    break;
                }
            });
    }

};

})()

