Plain old Web 1.0 Market script
===============================

Rationale
---------
It's proof of concept intended to show (mostly) anti-dynamic sidebar navigation. It is not the real web marketplace or something useful.
The browser is not required to support JavaScript and it works absolutely without it or any other rocket technology.
But it _may_ use html5 markup language and tricky css, but it's still ok, because main goal is to get rid of dhtml, not modern web.

The server side _is_ modern: **node.js** and hand-made **MVC**.

It's **One-night project**, so don't expect the Amazon Web Store there.

Requirements
------------
* node.js
* npm
* connect2
* underscore.js

Running the server
------------------
    cd src
    node server.js

Hosting platforms
-----------------
* [nodester.com](http://nodester.com/)
* [no.de](http://no.de/)
* [joyent.com](http://www.joyent.com/)

See [Hosting compatible with Node](https://github.com/joyent/node/wiki/Node-Hosting)

TODO
----
* Split model and mock db
* Remove static www files
* Add vertical scrolling
* Improve router

Links
-----
[Nested lists - all steps combined](http://css.maxdesign.com.au/listutorial/sub_master.htm)  
[Research at MICA sidebar](http://www.mica.edu/Research_at_MICA.html)  
[Performance Profiler for Node.js](http://nodetime.com/)  

License
-------
New BSD License (Modified BSD License). See "LICENSE" file.

