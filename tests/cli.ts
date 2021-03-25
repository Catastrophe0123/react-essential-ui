import path from 'path';
import { exec, ExecException } from 'child_process';
import { getConfig, isConfig, validateConfig } from '../src/util/config';
import { fileExists } from '../src/util/utils';

interface CLIOutput {
    code: number;
    error: ExecException | null;
    stdout: string;
    stderr: string;
}

jest.setTimeout(30000);

function cli(args: Array<string>, cwd: string): Promise<CLIOutput> {
    return new Promise((resolve) => {
        exec(
            `ts-node ${path.resolve('./index.ts')} ${args.join(' ')}`,
            { cwd },
            (error, stdout, stderr) => {
                resolve({
                    code: error && error.code ? error.code : 0,
                    error,
                    stdout,
                    stderr,
                });
            }
        );
    });
}

it('should error if no config found', async () => {
    const PATH = '../essential.config.json';
    expect(() => getConfig(PATH)).toThrowError();
});

it('should return config', () => {
    const PATH = './essential.config.json';
    const conf = getConfig(PATH);
    expect(isConfig(conf)).toBe(true);
});

it('should error if component directory does not exists', () => {
    const mockConfig = { componentDir: 'qwesdq', stylesDir: './' };
    expect(() => validateConfig(mockConfig)).toThrowError();
});

it('should error if styles directory does not exists', () => {
    const mockConfig = { componentDir: './', stylesDir: 'asd' };
    expect(() => validateConfig(mockConfig)).toThrowError();
});

it('throws error if no component type is passed', async () => {
    let result = await cli(['-t'], '.');
    expect(result.code).toBe(1);
});

it('generates component correctly', async () => {
    let result = await cli(['-t', 'NavBar'], '.');
    expect(result.code).toBe(0);
    expect(fileExists(__dirname + '/temp/NavBar.jsx')).toBeTruthy();
    expect(fileExists(__dirname + '/temp/NavBar.module.css')).toBeTruthy();
});

it('generates component with given name', async () => {
    let result = await cli(['-t', 'NavBar', '-n', 'MyComponent'], '.');
    expect(result.code).toBe(0);
    expect(fileExists(__dirname + '/temp/MyComponent.jsx')).toBeTruthy();
    expect(fileExists(__dirname + '/temp/MyComponent.module.css')).toBeTruthy();
});

it('generates component with given name', async () => {
    let result = await cli(['-t', 'NavBar', '-n', 'MyComponent'], '.');
    expect(result.code).toBe(0);
    expect(fileExists(__dirname + '/temp/MyComponent.jsx')).toBeTruthy();
    expect(fileExists(__dirname + '/temp/MyComponent.module.css')).toBeTruthy();
});

it('errors when invalid component type is passed', async () => {
    let result = await cli(['-t', 'qwerty'], '.');
    expect(result.code).toBe(1);
});
