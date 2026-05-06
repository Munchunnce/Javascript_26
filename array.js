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

actors.forEach((actor) => {
    actor.payment = actor.payment - 30;
})
console.log(actors);