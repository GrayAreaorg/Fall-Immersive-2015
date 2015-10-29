var FONTS = require('cfonts');
 
var fonts = new FONTS({
	'text': process.argv[2],
    'font': '3d', //define the font face 
    'colors': '', //define all colors 
    'background': 'Black', //define the background color 
    'letterSpacing': 1, //define letter spacing 
    'space': true, //define if the output text should have empty lines on top and on the bottom 
    'maxLength': '10' //define how many character can be on one line 
});

