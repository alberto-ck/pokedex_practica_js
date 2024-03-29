//Define container of container
const contenedor = document.getElementById('container');
const contwarn = document.getElementById('div-warn');
const contData = document.getElementById('cont-data');
const contMov = document.getElementById('cont-mov');
//get pokemons
const getPokeList = () => {
    let maxi = 10;
    for (let i = maxi - 1; i => 0; i--) {
        const elediv = document.createElement('Button');
        elediv.classList.add('btn-poke');
        elediv.onclick = function () { alert("hola"); }
        elediv.id = i.toString();
        contenedor.prepend(elediv);
        const divpo = document.getElementById(i);
        const texth3 = document.createElement('h3');
        texth3.classList.add('h3-style');
        texth3.id = 'h3-' + i.toString();
        divpo.prepend(texth3);

        if (i == 0) {
            break;
        }
    }

    const url = `https://pokeapi.co/api/v2/pokemon?limit=${maxi}&offset=0`;
    fetch(url).then(res => res.json()).then(res => {
        const pokemons = res.results;
        console.log(pokemons);
        for (let i = 0; i < pokemons.length; i++) {
            const element = pokemons[i];
            const h3cont = document.getElementById('h3-' + i.toString());
            h3cont.textContent = (i + 1).toString() + " - " + element.name;
        }
    })
};
//getPokeList();

//Make container
const adddiv = () => {
    const pokemons = getPokeList();

    console.log(pokemons);

    for (let i = 0; i < 1; i++) {
        const elediv = document.createElement('div');
        elediv.classList.add('div-poke');
        elediv.id = i.toString();
        contenedor.prepend(elediv);
        const divpo = document.getElementById(i);
        const texth3 = document.createElement('h3');
        texth3.DOCUMENT_TYPE_NODE.add('button');
        texth3.classList.add('h3-style')
        texth3.id = 'h3-' + i.toString();
        texth3.textContent = "pokename";
        divpo.prepend(texth3);
    }
};
const resetHp = () => {
    const pokehp = document.getElementById("hpval");
    const chp = document.getElementById("hp");
    chp.textContent = "HP: ";
    pokehp.value = 0;
}
const resetAtk = () => {
    const pokeattack = document.getElementById("attackval");
    const attackv = document.getElementById("attack");
    attackv.textContent = "ATK: ";
    pokeattack.value = 0;
}
const resetDef = () => {
    const pokedef = document.getElementById("defval");
    const def = document.getElementById("def");
    def.textContent = "DEF: ";
    pokedef.value = 0;
}

const resetName = () => {
    const pokeNa = document.getElementById("namepokem");
    const tagname1 = document.getElementById("title_info");
    const tagname2 = document.getElementById("mov_info");
    pokeNa.textContent = "------";
    tagname1.textContent = "POKEMON INFO";
    tagname2.textContent = "POKEMON MOVES";
}

//Get pokemon
const fetchPokemon = () => {
    const pokeName = document.getElementById("searchPoke");
    let pokeInput = pokeName.value.toLowerCase();

    //Reset values when the GET is new
    resetName();
    resetHp();
    resetAtk();

    if (pokeInput.length === 0) {
        showWarnnin();
    } else {
        h3w = document.getElementById("h3warn");
        if (!h3w) {
            getInfoPoke(pokeInput);
        } else {
            resetError();
            getInfoPoke(pokeInput);
        }
    }

};

//Get Image Pokemon
const pokeImage = (url) => {
    const pokeImg = document.getElementById("poke-img");
    if (url != null) {
        pokeImg.src = url;
    } else {
        pokeImg.src = "img/icon_pokeball.png"
        pokeImg.classList.add('def-img')
    }

};

//Get Name Pokemon
const namePokemn = (url, id) => {
    const pokeNa = document.getElementById("namepokem");
    const tagname1 = document.getElementById("title_info");
    const tagname2 = document.getElementById("mov_info");
    pokeNa.textContent = id + " " + url;
    tagname1.textContent = url.toUpperCase() + " INFO";
    tagname2.textContent = url.toUpperCase() + " MOVES";
};

