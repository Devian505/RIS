<h1 align=center> RIS task1 </h1>
Downloading and installing NPM modules
<code> git clone https://github.com/Devian505/RIS-task1.git </code>
<code> cd task1 </code>
<code> npm i </code>
(optional) Installing the application as an NPM module
<code> [sudo] npm i -g ./ </code>
Usage example:
CLI tool accept 4 options:

-i, --input: an input file 
-o, --output: an output file
-a, --action: an action 1/2

Run 1st function with stdin to stdout:

$ node app.js -a sortme
Run 2nd function with stdin to stdout:

$ node app.js -a manh

For sortme function you have to pass strings array:
Example: Конь, еж -> еж, Конь

For manh function you have to pass two arrays with two integer inside
Example: 1 2 3 4 -> 4
