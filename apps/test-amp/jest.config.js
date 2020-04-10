module.exports = {
  name: 'test-amp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/test-amp',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
