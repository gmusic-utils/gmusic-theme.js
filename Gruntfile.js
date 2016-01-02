module.exports = (grunt) => {
  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015'],
      },
      dist: {
        files: {
          'dist/gmusic-theme.js': 'dist/gmusic-theme.js',
        },
      },
    },
    browserify: {
      dist: {
        files: {
          'dist/gmusic-theme.js': ['src/gmusic-theme.js'],
        },
        options: {
          transform: ['brfs', 'browserify-inline-fn'],
        },
      },
    },
    eslint: {
      options: {
        configFile: '.eslintrc',
      },
      src: ['src/*.js'],
    },
    uglify: {
      my_target: {
        files: {
          'dist/gmusic-theme.min.js': ['dist/gmusic-theme.js'],
        },
      },
    },
    watch: {
      main: {
        files: ['src/**/*.js'],
        tasks: ['build'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('gruntify-eslint');


  grunt.registerTask('test', ['eslint']);
  grunt.registerTask('build', ['eslint', 'browserify', 'babel', 'uglify']);
};
