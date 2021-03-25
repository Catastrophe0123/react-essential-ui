import fs from 'fs';

export const fileExists = (path: string): boolean => {
    return fs.existsSync(path);
};
