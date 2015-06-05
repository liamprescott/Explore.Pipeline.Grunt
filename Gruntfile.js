'use strict';


// Gruntfile.js
module.exports = function(grunt) {


    // Task configurations
    grunt.initConfig({

        // Load package.json - this holds
        pkg: grunt.file.readJSON('package.json'),

        // Watch task config
        watch: {
            sass: {
            files: "assets/styles/scss/**/*.scss", /* When this changes run tasks */
            tasks: ['sass'] /* These are the 'tasks' to watch e.g. sass or less */
            }
        },

        // SASS task config
        // See [https://github.com/gruntjs/grunt-contrib-sass]
        sass: {
            dev: {
                options: {
                    //sourcemap     : 'auto',
                    //trace         : false,
                    //check         : false,
                    //style         : 'nested',
                    style : 'expanded'
                    //precision     : 5,
                    //quiet         : false,
                    //compass       : false,
                    //loadPath      : String|Array,
                    //require       : String|Array,
                    //cacheLocation : '.sass-cache',
                    //noCache       : false,
                    //bundleExec    : false,
                    //update        : false,
                },
                files: {
                    //"css/a.css" : "/scss/a.scss" // 'destination' : 'source'
                    "assets/styles/css/main.css" : "assets/styles/scss/main.scss"
                }
            }
        },
 //
 //       /*
 //       sass: {                             // Task
 //           dev: {                          // Target ^
 //               files: {                    // Target options
 //                   'a.css' : 'a.scss'      // 'destination' : 'source'
 //               }
 //           }
 //       },
 //
 //       ^ Each configuration (e.g. 'sass') can have multiple configurations:
 //       - running 'grunt <task-name>' will run all confiugurations
 //       - running 'grunt <task-name>:<configuration>' will process just the specified target's configuration
 //       see: http://gruntjs.com/configuring-tasks
 //
 //       */


        // SASSDOC task config
        sassdoc : {
          basic: {
            src: 'assets/styles/scss/**/*.scss', /* Match any .scss file in this folder */
            options: {
              // CLI options

              //SassDoc
              exclude: ['assets/styles/scss/vendor/*'] /* Exclude all 3rd party vendor files */
            }
          }
        },


        // Concat task config
        // See [https://www.npmjs.com/package/grunt-contrib-concat]
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */',
                sourcemap: true,
                sourceMapStyle: 'link'
            },
            deploy: {
                src: ['assets/js/temp/a.js', 'assets/js/temp/b.js'],
                //dest: 'assets/js/dist/abc.js'
                dest: 'assets/js/deploy/<%= pkg.name %>-<%= pkg.version %>.js'
            },
        },


    });


    // Load tasks (name relates to the task name in package.json)
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sassdoc');


    // npm install matchdep
    //require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);


    grunt.registerTask('start-watching',['watch']);

    // Registering other tasks
    //grunt.registerTask('dev',['sass', 'jshint', 'another']);
    //grunt.registerTask('publish',['sass', 'jshint', 'another']);

    grunt.registerTask('test',['sass']);

    grunt.registerTask('publish-docs',[
      'sassdoc:basic'
    ]);


};


//
// Autoprefixer
// Install
// Update can i use database
// Run as a grunt task
//
// TODO: Think about keeping sourcemaps working
//
//
