let user={
    name:"kavi",
    "date of birth" : "26-3-26",
}

let key=prompt("give the property name","name");

alert(user[key]);
console.log(user.name);
console.log(user["date of birth"]);

let property=prompt("give the property name");
let answer=prompt("give your property value");

console.log("answer",answer);

user[property]=answer ?? `user not willing to provide the detail about ${property}`;
alert(user[property]);

user["country"]="india";

console.log(user);

function createObject(name,age){
    return {name,age};
}

let profile=createObject("kavi",20);
for (let key in profile){
    console.log("key",key);
    console.log("value",profile[key]);
}