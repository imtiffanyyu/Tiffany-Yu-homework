// //var countries = require ( 'countries' );
// var fs = require ( 'fs' );
// var content;
// var file = './countries.json';
// var country = process.argv[2];

// fs.readFile (file, 'utf8', function (err, data) {
// 	if ( err ) {
// 		console.log ( "looks like an error occured: " + err );
// 		throw err;
// 	};
// 	content = JSON.parse ( data );
// 	countrydata (content);
// });
		
// function countrydata (content) {
// 	for ( var i = 0; i < content.length; i++ ) {
// 		if ( content[i].name === country) {
// 		console.log ("Country: " + content[i].name );
// 		console.log ("Top Level Domain: " + content[i].topLevelDomain );
// 		};
// 	};
// };

var countryname = process.argv[2]
var fs = require ( 'fs' )

fs.readFile ( './countries.json', function ( error, filedata ) {
	if ( error ) {
		console.log ( "Error: "+ error)
		throw error
	}
	var jsondata = JSON.parse ( filedata )

	jsondata.forEach ( function ( country ) {
		if ( country.name == countryname ) {
			console.log ( 'Country: ' + country.name )
			console.log ( 'Top level domain: ' + country.topLevelDomain)
		}
	})
})





