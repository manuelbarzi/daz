module.exports = grunt => {
    grunt.initConfig({
        jshint: {
            gruntfile: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: 'Gruntfile.js'
            },
            src: {
                options: {
                    jshintrc: 'src/.jshintrc'
                },
                src: ['src/**/*.js']
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/**/*.js']
            }
        },
        
        exec: {
            jasmine: 'jasmine-node test'
        },

        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            src: {
                files: '<%= jshint.src.src %>',
                tasks: ['jshint:src', 'exec:jasmine']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'exec:jasmine']
            },
        }
    })

    grunt.loadNpmTasks('grunt-contrib-jshint')
    grunt.loadNpmTasks('grunt-exec')
    grunt.loadNpmTasks('grunt-contrib-watch')

    grunt.registerTask('default', ['jshint', 'exec:jasmine'])
}