import { Builder, BuilderConfiguration, BuildEvent } from '@angular-devkit/architect';

import { Observable } from 'rxjs';
import { exec } from 'child_process';


export interface RunCommandsBuilderOptions {
  commands: {command: string}[];
  parallel?: boolean;
}

export default class RunCommandsBuilder implements Builder<RunCommandsBuilderOptions> {
  run(
    config: BuilderConfiguration<RunCommandsBuilderOptions>
  ): Observable<BuildEvent> {
    return Observable.create(observer => {
      // try {
      //   if (!config || !config.options || !config.options.command) {
      //     observer.error(
      //       'ERROR: Bad builder config for @nrwl/run-command - "command" option is required'
      //     );
      //     return;
      //   }
      //   const childProcess = exec(config.options.command, {
      //     cwd: process.cwd()
      //   });
      //   childProcess.stdout.on('data', data => process.stdout.write(data));
      //   childProcess.stderr.on('data', err => process.stderr.write(err));
      //   childProcess.on('close', code => {
      //     const success = code === 0;
      //     if (!success) {
      //       process.stderr.write(
      //         'Warning: @nrwl/run-command command exited with non-zero status code\n'
      //       );
      //     }
      //     observer.next({ success });
      //     observer.complete();
      //   });
      // } catch (err) {
      //   observer.error(
      //     `ERROR: Something went wrong in @nrwl/run-command - ${
      //       err.message
      //       }`
      //   );
      // }
    });
  }
}
