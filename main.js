function creategame(player1, hour, player2 ){
    return `
        <li>
            <img src="assets/bandeiras/icon=${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="assets/bandeiras/icon=${player2}.svg" alt="Bandeira do ${player2}">
        </li>`
}



function createcard(date, day, games){
    return `
    <div class="card"> 
        <h2>${date} <span>${day}</span></h2>

        <ul>
            ${games}
        </ul>
</div>`
}

document.querySelector('#cards').innerHTML = 
        createcard('20/11', 'domingo',    
        creategame("qatar", "13:00", "ecuador")) +
        
        createcard('21/11', 'segunda',      
        creategame('england', '10:00', 'iran') +
        creategame('senegal', '13:00', 'netherlands') +
        creategame('united states', '16:00', 'wales')) +

        createcard('22/11', 'terça',
        creategame("argentina", '07:00', "saudi arabia") + 
        creategame("denmark",'10:00',"tunisia") + 
        creategame("mexico",'13:00',"poland") + 
        creategame("france",'16:00',"australia")) + 
        
        createcard('23/11', 'quarta',
        creategame("morocco", '07:00', "croatia") + 
        creategame("germany",'10:00',"japan") + 
        creategame("spain",'13:00',"costa rica") + 
        creategame("belgium",'16:00',"canada")) + 
        
        createcard('24/11', 'quinta',
        creategame("switzerland", '07:00', "cameroon") + 
        creategame("uruguay",'10:00',"south korea") + 
        creategame("portugal",'13:00',"ghana") + 
        creategame("brazil",'16:00',"serbia")) +

        createcard('25/11', 'sexta',
        creategame("wales", '07:00', "iran") + 
        creategame("qatar",'10:00',"senegal") + 
        creategame("netherlands",'13:00',"ecuador") + 
        creategame("england",'16:00',"united states")) + 

        createcard('26/11', 'sabado',
        creategame("tunisia", '07:00', "australia") + 
        creategame("poland",'10:00',"saudi arabia") + 
        creategame("france",'13:00',"denmark") + 
        creategame("argentina",'16:00',"mexico")) +
        
        createcard('27/11', 'domingo',
        creategame("japan", '07:00', "costa rica") + 
        creategame("belgium",'10:00',"morocco") + 
        creategame("croatia",'13:00',"canada") + 
        creategame("spain",'16:00',"germany")) +
        
        createcard('28/11', 'segunda',
        creategame("cameroon", '07:00', "serbia") + 
        creategame("south korea",'10:00',"ghana") + 
        creategame("brazil",'13:00',"switzerland") + 
        creategame("portugal",'16:00',"uruguay")) +
        
        createcard('29/11', 'terça',
        creategame("ecuador", '07:00', "senegal") + 
        creategame("netherlands",'10:00',"qatar") + 
        creategame("iran",'13:00',"united states") + 
        creategame("wales",'16:00',"england")) + 
        
        createcard('30/11', 'quarta',
        creategame("tunisia", '07:00', "france") + 
        creategame("australia",'10:00',"denmark") + 
        creategame("poland",'13:00',"argentina") + 
        creategame("saudi arabia",'1:00',"mexico")) +

        createcard('1/12', 'quinta',
        creategame("croatia", '07:00', "belgium") + 
        creategame("canada",'10:00',"morocco") + 
        creategame("japan",'13:00',"spain") + 
        creategame("costa rica",'16:00',"germany")) +
        
        createcard('2/12', 'sexta',
        creategame("south korea", '07:00', "portugal") + 
        creategame("ghana",'10:00',"uruguay") + 
        creategame("serbia",'13:00',"switzerland") + 
        creategame("cameroon",'16:00',"brazil"));


document.getElementById('verde').addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","green")
});

document.getElementById('azul').addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","blue")
});

document.getElementById('amarelo').addEventListener("click", function(){
    document.querySelector("body").setAttribute("class","yellow")
});