//. app.js
var express = require( 'express' ),
    ejs = require( 'ejs' ),
    app = express();

require( 'dotenv' ).config();
var domain = 'DOMAIN' in process.env && process.env.DOMAIN ? process.env.DOMAIN : 'domain.com';

app.use( express.static( __dirname + '/public' ) );
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );
app.use( express.Router() );

app.get( '/', async function( req, res ){
  res.render( 'index', { domain: domain } );
});

var port = process.env.PORT || 8081;
app.listen( port );
console.log( "app1 server starting on " + port + " ..." );

module.exports = app;
