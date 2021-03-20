import { GenerateComponent, genFiles } from '../util/generateComponents';

export const generateNavBar = ({
	config,
	cssPath,
	name,
	useTS,
}: GenerateComponent) => {
	const componentTS = `
import React from 'react';
import classes from "${cssPath}/${name}.module.css";


export default function ${name}() {
    // TODO: add themeing

    return (
        <div className={classes.topnav}>
            <a
                className={[classes.active, classes.anchor].join(' ')}
                href='#home'>
                Home
            </a>
            <a className={classes.anchor} href='#news'>
                News
            </a>
            <a className={classes.anchor} href='#contact'>
                Contact
            </a>
            <a className={classes.anchor} href='#about'>
                About
            </a>
        </div>
    );
}
    `;

	const componentJS = `
import React from 'react';
import classes from "${cssPath}/${name}.module.css";

export default function ${name}() {
    // TODO: add themeing

    return (
        <div className={classes.topnav}>
            <a
                className={[classes.active, classes.anchor].join(' ')}
                href='#home'>
                Home
            </a>
            <a className={classes.anchor} href='#news'>
                News
            </a>
            <a className={classes.anchor} href='#contact'>
                Contact
            </a>
            <a className={classes.anchor} href='#about'>
                About
            </a>
        </div>
    );
}
    `;

	const style = `/* Add a black background color to the top navigation */
    .topnav {
        background-color: #333;
        overflow: hidden;
    }
    
    /* Style the links inside the navigation bar */
    .anchor {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }
    
    /* Change the color of links on hover */
    .anchor:hover {
        background-color: #ddd;
        color: black;
    }
    
    /* Add a color to the active/current link */
    .anchor.active {
        background-color: #4caf50;
        color: white;
    }
    `;

	genFiles({
		useTS,
		component: useTS ? componentTS : componentJS,
		style,
		config,
		name,
	});
};
