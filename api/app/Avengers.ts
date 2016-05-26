//import IronManModule = require('./IronMan');
import {IronMan as IronManModule} from "./IronMan";

export class Avengers extends IronManModule {

    attack() {
        super.attack();
        console.log('Captaim America: You and me, we stay here on the ground, keep the fighting here. And Hulk? Smash!');
        console.log('Hulk: Puny God');
    }

    blockScopeVariables() {
        if (true) {
            var phoneModel = "Android";
        }
        console.log(phoneModel);

        // for(var i=0;i<4;i++) {
        //   console.log('in-side loop', i);
        // }
        // console.log('out-side loop', i);
    }

    constant() {
        const API_KEY = 'dfsdfsdfsdfsdf';
        //const API_KEY = 'Changed it!';
        console.log('API_KEY is: ', API_KEY);
        return API_KEY;
    }
}
