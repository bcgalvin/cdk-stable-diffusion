import { CfnOutput } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface StableDiffusionProps {
  readonly environment: string;
}

export class StableDiffusion extends Construct {
  constructor(scope: Construct, id: string, props: StableDiffusionProps) {
    super(scope, id);

    new CfnOutput(this, 'Output', {
      description: 'test output',
      value: props.environment,
    });
  }
}
