import { genFiles } from '../src/util/generateComponents';
import rimraf from 'rimraf';
import path from 'path';
import { fileExists } from '../src/util/utils';
import { generateSideBar } from '../src/components/SideBar';

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
    generateSideBar({
        config: mockConfig,
        cssPath: '.',
        name: 'TestSideBar',
        useTS: true,
        genFiles: mockGenFiles,
    });
    expect(mockGenFiles).toHaveBeenCalled();
});

it('generates tsx', () => {
    genFiles({
        component: 'string',
        config: mockConfig,
        name: 'TestSideBar',
        style: 'styles',
        useTS: true,
    });

    expect(fileExists(__dirname + '/temp/TestSideBar.tsx')).toBeTruthy();
});

it('generates styles', () => {
    genFiles({
        component: 'string',
        config: mockConfig,
        name: 'TestSideBar',
        style: 'styles',
        useTS: true,
    });
    expect(fileExists(__dirname + '/temp/TestSideBar.module.css')).toBeTruthy();
});

it('generates jsx', () => {
    genFiles({
        component: 'string',
        config: mockConfig,
        name: 'TestSideBar',
        style: 'styles',
        useTS: false,
    });
    expect(fileExists(__dirname + '/temp/TestSideBar.jsx')).toBeTruthy();
});
