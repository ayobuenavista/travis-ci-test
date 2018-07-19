function run(name, path) {
  describe(name, () => {
    require(path); // eslint-disable-line global-require, import/no-dynamic-require
  });
}

describe('REI Web Services tests', () => {
  describe('Run tests', () => {
    run('GENERAL', './generic/generic.test');
  });
});
