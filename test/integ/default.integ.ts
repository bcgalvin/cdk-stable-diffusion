import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { StableDiffusion } from '../../src';

/** @internal */
export class DefaultInteg extends cdk.Stack {
  constructor(scope_: Construct, props: cdk.StackProps = {}) {
    super(scope_, 'StableDiffusionDefaultInteg', props);
    new StableDiffusion(this, 'default-integ', { environment: 'test' });
  }
}

const app = new cdk.App();
new DefaultInteg(app, {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
app.synth();
