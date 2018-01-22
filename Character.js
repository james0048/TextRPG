function Character (_name, _race, _gender){
    this.name = _name;
    this.race = _race;
    this.gender = _gender;

    this.level = 1;
    this.exp = 0;

    this.attributes = new attributes();
    this.skills = new skills();
    /*
    //this.attributes = new Map();
    this.attributes = { strength: 30,
                        intelligence: 30,
                        willpower: 30,
                        endurance: 30,
                        agility: 30,
                        personality: 30,
                        luck: 30
                        };
    //this.skills = new Map();
    this.skills = { bluntWeapon: 30,
                    shortBlade: 30,
                    longBlade: 30,
                    ranged: 30,
                    throwing: 30,
                    alchemy: 30,
                    merchantile: 30,
                    persuasion: 30,
                    stealing: 30,
                    destruction: 30,
                    healing: 30,
                    alteration: 30    
                    };
                    */
}

function attributes () {
    this.strength = 30;
    this.intelligence = 30;
    this.willpower = 30;
    this.endurance = 30;
    this.agility = 30;
    this.personality = 30;
    this.luck = 30;
}

function skills (){
    this.bluntWeapon = 30;
    this.shortBlade = 30;
    this.longBlade = 30;
    this.ranged = 30;
    this.throwing = 30;
    this.alchemy = 30;
    this.merchantile = 30;
    this.persuasion = 30;
    this.stealing = 30;
    this.destruction = 30;
    this.healing = 30;
    this.alteration = 30;
}

module.exports = Character;