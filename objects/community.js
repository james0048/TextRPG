function Community(name, location, race, prosperity){
    this.type = "Community";
    this.name = name;
    this.location = location;
    this.race = race;
    this.prosperity = prosperity;   
}

Community.prototype = {
    blacksmith: null,
    generalStore: null,
    alchemist: null,
    healer: null,
    questGivers: null,

    Display: function(){
        return(this.type + " of " + this.name + ", Location: " + this.location + ", Race: " + this.race + ", Prosperity: " + this.prosperity);
    }

}

Community.prototype.toString = function(){
    return("c");
}

//#region Village 
function Village(name, location, race, prosperity){
    Community.call(this, name, location, race, prosperity);
    this.type = "Village";
    
}

Village.prototype = Object.create(Community.prototype, {
    blacksmith: { value: true},
    generalStore: { value: false},
    alchemist: { value: false},
    healer: { value: true},
    questGivers: { value: true}
});

Village.prototype.constructor = Village;
Village.prototype.toString = function(){
    return("v");
}

//#endregion

//#region Farm 
function Farm(name, location, race, prosperity){
    Community.call(this, name, location, race, prosperity);
    this.type = "Farm";
    
}

Farm.prototype = Object.create(Community.prototype, {
    blacksmith: { value: false},
    generalStore: { value: false},
    alchemist: { value: false},
    healer: { value: false},
    questGivers: { value: true}
});

Farm.prototype.constructor = Farm;
Farm.prototype.toString = function(){
    return("f");
}

//#endregion

//#region Town 
function Town(name, location, race, prosperity){
    Community.call(this, name, location, race, prosperity);
    this.type = "Town";
    
}

Town.prototype = Object.create(Community.prototype, {
    blacksmith: { value: true},
    generalStore: { value: true},
    alchemist: { value: true},
    healer: { value: true},
    questGivers: { value: true}
});

Town.prototype.constructor = Town;
Town.prototype.toString = function(){
    return("t");
}

//#endregion

//#region Capital 
function Capital(name, location, race, prosperity){
    Community.call(this, name, location, race, prosperity);
    this.type = "Capital";
    
}

Capital.prototype = Object.create(Community.prototype, {
    blacksmith: { value: true},
    generalStore: { value: true},
    alchemist: { value: true},
    healer: { value: true},
    questGivers: { value: true}
});

Capital.prototype.constructor = Capital;
Capital.prototype.toString = function(){
    return("c");
}

//#endregion
module.exports = {
    Community: Community,
    Village: Village,
    Farm: Farm,
    Town: Town,
    Capital: Capital
    
};
