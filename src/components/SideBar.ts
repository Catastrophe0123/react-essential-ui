import { GenerateComponent } from '../util/generateComponents';

export const generateSideBar = ({
    config,
    cssPath,
    name,
    useTS,
    genFiles,
}: GenerateComponent) => {
    const componentTS = `
    import React, { useState } from 'react';
import classes from "${cssPath}/${name}.module.css";


type Props = {
	onclick: () => void;
};

export function BackDrop({ onclick }: Props) {
	return <div onClick={onclick} className={classes.BackDrop}></div>;
}

export default function ${name}() {
	const [isOpen, isOpenHandler] = useState<boolean>(false);

	const onCloseHandler = () => {
		isOpenHandler(false);
	};

	const onOpenHandler = () => {
		isOpenHandler(true);
	};

	return (
		<div>
			<div
				id='mySidenav'
				style={{ width: isOpen ? '270px' : '0px' }}
				className={classes.sidenav}>
				<a className={classes.closebtn} onClick={onCloseHandler}>
					&times;
				</a>
				<a className={classes.anchor} href='#'>
					About
				</a>
				<a className={classes.anchor} href='#'>
					Services
				</a>
				<a className={classes.anchor} href='#'>
					Clients
				</a>
				<a className={classes.anchor} href='#'>
					Contact
				</a>
			</div>

			<span onClick={onOpenHandler}>open</span>
			{isOpen && <BackDrop onclick={onCloseHandler} />}
		</div>
	);
}

    `;

    const componentJS = `
import classes from "${cssPath}/${name}.module.css";
import React, { useState } from 'react';



export function BackDrop({ onclick }) {
	return <div onClick={onclick} className={classes.BackDrop}></div>;
}

export default function SideBar() {
	const [isOpen, isOpenHandler] = useState(false);

	const onCloseHandler = () => {
		isOpenHandler(false);
	};

	const onOpenHandler = () => {
		isOpenHandler(true);
	};

	return (
		<div>
			<div
				id='mySidenav'
				style={{ width: isOpen ? '270px' : '0px' }}
				className={classes.sidenav}>
				<a className={classes.closebtn} onClick={onCloseHandler}>
					&times;
				</a>
				<a className={classes.anchor} href='#'>
					About
				</a>
				<a className={classes.anchor} href='#'>
					Services
				</a>
				<a className={classes.anchor} href='#'>
					Clients
				</a>
				<a className={classes.anchor} href='#'>
					Contact
				</a>
			</div>

			<span onClick={onOpenHandler}>open</span>
			{isOpen && <BackDrop onclick={onCloseHandler} />}
		</div>
	);
}

    `;

    const style = `/* The side navigation menu */
    .sidenav {
        height: 100%; /* 100% Full-height */
        width: 0; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 1;
        top: 0; /* Stay at the top */
        left: 0;
        background-color: #111; /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    }
    
    /* The navigation menu links */
    .anchor {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }
    
    /* When you mouse over the navigation links, change their color */
    .anchor:hover {
        color: #f1f1f1;
    }
    
    /* Position and style the close button (top right corner) */
    .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }
    
    /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
    .main {
        transition: margin-left 0.5s;
        padding: 20px;
    }
    
    /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
    @media screen and (max-height: 450px) {
        .sidenav {
            padding-top: 15px;
        }
        .anchor {
            font-size: 18px;
        }
    }
    
    .BackDrop {
        position: fixed;
        width: 100%;
        height: 100%;
        /* z-index: 100; */
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
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
