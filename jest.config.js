// https://www.gatsbyjs.org/docs/unit-testing/
module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(svg)$': '<rootDir>/__mocks__/icon-mock.tsx',
    '@penpad/([^/]+)$': '<rootDir>/packages/$1/src/index.tsx',
    'react-simple-head$': '<rootDir>/packages/react-simple-head/src/index.ts',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.tsx'
  },
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: ''
  },
  testURL: 'http://localhost'
}
