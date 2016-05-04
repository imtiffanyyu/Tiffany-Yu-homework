var fs = require ( 'fs' )
var everyone = [] // initialize empty array to hold the people
var readfiles = 0 // variable to track the number of files that have completely loaded

// function to keep track of when file loads are complete
function done (  ) {
	readfiles++ // add one of the file counter

	// only do the below when all (2) files are loaded
	if ( readfiles == 2 ) { // note to self, if doing more files, change this number
		// write the everyone data to theg file
		fs.writeFile ( 'peopleComplete.txt', everyone.sort(), function ( error ) { // note the .sort which alphbetically sorts the names
			// handle errors if they occur
			if ( error ) {
			console.log ( "Error: "+ error)
			throw error
			}
		} )
	}
}

//////////////////////////////////////////////////////////////////
// read file statement to load files into everyone array
//////////////////////////////////////////////////////////////////


// // calling readfile on json data
// fs.readFile ( './people.json', function ( error, filedata ) {
// 	if ( error ) {
// 		console.log ( "Error: "+ error)
// 		throw error
// 	}

// 	// change data format from buffer to json
// 	filedata = JSON.parse ( filedata )

// 	// loop over the json data
// 	filedata.forEach ( function ( person ) {
// 		// push separate elements into the everyone array
// 		everyone.push ( person )
// 	} )

// 	// call the done function to keep track of the loading process
// 	done ( ) 

// })

// // identical to above just with different file name

// fs.readFile ( './people2.json', function ( error, filedata ) {
// 	if ( error ) {
// 		console.log ( "Error: "+ error)
// 		throw error
// 	}
// 	filedata = JSON.parse ( filedata )
// 	filedata.forEach ( function ( person ) {
// 		everyone.push ( person )
// 	} ) 
// 	done ( )

// })



function readJSON (file) {
	fs.readFile ( file , function ( error, filedata ) {
	if ( error ) {
		console.log ( "Error: "+ error)
		throw error
	}

	// change data format from buffer to json
	filedata = JSON.parse ( filedata )

	// loop over the json data
	filedata.forEach ( function ( person ) {
		// push separate elements into the everyone array
		everyone.push ( person )
	} )

	// call the done function to keep track of the loading process
	done ( ) 

	})
}

readJSON ( 'people.json' )
readJSON ( 'people2.json' )