module.exports = function(grunt) {
  grunt.option('stack', true);

  var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

  var port = process.env.PORT || 8000,
      hostname = 'localhost',
      templates = {},
      paths = {
        'public': 'public',
        output: {
          js: 'public/js',
          css: 'public/css'
        },
        sass: [
           {
             "expand": true,
             "cwd": "sass/",
             "src": ["*.scss"],
             "dest": "public/css/",
             "ext": ".css"
           }
         ],
        js: 'js',
        css: 'css',
        templates: 'js/templates',
        views: 'js/views',
        models: 'js/models',
        collections: 'js/collections'
      };

  // Register required tasks
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('thorax-inspector');
  grunt.loadNpmTasks('grunt-contrib-sass');
  require('matchdep').filterDev('grunt-*').forEach(function(task) {
    if (task !== 'grunt-cli') {
      grunt.loadNpmTasks(task);
    }
  });

  grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),
    paths: paths,
    clean: {
      output: [
        paths.output.js,
        paths.output.css
      ]
    },
    copy: {
      requirejs: {
        files: [
          {
            src: 'bower_components/requirejs/require.js',
            dest: 'public/js/require.js'
          }
        ]
      },
    },
    // Sass makes your style amazing
    sass: {
      options: {
        require: [],
        sourcemap: true
      },
      dev: {
        options: {
          style: 'expanded',
          lineNumbers: true
        },
        files: '<%= paths.sass %>'
      },
      dist: {
        options: {
          style: 'compressed',
          lineNumbers: false
        },
        files: '<%= paths.sass %>'
      }
    },
    connect: {
      development: {
        options: {
          hostname: hostname,
          base: paths.public,
          port: port,
          middleware: function (connect, options) {
              var config = [ connect.static(options.base),
                             connect.directory(options.base) ];
             var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
             config.unshift(proxy);
             return config;
           }
        }
     },
     proxies: [
           {
               context: '/movies',
               host: '0.0.0.0',
               port: 5000,
               https: false,
               changeOrigin: false
           },
           {
               context: '/genres',
               host: '0.0.0.0',
               port: 5000,
               https: false,
               changeOrigin: false
           }
      ],
      production:  {
        options: {
          hostname: hostname,
          base: paths.public,
          port: port,
          keepalive: true
        }
      }
    },
    thorax: {
      inspector: {
        editor: 'subl',
        background: true,
        paths: {
          views: paths.views,
          models: paths.models,
          collections: paths.collections,
          templates: paths.templates
        }
      }
    },
    requirejs: {
      development: getRequireJSOptions('development'),
      production: getRequireJSOptions('production')
    },
    handlebars: {
      templates: {
        options: {
          namespace: false,
          amd: true
        }
      }
    },
    watch: {
      handlebars: {
        files: [paths.templates + '/**/*.hbs'],
        tasks: ['templates']
      },
      scripts: {
        files: [
          paths.js + '/**/*.js'
        ],
        tasks: ['scripts:development']
      },
      styles: {
        files: [paths.css + '/**/*'],
        tasks: ['copy:styles']
      }
    }
  });

  function getRequireJSOptions(env) {
    var options = {
      appDir: paths.js,
      baseUrl: './',
      dir: paths.output.js,
      modules: [
        {
          name: 'main'
        } 
      ],
      paths: {
        'jquery': '../bower_components/jquery/jquery',
        'underscore': '../bower_components/underscore/underscore',
        'handlebars': '../bower_components/handlebars/handlebars.runtime',
        'backbone': '../bower_components/backbone/backbone',
        'thorax': '../bower_components/thorax/thorax',
        'obscura': '../bower_components/backbone.obscura/backbone.obscura',
      },
      shim: {
        'handlebars': {
          exports: 'Handlebars'
        },
        'backbone': {
          exports: 'Backbone',
          deps: ['jquery', 'underscore']
        },
        'underscore': {
          exports: '_'
        },
        'thorax': {
          exports: 'Thorax',
          deps: ['handlebars', 'backbone']
        },
        'bootstrap': {
          deps: ['jquery']
        }
      }
    };
    if (env === 'production') {
      /*
      TODO
      options.keepBuildDir = true;
      options.optimize = 'uglify';
      */
    }
    if (env === 'development') {
      options.keepBuildDir = true;
      options.optimize = 'none';
    }
    return {
      options: options
    };
  }

  grunt.registerTask('open-browser', function () {
    var open = require('open');
    open('http://' + hostname + ':' + port);
  });

  grunt.registerTask('scripts:development', [
    'copy:requirejs',
    'requirejs:development'
  ]);

  grunt.registerTask('scripts:production', [
    'copy:requirejs',
    'requirejs:production'
  ]);

  grunt.registerTask('update-templates-list', function() {
    // Set up the templates object for Handlebars
    grunt.file.glob.sync(paths.templates + '/**/*.{handlebars,hbs}').forEach(function (file) {
      var target = paths.output.js + '/templates' + file.substr(paths.templates.length).replace(/\.(?:handlebars|hbs)$/, '.js');
      templates[target] = file;
    });
    grunt.config.set('handlebars.templates.files', templates);
  });

  grunt.registerTask('create-output-directories', function() {
    grunt.file.mkdir('public/js');
    grunt.file.mkdir('public/css');
  });

  grunt.registerTask('templates', [
    'update-templates-list',
    'handlebars:templates'
  ]);

  grunt.registerTask('styles', [
    'sass:dev'
  ]);

  grunt.registerTask('default', [
    'ensure-installed',
    'clean:output',
    'create-output-directories',
    'styles',
    'templates',
    'scripts:development',
    'thorax:inspector',
    'connect:development',
    'configureProxies',
    'open-browser',
    'watch'
  ]);

  grunt.registerTask('production', [
    'clean:output',
    'create-output-directories',
    'styles',
    'templates',
    'scripts:production',
    'open-browser',
    'connect:production'
  ]);
};
