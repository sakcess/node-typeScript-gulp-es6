import IronManModule = require('./IronMan');

export class Avengers extends IronManModule.IronMan
{
  attack()
  {
    super.attack();
    console.log('Captaim America: You and me, we stay here on the ground, keep the fighting here. And Hulk? Smash!');
    console.log('Hulk: Puny God');
  }
}
