module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:react-hooks/recommended",
    "@react-native-community",
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
  },
};
