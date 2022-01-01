module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    "/^@\/(.*)$/": "<rootDir>/client/$1"
  },
}
