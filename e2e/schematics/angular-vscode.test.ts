import { newProject, runCLI, readFile, runNgNew } from '../utils';

describe('Angular VSCode', () => {
  it('should add extensions to an Angular CLI Workspace', () => {
    runNgNew();
    runCLI('g angular-vscode/collection.json:ng-add');
    const extensions = JSON.parse(readFile('./.vscode/extensions.json'));
    expect(extensions).toEqual({
      recommendations: [
        'nrwl.angular-console',
        'angular.ng-template',
        'esbenp.prettier-vscode'
      ]
    });
  });

  it('should add extensions to an Nx Workspace', () => {
    newProject();
    runCLI('g angular-vscode/collection.json:ng-add');
    const extensions = JSON.parse(readFile('./.vscode/extensions.json'));
    expect(extensions).toEqual({
      recommendations: [
        'nrwl.angular-console',
        'angular.ng-template',
        'esbenp.prettier-vscode'
      ]
    });
  });
});
