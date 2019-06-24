/**
 * @fileoverview Tests for no-class
 */

import { Rule, RuleTester } from "eslint";
import { name, rule } from "../../src/rules/noClass";

const ruleTester = new RuleTester({
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: 6 }
});

// Run the tests.
ruleTester.run(name, rule as Rule.RuleModule, {
  valid: [],
  invalid: [
    {
      code: "class Foo {}",
      errors: [
        {
          messageId: "generic",
          line: 1,
          column: 1
        }
      ]
    },
    {
      code: "const klass = class {}",
      errors: [
        {
          messageId: "generic",
          line: 1,
          column: 15
        }
      ]
    }
  ]
});
