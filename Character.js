function Character (_name, _race, _gender){
    this.name = _name;
    this.race = _race;
    this.gender = _gender;

    var level = 1;
    var exp = 0;
    var attributes = {};
    InitAttributes(attributes);
    var skills = {};
    InitSkills(skills);
    
    
}

function InitAttributes (_attributes){
    _attributes.strength = 30;
    _attributes.intelligence = 30;
    _attributes.willpower = 30;
    _attributes.endurance = 30;
    _attributes.agility = 30;
    _attributes.personality = 30;
    _attributes.luck = 30;
  }

function InitSkills (_skills){
    _skills.bluntWeapon = 30;
    _skills.shortBlade = 30;
    _skills.longBlade = 30;
    _skills.ranged = 30;
    _skills.throwing = 30;
    _skills.alchemy = 30;
    _skills. merchantile = 30;
    _skills.persuasion = 30;
    _skills.stealing = 30;
    _skills.destruction = 30;
    _skills.healing = 30;
    _skills.alteration = 30;
}

module.exports = Character;