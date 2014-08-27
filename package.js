Package.describe({
  name: 'bootstrap-validator',
  summary: 'bootstrapValidator to validate forms and use bootstrap 3 to show errors',
  version: '0.5.0',
  githubUrl: 'https://github.com/rgoomar/Bootstrap-Validator'
});

Package.onUse(function(api) {
    api.versionsFrom("METEOR@0.9.0");
    api.use('jquery', 'client');
    api.addFiles('lib/js/bootstrapValidator.js', 'client');
    api.addFiles('lib/css/bootstrapValidator.css', 'client');
});
