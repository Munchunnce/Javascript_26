const actors = [
    {
        name: 'Vimal',
        payment: 400,
    },
    {
        name: 'Shiwangi',
        payment: 300,
    },
    {
        name: 'Shikha',
        payment: 500,
    },
];

// for(let i = 0; i < actors.length; i++) {
//     actors[i].payment = actors[i].payment - 50;
// }

// actors.forEach((actor) => {
//     actor.payment = actor.payment - 30;
// })

// for of loop
for( let actor of actors) {
    actor.payment = actor.payment -20;
}
console.log(actors);