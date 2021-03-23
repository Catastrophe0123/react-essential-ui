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
		name: 'TextNavBar',
		style: 'styles',
		useTS: true,
	});

	expect(fileExists(__dirname + '/temp/TextNavBar.tsx')).toBeTruthy();
});

it('generates styles', () => {
	genFiles({
		component: 'string',
		config: mockConfig,
		name: 'TextNavBar',
		style: 'styles',
		useTS: true,
	});
	expect(fileExists(__dirname + '/temp/TextNavBar.module.css')).toBeTruthy();
});

it('generates jsx', () => {
	genFiles({
		component: 'string',
		config: mockConfig,
		name: 'TextNavBar',
		style: 'styles',
		useTS: false,
	});
	expect(fileExists(__dirname + '/temp/TextNavBar.jsx')).toBeTruthy();
});

// import React from 'react';
// import { render } from '@testing-library/react';
// import NavBar from './temp/TextNavBar';

// it('generates correct react component', () => {
// 	const element = render(<NavBar />);

// 	// expect(element).toBeDefined();
// });
