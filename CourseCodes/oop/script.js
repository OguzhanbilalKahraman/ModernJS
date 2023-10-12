// object orient programing 



// let question = {
//     quesString:"Hangisi javascript paket yönetim uygulamasıdır",
//     answerOptions:{
//         a:"Node.js",
//         b:"Typescript",
//         c:"Npm"
//     },
//     correctOpt:"c",
//     checkAnswer: function(answer){
//         return answer === this.correctOpt;
//     }
// }
// let question2 = {
//     quesString:"Hangisi .net paket yönetim uygulamasıdır",
//     answerOptions:{
//         a:"Node.js",
//         b:"Nuget",
//         c:"Npm"
//     },
//     correctOpt:"b",
//     checkAnswer: function(answer){
//         return answer === this.correctOpt;
//     }
// }




//class => ctor, object * 30
// ES5(ctor),ES6, ES7

function Question(quesString, answerOptions, correctOpt ) {

    this.quesString = quesString;
    this.answerOptions = answerOptions;
    this.correctOpt = correctOpt;

   console.log(this);

}


//more optimization

Question.prototype.checkAnswer = function(answer){
    return answer === this.correctOpt;
}


let question1 = new Question("Hangisi javascript paket yönetim uygulamasıdır", { a:"Node.js", b:"Typescript", c:"Npm"},"c");
let question2 = new Question("Hangisi .net paket yönetim uygulamasıdır", { a:"Nuget", b:"Typescript", c:"Npm"},"a");

let questions = [
        new Question("Hangisi .net paket yönetim uygulamasıdır", { a:"Nuget", b:"Typescript", c:"Npm"},"a"),
        new Question("Hangisi .net paket yönetim uygulamasıdır", { a:"Nuget", b:"Typescript", c:"Npm"},"a"),
        new Question("Hangisi .net paket yönetim uygulamasıdır", { a:"Nuget", b:"Typescript", c:"Npm"},"a"),
        new Question("Hangisi .net paket yönetim uygulamasıdır", { a:"Nuget", b:"Typescript", c:"Npm"},"a")

]


console.log(questions[0].quesString);


for(let s of questions){
    console.log(s.quesString);
}


// console.log(question1.quesString);
// console.log(question1.correctOpt);


// console.log(question2.quesString);
// console.log(question2.correctOpt);






