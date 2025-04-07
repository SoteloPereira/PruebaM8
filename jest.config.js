module.exports = {
    reporters: [
      'default',
      ['jest-junit', { outputDirectory: './reports', outputName: 'jest-report.xml' }]
    ]
  };
  