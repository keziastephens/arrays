console.log('i am linked');

// objects arrays

let flatmates = [
    {
        id: 101,
        name: 'kezia',
        info: 'will kill you',
        photo: './img/kezia.png',
        type: 'psychic'
    },
    {
        id: 004,
        name: 'holly',
        info: 'will step on you',
        photo: './img/holly.png',
        type: 'fire'
    },
    {
        id: 001,
        name: 'liam',
        info: 'will fix the shower door',
        photo: './img/liam.png',
        type: 'ghost'
    },
    {
        id: 044,
        name: 'aj',
        info: 'will probably cry',
        photo: './img/aj.png',
        type: 'grass'
    },
    {
        id: 444,
        name: 'harry',
        info: 'will make you a cup of tea',
        photo: './img/harry.png',
        type: 'earth'
    },
];


function results(){
    for(let i = 0; i < flatmates.length; i++){
        console.log(flatmates[i].name);

        // append() - is a jquery function
        // append allows us to insert content to the end of an already existing element
        // we need to put our code inside the ()

        $("#flatmate-info").append(
            // start of backticks
            `
            <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${flatmates[i].photo}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${flatmates[i].name}</h5>
                <p class="card-text">${flatmates[i].info}</p>

                <button type="button" class="btn btn-primary learnMore" data-toggle="modal" data-target="#exampleModalCenter">
                learn more
                </button>

            </div>
            </div>
           
           `
           // end of backticks       
        );


    }
};

results();

$(".learnMore").click(function(){
   console.log("clicked"); 
});

/* function learnMore(){
    let i = 0;
    for(i = 0; i < flatmates.length; i++){
        if(this.id === flatmates[i].id){
            console.log(flatmates[i].name);
        }
    }
}; */

let example = 234;
let exampleTwo = parseInt(734332);
console.log(typeof example);



learnMore();

console.log(flatmates);