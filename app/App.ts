import AvengersModule = require('./Avengers');

var superHeros = new AvengersModule.Avengers();
console.log('IronMan is teamed up with Avengers now.', JSON.stringify(superHeros));
superHeros.attack();
superHeros.blockScopeVariables();
superHeros.constant();
