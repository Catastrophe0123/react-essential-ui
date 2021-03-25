import fs from 'fs';
import chalk from 'chalk';

export interface Config {
    componentDir: string;
    stylesDir: string;
}

export function isConfig(object: any): object is Config {
    return 'componentDir' in object && 'stylesDir' in object;
}

export function getConfig(PATH: string): Config {
    if (!fs.existsSync(PATH)) {
        //file doesnt exist
        console.error(
            chalk.red(
                'No essential.config.json found. Do you want to create one? (Y/n)' // TODO: have to create empty json file
            )
        );
        throw new Error('No essential.config.json found');
        // process.exit(1);
    }

    const file = fs.readFileSync(PATH, 'utf-8');
    const config = JSON.parse(file);

    if (!isConfig(config)) {
        console.error(
            chalk.red(
                'Config is wrong. JSON file should contain the following keys: componentDir, stylesDir'
            )
        );
        // process.exit(1);
    }

    return config;
}

export function validateConfig(config: Config) {
    if (fs.existsSync(config.componentDir) && fs.existsSync(config.stylesDir)) {
        return config;
    } else {
        throw new Error('Invalid Config. Directory does not exist');
    }
}
