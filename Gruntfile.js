/* global module:false */
module.exports = function(grunt) {
	var port = grunt.option('port') || 8000;
	var base = grunt.option('base') || '.';

	// Project configuration
	grunt.initConfig({

		connect: {
			server: {
				options: {
					port: port,
					base: base,
					open: true,
					keepalive: true
				}
			}
		},

	});

	// Dependencies
	grunt.loadNpmTasks( 'grunt-contrib-connect' );

	// Serve presentation locally
	grunt.registerTask( 'serve', [ 'connect' ] );

};