function createGame(player1, hour, player2){
    return `
    <li>
    <img src="./assets/icol-${player1}.svg" alt="${player1}.svg">
    <strong>${hour}</strong>
    <img src="./assets/icol-${player2}.svg" alt="${player2}.svg">
    </li>  
      
    `
}

let delay=0;
function createCard(date, day, games) {
    delay=delay+0.7;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    
        <h2>${date} <span>${day}</span></h2>
    <ul>
        ${games}                             
    </ul>
        </div>
    `
}

document.querySelector('#cards').innerHTML = 

    createCard("24/11", 'quinta',
        createGame("brazil", "16:00", "serbia")
    ) +
    createCard("28/11","segunda",
        createGame("switzerland", "13:00","brazil") +
        createGame("portugal", "20:00","uruguay")
    )+
    createCard("02/12","segunda",
    createGame("cameroon", "13:00","brazil")
)

