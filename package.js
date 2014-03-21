Package.describe({
  summary: "REPLACEME - What does this package (or the original one you're wrapping) do?"
});

Package.on_use(function (api, where) {
  api.add_files('bootstrap-validator.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use('bootstrap-validator');

  api.add_files('bootstrap-validator_tests.js', ['client', 'server']);
});
