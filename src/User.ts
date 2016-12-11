// TypeScript file
class User{
    //cash = 0;
    //gold = 0;
    //exp = 0;
    //totalExp = 0;
    level = 0;
    power = 0;
    wise = 0;
    alert = 0;
    
    heroes:Hero[] = [guanyu];
    _heroesInTeam:Hero[] = [];
    get heroesInTeam(){
        return this.heroes.filter(hero=>hero.isInTeam);
    }
    
}

var guanyu = new Hero();