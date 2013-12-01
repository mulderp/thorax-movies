var grunt = require('grunt');
var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = {
  development: {
    options: {
      hostname: grunt.config('settings.hostname'),
      // base: grunt.config('paths.public'), // TODO: only need to serve public/ bower.., test/, not whole root
      port: grunt.config('settings.port'),
      middleware: function (connect, options) {
        return [
          proxySnippet,
          require('connect-livereload')({port: grunt.config('settings.liveReloadPort')}),
          connect.static(options.base),
          connect.directory(options.base)
        ];
      }
    },
  },
  production:  {
    options: {
      hostname: grunt.config('settings.hostname'),
      base: grunt.config('paths.dist'),
      port: grunt.config('settings.port'),
      keepalive: true
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
  CIServer: {
    options: {
      base: '.',
      port: grunt.config('settings.mochaPhantomPort'),
    }
  }
};
