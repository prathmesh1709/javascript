//objects literal

const mySym = Symbol("myKey1")
const JsUser = {
    name : "Prathmesh",
    "full name" : "Prathmesh Gotiwale",
    email : "lucky@google.com",
    age : 18,
    location : "Bhopal"
    [mySym] = "myKey1"
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]); // so to access in objects we can use [" "] also 

// JsUser.email = "dfjn@hello.com"
// Object.freeze(JsUser)
// JsUser.email = "hello@world.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("We welcome you");
}
JsUser.greetingTwo = function(){
    console.log(`We welcome you, ${this.name}`);
}
// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
