import { GenerateComponent } from '../util/generateComponents';

export const generateDropUp = ({
    config,
    cssPath,
    name,
    useTS,
    genFiles,
}: GenerateComponent) => {
    const componentTS = `
    import React from 'react';
import classes from "${cssPath}/${name}.module.css";
    
    export default function ${name}() {
        return (
            <div className={classes.dropup}>
                <button className={classes.dropbtn}>Dropup</button>
                <div className={classes.dropupContent}>
                    <a className={classes.anchor} href='#'>
                        Link 1
                    </a>
                    <a className={classes.anchor} href='#'>
                        Link 2
                    </a>
                    <a className={classes.anchor} href='#'>
                        Link 3
                    </a>
                </div>
            </div>
        );
    }
    
    `;

    const componentJS = `
    import React from 'react';
    import classes from "${cssPath}/${name}.module.css";
        
        export default function ${name}() {
            return (
                <div className={classes.dropup}>
                    <button className={classes.dropbtn}>Dropup</button>
                    <div className={classes.dropupContent}>
                        <a className={classes.anchor} href='#'>
                            Link 1
                        </a>
                        <a className={classes.anchor} href='#'>
                            Link 2
                        </a>
                        <a className={classes.anchor} href='#'>
                            Link 3
                        </a>
                    </div>
                </div>
            );
        }
    `;

    const style = `/* Dropup Button */
    .dropbtn {
        background-color: #3498db;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
    }
    
    /* The container <div> - needed to position the dropup content */
    .dropup {
        position: relative;
        display: inline-block;
    }
    
    /* Dropup content (Hidden by Default) */
    .dropupContent {
        display: none;
        position: absolute;
        bottom: 50px;
        background-color: #f1f1f1;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
    }
    
    .anchor {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
    
    /* Change color of dropup links on hover */
    .anchor:hover {
        background-color: #ddd;
    }
    
    /* Show the dropup menu on hover */
    .dropup:hover .dropupContent {
        display: block;
    }
    
    /* Change the background color of the dropup button when the dropup content is shown */
    .dropup:hover .dropbtn {
        background-color: #2980b9;
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
