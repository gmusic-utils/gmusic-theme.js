module.exports = (grunt) => {
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc',
      },
      src: ['src/*.js'],
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015'],
      },
      dist: {
        files: {
          'dist/gmusic-theme.js': 'src/gmusic-theme.js',
        },
      },
    },
    uglify: {
      my_target: {
        files: {
          'dist/gmusic-theme.min.js': ['dist/gmusic-theme.js'],
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('gruntify-eslint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('test', ['eslint']);
  grunt.registerTask('build', ['eslint', 'babel', 'uglify']);
};