//get Type Pokemon
const typePokemn = (url) => {

    const pokeNa = document.getElementById("pktype");
    let tipos = "";
    if (url.length != 1) {
        for (let i = 0; i < url.length; i++) {
            const element = url[i].type.name;
            tipos = tipos + element + ", ";

            console.log(tipos);
        }
        const typos = tipos.substring(0, tipos.length - 2);
        pokeNa.textContent = "TYPE: " + typos;
    } else {
        tipos = url[0].type.name;
        pokeNa.textContent = "TYPE: " + tipos;
    }

};
//get Hp
const getHp = (url) => {
    const pokehp = document.getElementById("hpval");
    const chp = document.getElementById("hp");
    let hpvalue = url[0].base_stat;
    chp.textContent = "HP: " + hpvalue + " ";
    pokehp.value = hpvalue;
};

//get Attack
const getAttack = (url) => {
    const pokeattack = document.getElementById("attackval");
    const attackv = document.getElementById("attack");
    let pokeatt = url[1].base_stat;
    attackv.textContent = "ATK: " + pokeatt + " ";
    pokeattack.value = pokeatt;
};

//get Defense
const getDefense = (url) => {
    const pokedef = document.getElementById("defval");
    const def = document.getElementById("def");
    let defval = url[2].base_stat;
    def.textContent = "DEF: " + defval + " ";
    pokedef.value = defval;
};
//get SpAttack
const getSpAttack = (url) => {
    const spatkv = document.getElementById("speattv");
    const spatk = document.getElementById("spatt");
    let spatkval = url[3].base_stat;
    spatk.textContent = "SP.ATK: " + spatkval + " ";
    spatkv.value = spatkval;
};
//get SpDefence
const getSpDefence = (url) => {
    const spdefv = document.getElementById("spdefv");
    const spdef = document.getElementById("spdef");
    let spdefval = url[4].base_stat;
    spdef.textContent = "SP.DEF: " + spdefval + " ";
    spdefv.value = spdefval;
};

//get Speed
const getSpeed = (url) => {
    const speedp = document.getElementById("speedv");
    const speedt = document.getElementById("speed");
    let speedval = url[5].base_stat;
    speedt.textContent = "SPEED: " + speedval + " ";
    speedp.value = speedval;
};
//-----
//get mov
const getMovList = (url) => {
    let maxi = url.length;

    for (let i = maxi - 1; i => 0; i--) {
        const divmv = document.createElement('div');
        divmv.classList.add('item-mv');
        divmv.id = "mv-" + i.toString();
        contMov.prepend(divmv);

        const divmvc = document.getElementById("mv-" + i.toString());
        const textp = document.createElement('p');
        textp.classList.add('p1-style');
        textp.id = 'p1-' + i.toString();
        textp.textContent = url[i].move.name;
        divmvc.prepend(textp);
        if (i == 0) {
            break;
        }
    }
};
//---
const selectTarjet = () => {
    console.log('click');
};

const getInfoPoke = (pokemonid) => {
    let idpoke = pokemonid;
    const url = `https://pokeapi.co/api/v2/pokemon/${idpoke}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            showError();
            console.log(res);
            pokeImage("img/sad-pikachu.gif");
        } else {
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);

        let poke_Name = data.name;
        let poke_id = data.id;
        namePokemn(poke_Name, poke_id);

        let tipePoke = data.types;
        typePokemn(tipePoke);

        let pokestats = data.stats;
        getHp(pokestats);

        getAttack(pokestats);

        getDefense(pokestats);

        getSpAttack(pokestats);

        getSpDefence(pokestats);

        getSpeed(pokestats);

        let movespkm = data.moves;
        getMovList(movespkm);
    })
}
const showWarnnin = () =>{
    const h3warn = document.createElement('h3');
    h3warn.classList.add('h3-warni');
    h3warn.id = "h3warn";
    h3warn.textContent = "!Inserte un dato¡";
    contwarn.prepend(h3warn);
}
const showError = () => {
    const h3warn = document.createElement('h3');
    h3warn.classList.add('h3-warni');
    h3warn.id = "h3warn";
    h3warn.textContent = "!No se encontro datos¡";
    contwarn.prepend(h3warn);
}
const resetError = () => {
    h3w = document.getElementById('h3warn');
    elemnto = h3w.parentNode;
    elemnto.removeChild(h3w);
}