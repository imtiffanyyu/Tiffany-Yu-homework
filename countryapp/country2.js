
var imported_reader = require ( './json-file-reader' );
var countryname = process.argv[2]

imported_reader.moduleJSONreader ( './countries.json', function (callbackjson) {
	// This loops through callbackjason and loads each element temporarily as 'country'
	callbackjson.forEach ( function ( country ) {
		if ( country.name == countryname ) {
				console.log ( 'Country: ' + country.name )
				console.log ( 'Top level domain: ' + country.topLevelDomain )
		}
	})
} );	