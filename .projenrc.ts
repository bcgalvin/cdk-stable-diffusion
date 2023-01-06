import { AwsCdkConstructLibrary } from 'projen/lib/awscdk';
import { ArrowParens, TrailingComma } from 'projen/lib/javascript';

const cdkVersion = '2.59.0';

const commonIgnore = ['.idea', '.vscode', 'cdk.context.json'];

const project = new AwsCdkConstructLibrary({
  author: 'Bryan Galvin',
  authorAddress: 'bcgalvin@gmail.com',
  cdkVersion: cdkVersion,
  defaultReleaseBranch: 'main',
  name: 'cdk-stable-diffusion',
  repositoryUrl: 'https://github.com/bcgalvin/cdk-stable-diffusion.git',
  // Config
  eslintOptions: {
    dirs: ['src', 'test'],
    prettier: true,
  },
  projenrcTs: true,
  prettier: true,
  prettierOptions: {
    settings: {
      printWidth: 120,
      trailingComma: TrailingComma.ALL,
      arrowParens: ArrowParens.ALWAYS,
      singleQuote: true,
    },
  },
  tsconfig: {
    compilerOptions: {
      lib: ['es2018', 'dom'],
    },
  },
  pullRequestTemplate: false,
  githubOptions: {
    pullRequestLint: false,
  },
  release: false,
  dependabot: false,
  autoMerge: false,
  catalog: { announce: false },
  // Ignore files
  gitignore: commonIgnore,
});
project.synth();
