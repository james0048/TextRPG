function Character (_name, _race, _gender){
    this.name = _name;
    this.race = _race;
    this.gender = _gender;

    var level = 1;
    var exp = 0;
    var attributes = {};
    InitAttributes();
    var skills = {};
    InitSkills();
    
    
}

function InitAttributes (){
    attributes.strength = 30;
    attributes.intelligence = 30;
    attributes.willpower = 30;
    attributes.endurance = 30;
    attributes.agility = 30;
    attributes.personality = 30;
    attributes.luck = 30;
}

function InitSkills (){
    skills.bluntWeapon = 30;
    skills.shortBlade = 30;
    skills.longBlade = 30;
    skills.ranged = 30;
    skills.throwing = 30;
    skills.alchemy = 30;
    skills. merchantile = 30;
    skills.persuasion = 30;
    skills.stealing = 30;
    skills.destruction = 30;
    skills.healing = 30;
    skills.alteration = 30;
}