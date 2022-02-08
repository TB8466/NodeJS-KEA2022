function greetings(){
    console.log("Hello world");
}
greetings();

//anonymos function
const greetingsInVariable = function(){
    console.log("Hello world in a variable");
}
greetingsInVariable();

//Arrow function
const greetingsArrowFunction = () => {
    console.log("Hello world as an arrow function");
}
greetingsArrowFunction();

//callback functions
function doingSomething(anyFunctionReference, name){
    anyFunctionReference(name);
}

//running
const running = name => console.log(`${name} is running`);

//running("Your name");

doingSomething(running,"Your name");

//drinking
const drinking = name => console.log(`${name} is drinking water`);

doingSomething(drinking, "Your name");

//live coding
const liveCoding = name => console.log(`${name} is live coding`);

doingSomething(liveCoding, "Your name");