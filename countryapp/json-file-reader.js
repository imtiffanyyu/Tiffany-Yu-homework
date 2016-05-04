var fs = require ( 'fs' );

function readJSON (file, dothislast) {
	fs.readFile ( file, function ( error, thereadfile ) {
		if ( error ) {
			console.log ( "Error: "+ error)
			throw error
		}
		var fileasJSON = JSON.parse ( thereadfile )

		dothislast ( fileasJSON )
	})
}

module.exports.moduleJSONreader = readJSON;