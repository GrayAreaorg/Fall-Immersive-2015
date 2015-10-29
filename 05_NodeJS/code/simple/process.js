/**
 * process.js
 * Examples of the process object in nodeJS
 * Working with directories:
 *
 * cwd() : current directory
 *
 */

console.log("Current directory is: " + process.cwd());


/*
 * Host information
 *
 * arch : Process Architecture
 * platform : darwin (OS X), freebsd, linux, sunos or win32
 *
 */

console.log("Node is currently running on the " + process.platform
			+ " platform on the " + process.arch + " architecture.");

//******************************************************************************//