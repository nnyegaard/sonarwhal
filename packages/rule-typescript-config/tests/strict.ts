import * as path from 'path';

import * as ruleRunner from 'sonarwhal/dist/tests/helpers/rule-runner';
import { RuleLocalTest } from 'sonarwhal/dist/tests/helpers/rule-test-type';

const ruleName = 'typescript-config/strict';

const tests: Array<RuleLocalTest> = [
    {
        name: 'Configuration with "compilerOptions.strict = true" should pass',
        path: path.join(__dirname, 'fixtures', 'strict', 'strict-true')
    },
    {
        name: 'Configuration with "compilerOptions.strict = false" should fail',
        path: path.join(__dirname, 'fixtures', 'strict', 'strict-false'),
        reports: [{message: 'The compiler option "strict" should be enabled to reduce type errors.'}]
    },
    {
        name: 'Configuration with no explicit "compilerOptions.strict" should fail',
        path: path.join(__dirname, 'fixtures', 'strict', 'no-strict'),
        reports: [{message: 'The compiler option "strict" should be enabled to reduce type errors.'}]
    }
];

ruleRunner.testLocalRule(ruleName, tests, {parsers: ['typescript-config']});
