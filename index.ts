#!/usr/bin/env node
import fs from 'fs';
import chalk from 'chalk';
import { Command } from 'commander';
import path from 'path';
import { Config, isConfig } from './src/util/config';
import { generateNavBar } from './src/components/NavBar';

// const PATH = __dirname + '/essential.config.json';
const PATH = process.cwd() + '/essential.config.json';
console.log(PATH);
// console.log(process.cwd());
const USE_TS = false;

if (!fs.existsSync(PATH)) {
	//file doesnt exist
	console.log(
		chalk.red(
			'No essential.config.json found. Do you want to create one? (Y/n)' // TODO: have to create empty json file
		)
	);
	process.exit(1);
}

const file = fs.readFileSync(PATH, 'utf-8');
const config = JSON.parse(file);

if (!isConfig(config)) {
	console.log(
		chalk.red(
			'Config is wrong. JSON file should contain the following keys: componentDir, stylesDir'
		)
	);
	process.exit(1);
}

// config is safe now
console.log(config);

const { componentDir, stylesDir } = config;
console.log(path.relative(componentDir, stylesDir));

const relativePathToCSS = path.relative(componentDir, stylesDir);

const program = new Command();

program
	.option('-n, --name <type>', 'name of the component')
	.requiredOption(
		'-t, --component-type <type>',
		'Type of component to generate'
	)
	.option('-ts, --typescript', 'Use Typescript', false);

program.parse(process.argv);

const options = program.opts();

console.log(options);

switch (options.componentType) {
	case 'NavBar':
		// generateNavBar(options.typescript, relativePathToCSS, options.name);
		generateNavBar({
			cssPath: relativePathToCSS,
			name: options.name ? options.name : options.componentType,
			useTS: options.typescript,
			config,
		});
		break;
}

// if (options.debug) console.log(options);
// console.log('pizza details:');
// if (options.small) console.log('- small pizza size');
// if (options.pizzaType) console.log(`- ${options.pizzaType}`);
