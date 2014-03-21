Package.describe({
  summary: 'bootstrapvalidator packaging for meteor js - validate forms and use bootstrap 3 to show errors'
});

Package.on_use(function(api) {
    api.use('jquery', 'client');
    api.add_files('lib/js/bootstrapValidator.js', 'client');
    api.add_files('lib/css/bootstrapValidator.css', 'client');
});
