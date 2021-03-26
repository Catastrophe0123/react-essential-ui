import { generateDropUp } from '../src/components/DropUp';
import { genFiles } from '../src/util/generateComponents';
import rimraf from 'rimraf';
import path from 'path';
import { fileExists } from '../src/util/utils';

const mockGenFiles = jest.fn();

const mockConfig = {
    componentDir: __dirname + '/temp/',
    stylesDir: __dirname + '/temp/',
};

beforeAll(() => {
    // delete all the files inside the temp folder
    rimraf.sync(path.normalize(__dirname + '/temp/*.{tsx,jsx,css}'), {
        glob: {},
    });
});
// "pre-commit": "yarn test && prettier --write . && git add -A ."

it('calls generate function', () => {
    generateDropUp({
        config: mockConfig,
        cssPath: '.',
        name: 'TestDropUp',
        useTS: true,
        genFiles: mockGenFiles,
    });
    expect(mockGenFiles).toHaveBeenCalled();
});

it('generates tsx', () => {
    genFiles({
        component: 'string',
        config: mockConfig,
        name: 'TestDropUp',
        style: 'styles',
        useTS: true,
    });

    expect(fileExists(__dirname + '/temp/TestDropUp.tsx')).toBeTruthy();
});

it('generates styles', () => {
    genFiles({
        component: 'string',
        config: mockConfig,
        name: 'TestDropUp',
        style: 'styles',
        useTS: true,
    });
    expect(fileExists(__dirname + '/temp/TestDropUp.module.css')).toBeTruthy();
});

it('generates jsx', () => {
    genFiles({
        component: 'string',
        config: mockConfig,
        name: 'TestDropUp',
        style: 'styles',
        useTS: false,
    });
    expect(fileExists(__dirname + '/temp/TestDropUp.jsx')).toBeTruthy();
});
