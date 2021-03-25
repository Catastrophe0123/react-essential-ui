import { Config } from './config';
import fs from 'fs';
import chalk from 'chalk';

export interface GenerateComponent {
    useTS: boolean;
    cssPath: string;
    name: string;
    config: Config;
    genFiles: ({}: GenerateFiles) => void;
}

export interface GenerateFiles {
    useTS: boolean;
    component: string;
    style: string;
    name: string;
    config: Config;
}

export const genFiles = async ({
    useTS,
    component,
    style,
    name,
    config,
}: GenerateFiles) => {
    const { componentDir, stylesDir } = config;
    const extension = useTS ? 'ts' : 'js';
    fs.writeFileSync(`${componentDir}${name}.${extension}x`, component);

    fs.writeFileSync(`${stylesDir}${name}.module.css`, style);

    console.log(chalk.green('generated files'));
};
