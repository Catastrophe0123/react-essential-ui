#!/usr/bin/env node
import { Command } from 'commander';
import path from 'path';
import { Config, getConfig, validateConfig } from './src/util/config';
import { generateNavBar } from './src/components/NavBar';
import { generateSideBar } from './src/components/SideBar';
import { genFiles } from './src/util/generateComponents';
import chalk from 'chalk';

const PATH = process.cwd() + '/essential.config.json';
console.log(PATH);
const USE_TS = false;
let config: Config;
try {
    config = getConfig(PATH);
    config = validateConfig(config);
} catch (err) {
    // throw err;
    console.error(chalk.red(err.message));
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
        generateNavBar({
            cssPath: relativePathToCSS,
            name: options.name ? options.name : options.componentType,
            useTS: options.typescript,
            config,
            genFiles,
        });
        break;
    case 'SideBar':
        generateSideBar({
            cssPath: relativePathToCSS,
            name: options.name ? options.name : options.componentType,
            useTS: options.typescript,
            config,
            genFiles,
        });
        break;
    default:
        console.error(chalk.red('Invalid component type'));
        process.exit(1);
}
