const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testMatch: ['**/*.spec.ts'],
  transform: {
    ...tsJestTransformCfg,
  },
};