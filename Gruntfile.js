module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./bower_components/bootstrap/less"],
                    yuicompress: true
                },
                files: {
                    "./public/stylesheets/style.css": "./bower_components/bootstrap/less/bootstrap.less"
                }
            }
        },
        watch: {
            files: "./bower_components/bootstrap/less/*",
            tasks: ["less"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};