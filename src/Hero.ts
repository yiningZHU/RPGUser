// TypeScript file
class Hero{
    
    isInTeam:boolean = false;
    equipments:Equipment[]=[];

    heroLevel = 1;
    heroPower = 100;
    heroAlert = 50;
    heroWise = 0;
    heroHp = this.heroLevel*(this.heroPower-100)*(this.heroAlert-100);
    

    get maxHp()
    {
        return this.heroLevel*(this.heroPower-100)*(this.heroAlert-100)
    }
    get attack()
    {
        var result = 0;
        this.equipments.forEach(e => result += e.equipAttack);
        return result;
    }
    getFightPower()
    {
        return this.heroPower^2/(this.heroAlert+this.heroPower);
        
    }
}