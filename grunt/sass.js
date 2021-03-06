module.exports = {
	/**
	 * grunt-sass
	 *
	 * Compile Sass to CSS using node-sass
	 *
	 * @link https://www.npmjs.com/package/grunt-sass
	 */
	dist: {
		options: {
			sourceMap: true,
			// @link https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/
			indentedSyntax: true,
			indentType: 'tab',
			indentWidth: '1',
			outputStyle: 'expanded'
		},
		files: {
			'docs/css/prism.css': 'bower_components/prism/themes/prism.css',
			'docs/css/font-awesome.css': 'bower_components/font-awesome/scss/font-awesome.scss',
			'docs/css/main.css': 'docs/sass/main.scss'
		}
	}
};
