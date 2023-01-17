//database cretion
const name = require("readline-sync");
const userName=name.question("enter your name?");
let score=0;
let db={
    questionandoptions:[{
            question:`what is admin name`,
            options:{
                a:'pavan',
                b:'kalyan',
                c:'siddu',
                d:'none'
            },
            correctAnswer:'a',
        },
        {
            question:'charminar location',
            options:{
                a:'hyderabd',
                b:'bengaluru',
                c:'kolkata',
                d:'none'
            },
            correctAnswer:'a'
        },
        {
            question:'bayofbengal near to',
            options:{
                a:'hyderabd',
                b:'bengaluru',
                c:'kolkata',
                d:'none'
            },
            correctAnswer:'c'
        },
        {
            question:'telangana near to',
            options:{
                a:'kerala',
                b:'bengaluru',
                c:'kolkata',
                d:'delhi'
            },
            correctAnswer:'b'
        }
    ]
        
}

const dbforleaderboard={
    data:[
        {
            userName:'pavan',
            score:0
        },
        {
            userName:'kalyan',
            score:2
        },
        {
            userName:'siddu',
            score:3
        }
    ]
}

function checkAnswer(StudentAnswer,originalAnswer)
{
    if(originalAnswer==StudentAnswer){
         console.log(`correct answer\n`);
         score+=1;
    }
    else{
        console.log('wrong answer\n')
        console.log(`correct option is ${originalAnswer} \n`)
    }
}
function showleaderboard(dbforleaderboard){
    dbforleaderboard.data.push({userName:userName,
    score:score})
    let sortedorder=dbforleaderboard.data.sort((a,b)=>
        b.score-a.score 
        );
    console.log(`name - score\n`)
        for(let i of sortedorder){
            console.log(`${i.userName} - ${i.score}`)
        }
        const highscorer=sortedorder[0];
        console.log(`Highest scorer is : ${highscorer.userName}`)
    
}

function showdbqustnandoptions(db){
    for(let i=0;i<db.questionandoptions.length;i++){
        console.log(`\n${i+1}:${db.questionandoptions[i].question}\n` )
        for(let j in db.questionandoptions[i].options ){
            console.log(`${j} : ${db.questionandoptions[i].options[j]}\n`)
        }
        let StudentAnswer=name.question('Enter your Answer : ').toLowerCase();
        checkAnswer(StudentAnswer,db.questionandoptions[i].correctAnswer);
    }
}
showdbqustnandoptions(db)
console.log(`your score is : ${score}`);
showleaderboard(dbforleaderboard);