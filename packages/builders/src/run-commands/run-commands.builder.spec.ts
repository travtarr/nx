import { normalize } from '@angular-devkit/core';
import * as path from 'path';
import RunCommandsBuilder from './run-commands.builder';

describe('Command Runner Builder', () => {
  let builder: RunCommandsBuilder;

  beforeEach(() => {
    builder = new RunCommandsBuilder();
  });

  it('should error when no command is given', async done => {
    const root = normalize('/root');
    const result = await builder
      .run({
        root,
        builder: '@nrwl/run-commands',
        projectType: 'application',
        options: {
          commands: [
            {
            }
          ] as any
        }
      })
      .toPromise();
    console.log(result)

    done();
  });

  it('should run commands in order', async done => {
    const root = normalize('/root');
    const result = await builder
      .run({
        root,
        builder: '@nrwl/run-commands',
        projectType: 'application',
        options: {
          commands: [
            {
            }
          ] as any
        }
      })
      .toPromise();
    console.log(result)

    done();
  });
});
