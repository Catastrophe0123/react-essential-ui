export interface Config {
	componentDir: string;
	stylesDir: string;
}

export function isConfig(object: any): object is Config {
	return 'componentDir' in object && 'stylesDir' in object;
}
