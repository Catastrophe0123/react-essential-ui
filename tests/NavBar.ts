import { generateNavBar } from '../src/components/NavBar';
import { genFiles } from '../src/util/generateComponents';
import rimraf from 'rimraf';
import path from 'path';
import fs from 'fs';

const mockGenFiles = jest.fn();

const mockConfig = {
    componentDir: __dirname + '/temp/',
    stylesDir: __dirname + '/temp/',
};

beforeAll(() => {
    // delete all the files inside the temp folder
    rimraf.sync(path.normalize(__dirname + '/temp/*'), { glob: {} });
});
// "pre-commit": "yarn test && prettier --write . && git add -A ."

it('calls generate function', () => {
    generateNavBar({
        config: mockConfig,
        cssPath: '.',
        name: 'TestNavBar',
        useTS: true,
        genFiles: mockGenFiles,
    });
    expect(mockGenFiles).toHaveBeenCalled();
});

const fileExists = (path: string): boolean => {
    return fs.existsSync(path);
};

it('generates tsx', () => {
    genFiles({
        component: 'string',
        config: mockConfig,
        name: 'TestNavBar',
        style: 'styles',
        useTS: true,
    });

    expect(fileExists(__dirname + '/temp/TestNavBar.tsx')).toBeTruthy();
});

it('generates styles', () => {
    genFiles({
        component: 'string',
        config: mockConfig,
        name: 'TestNavBar',
        style: 'styles',
        useTS: true,
    });
    expect(fileExists(__dirname + '/temp/TestNavBar.module.css')).toBeTruthy();
});

it('generates jsx', () => {
    genFiles({
        component: 'string',
        config: mockConfig,
        name: 'TestNavBar',
        style: 'styles',
        useTS: false,
    });
    expect(fileExists(__dirname + '/temp/TestNavBar.jsx')).toBeTruthy();
});

// import React from 'react';
// import { render } from '@testing-library/react';
// // @ts-ignore
// // import NavBar from './temp/testNavBar';

// describe('react tests', () => {
//     beforeAll(() => {
//         rimraf.sync(path.normalize(__dirname + '/temp/*'), { glob: {} });
//         generateNavBar({
//             config: mockConfig,
//             cssPath: '.',
//             name: 'TestNavBar',
//             useTS: true,
//             genFiles: genFiles,
//         });
//         // genFiles({
//         //     component: 'string',
//         //     config: mockConfig,
//         //     name: 'testNavBar',
//         //     style: 'styles',
//         //     useTS: false,
//         // });
//         console.log('here : ', fileExists(__dirname + '/temp/TestNavBar.tsx'));
//         expect(fileExists(__dirname + '/temp/TestNavBar.tsx')).toBeTruthy();
//     });
//     it('generates correct react component', async () => {
//         if (fileExists(__dirname + '/temp/TestNavBar.tsx')) {
//             console.log('here1?');
//             // @ts-ignore
//             // const x = await import('./temp/TestNavBar');
//             const x = await import('./temp/TestNavBar');
//             console.log('waterbording : ' + x);
//         }

//         // const element = render(React.createElement(NavBar));
//         // console.log(element);
//         // expect(element).toBeDefined();
//     });
// });
