
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./images/pokeSad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let hp= data.stats[0].base_stat; 
            let attack= data.stats[1].base_stat;
            let defense = data.stats[2].base_stat;
            let specialAttack = data.stats[3].base_stat;
            let specialDefense = data.stats[4].base_stat;
            let speed = data.stats[5].base_stat;
            let name = data.forms[0].name;
            let typ = data.types;
            let identifi = data.id;
            console.log(pokeImg);
            pokeImage(pokeImg);
            console.log(hp);
            pokehp(hp);
            console.log(attack);
            pokeattack(attack);
            console.log(defense);
            pokedefense(defense);
            console.log(specialAttack);
            pokespecialAttack(specialAttack);
            console.log(specialDefense);
            pokespecialDefense(specialDefense);
            console.log(speed);
            pokespeed(speed);
            console.log(name);
            pokename(name);
            console.log(typ);
            if (data.types.length == 2){
                for(i = 0; i < data.types.length; i++){
                
                    let type = (`${data.types[i].type.name}`);
                    console.log(type);
                    poketype(type);
                    let type1 = data.types[0].type.name;
                    console.log(type1); 
                    poketype1('Type: ' + `${type1}`);
                    
                    
                    
    
                }
                

                
            }
            else{
                let type = data.types[0].type.name
                console.log(type);
                poketype(type);
                poketype1("");
                
            }
            if (data.moves.length >= 2) {
                let move1 = data.moves[0].move.name;
                let move2 = data.moves[1].move.name;
                let move3 = data.moves[2].move.name;
                let move4 = data.moves[3].move.name;
                let move5 = data.moves[4].move.name;

                console.log(move1);
                pokemoves1('Move: ' + `${move1}`);
                console.log(move2);
                pokemoves2('Move: ' + `${move2}`);
                console.log(move3);
                pokemoves3('Move: ' + `${move3}`);
                console.log(move4);
                pokemoves4('Move: ' + `${move4}`);
                console.log(move5);
                pokemoves5('Move: ' + `${move5}`);
            }
            else{
                let move1 = data.moves[0].move.name;
                console.log(move1);
                pokemoves1('Move: ' + `${move1}`);
                pokemoves2('');
                pokemoves3('');
                pokemoves4('');
                pokemoves5('');
            }
            console.log(identifi);
            pokeid(identifi);
            

        }
    })
}


const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

const pokehp = (url) => {
    const hp = document.getElementById("hp");
    hp.innerHTML = ('Hp: ' +`${url}`);
}

const pokeattack = (url) => {
    const attack = document.getElementById("attack");
    attack.innerHTML = ('Attack: '+`${url}`);
}

const pokedefense = (url) => {
    const defense = document.getElementById("defense");
    defense.innerHTML = ('Defense: '+`${url}`);
}

const pokespecialAttack = (url) => {
    const specialAttack = document.getElementById("specialAttack");
    specialAttack.innerHTML = ('Special Attack: '+`${url}`);
}

const pokespecialDefense = (url) => {
    const specialDefense = document.getElementById("specialDefense");
    specialDefense.innerHTML = ('Special Defense: '+`${url}`);
}

const pokespeed = (url) => {
    const speed = document.getElementById("speed");
    speed.innerHTML = ('Speed: '+`${url}`);
}

const pokename = (url) => {
    const name = document.getElementById("name");
    name.innerHTML = ('Name: '+`${url}`)
}

const poketype= (url) => {
    const type = document.getElementById("type");
    type.innerHTML = ('Type: '+`${url}`);
}

const poketype1= (url) => {
    const type1 = document.getElementById("type1");
    type1.innerHTML = (`${url}`);
}

const pokemoves1 = (url) =>{
    const move1 = document.getElementById("move1");
    move1.innerHTML = (`${url}`);
}

const pokemoves2 = (url) =>{
    const move2 = document.getElementById("move2");
    move2.innerHTML = (`${url}`);
}

const pokemoves3 = (url) =>{
    const move3 = document.getElementById("move3");
    move3.innerHTML = (`${url}`);
}

const pokemoves4 = (url) =>{
    const move4 = document.getElementById("move4");
    move4.innerHTML = (`${url}`);
}

const pokemoves5 = (url) =>{
    const move5 = document.getElementById("move5");
    move5.innerHTML = (`${url}`);
}

const pokeid = (url) =>{
    const identifi = document.getElementById("identifi");
    identifi.innerHTML = ('Id: ' +`${url}`);
}

