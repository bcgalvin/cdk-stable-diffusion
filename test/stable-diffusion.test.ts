import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { StableDiffusion } from '../src';

test('Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'test');

  new StableDiffusion(stack, 'StableDiffusion', { environment: 'test' });

  const template = Template.fromStack(stack);
  expect(template.toJSON()).toMatchSnapshot();
});
