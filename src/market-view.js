/**
    @file       market-view.js
    @brief      Market view.

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

exports.MarketView =
{
    index:
    [
        '<!DOCTYPE html>\n',
        '<!--\n',
        '    @copyright  Copyright (C) 2012 Oleg Kertanov <okertanov@gmail.com>\n',
        '-->\n',
        '<html>',
        '<head>',
        '<meta charset="utf-8"><meta name="viewport" content="width=device-width">',
        '<link rel="stylesheet" href="css/style.css">',
        '<title><%= page.title %></title>',
        '</head>',
        '<body>',
            '<section class="heading">',
                '<header>',
                    '<h2><a href="/market">Welcome to online market</a></h2>',
                '</header>',
            '</section>',
            '<section class="body">',
                '<section class="navigation">',
                    '<nav>',
                        '<ul>',
                        '<% var id=0; _.each(db.items, function(item) {  %>',
                            '<% id += 1; %>',
                            '<li class="<% id==query.cat?print("expanded"):print("collapsed"); %>">',
                                '<a href="/market?cat=<% if (id==query.cat) {print(0)} else {print(id)}; %>"><%= item.title %></a>',
                                '<ul>',
                                    '<% var prod=0; _.each(item.items, function(item2) {  %>',
                                        '<% prod += 1; %>',
                                        '<li>',
                                        '<a href="/market?cat=<% print(id + "&prod=" + prod); %>"><%= item2.title %></a>',
                                        '</li>',
                                    '<% }); %>',
                                '</ul>',
                            '</li>',
                        '<% }); %>',
                        '</ul>',
                    '</nav>',
                '</section>',
                '<section class="content">',
                    '<% if ( query.cat > 0 && query.cat <= db.items.length &&',
                            'query.prod > 0 && query.prod <= db.items[query.cat-1].items.length ) { %>',
                        '<article>',
                            '<h3><%- db.items[query.cat-1].items[query.prod-1].title %></h3>',
                            '<p><%- db.items[query.cat-1].items[query.prod-1].description %></p>',
                            '<p>Price: <%- db.items[query.cat-1].items[query.prod-1].price %> lvl.</p>',
                            '<% if ( db.items[query.cat-1].items[query.prod-1].image &&',
                                    'db.items[query.cat-1].items[query.prod-1].image.length ) { %>',
                            '<p style="float: right;"><img width="320" src="<%- db.items[query.cat-1].items[query.prod-1].image %>" /></p>',
                            '<% } %>',
                        '</article>',
                    '<% } else {%>',
                    '   <article>',
                            '<h3>Just take a look, we have a lot of things for you.</h3>',
                            '<p>Make your choice. All our categories are available right here!</p>',
                        '</article>',
                    '<% } %>',
                '</section>',
            '</section>',
            '<section class="footer">',
                '<footer>',
                    '<span>Copyright &copy; 2012 Oleg Kertanov &lt;okertanov@gmail.com&gt;</span>',
                '</footer>',
            '</section>',
        '</body>',
        '</html>'
    ],
    Render: function()
    {
        return this.index.join('');
    }
};

})()

