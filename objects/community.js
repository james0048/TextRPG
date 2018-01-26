function Community(name, location, race, prosperity){
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
        return(name + " Location: " + location + "Race: " + race + " Prosperity: " + prosperity);
    }

}

function Village(name, location, race, prosperity){
    this.prototype = Community.prototype;
    
}

Village.prototype = Object.create(Community.prototype, {

}); 

