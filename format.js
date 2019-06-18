module.exports = String.prototype.splitRange = function( range = 1 ) {

	if(typeof range !== 'number') {
	
		throw new TypeError('range is not number')

	}

	return this.toString().match( new RegExp('.{1,' + range + '}', 'g') )

}

module.exports = String.prototype.format = function( separator = ' ', range = 1 ) {

	if(typeof separator !== 'string') {
	
		throw new TypeError('separator is not string')

	}

	if(typeof range !== 'number') {
	
		throw new TypeError('range is not number')

	}

	//With splitRange function
	return this.splitRange( range ).join( separator )
	
	//Without splitRange function
	//return this.toString().match( new RegExp('.{1,' + range + '}', 'g') ).join( separator )

}