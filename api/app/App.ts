//import AvengersModule = require('./Avengers');
//import * as AvengersModule from "./Avengers";
//test
import { Avengers as AvengersModule } from "./Avengers";

var superHeros = new AvengersModule();
console.log('IronMan is teamed up with Avengers now.', JSON.stringify(superHeros));
superHeros.attack();
superHeros.blockScopeVariables();
superHeros.constant();
