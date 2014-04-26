module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["./public/bower_components/bootstrap/less"],
                    yuicompress: true
                },
                files: {
                    "./public/stylesheets/style.css": "./public/bower_components/bootstrap/less/bootstrap.less"
                }
            }
        },
        watch: {
            files: "./public/bower_components/bootstrap/less/*",
            tasks: ["less"]
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
};