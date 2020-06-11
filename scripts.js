console.log('muuu');
let colors = ["blue", "green", "purple", "orange"];
let post = {
    title: "My Post",
    description: "My First post, awesome",
    likeCount: 12,
    comments: ["cool!", "nice job!"]
};

let posts = [{
    title: "First Post",
    likeCount: 12
}, {
    title: "Second Post",
    likeCount: 222
}]


console.log(colors);
console.log(post);

let age = 33;

let myFunction = x => {
    console.log(x);
}

let greeter = name => {
    console.log(`Hello, ${name}!`)
}

greeter("Feco");
greeter("Feco2");
greeter("Feco3");
greeter("Feco4");


if (age > 18) {
    console.log("You're an adult!");
} else {
    console.log("You're a kid!")
}

for (let i = 0; i < 10; i++) {
    console.log(i);    
}

colors.forEach( color => console.log(color))
console.log("END END END END END");