import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/*reactDom.render takes 2 arguments: 
1. the element you want to create
2.  location where it will be created
*/
/*
ReactDOM.render(
	//3 args: tag name to create, properties, children
	React.createElement("h1", null, "Hello!"),
	//This element is located in the public folder in the index.html file
	document.getElementById("root")
);
*/

/* example 1
ReactDOM.render(
	React.createElement("h1", { style: { color: "blue" } }, "Hello!"),
	document.getElementById("root")
);
*/

/*
//example 2: Using JSX and Babel
ReactDOM.render(
	<ul>
		<li>Cat</li>
		<li>Dog</li>
		<li>Mouse</li>
	</ul>,
	document.getElementById("root")
   );
 */

//example 3: using jsx variables and objects
 let city = "Madrid"; //jsx variable

 let location = {
 	name: "Madrid",
 	country: "Spain"
 }; // JSX Object

 ReactDOM.render(
 	//<h1>Hello from {city}!</h1>,
 	<p>{location.name} is in {location.country}</p>,
 	document.getElementById("root")
 	);