import { Item } from './item.model';
import { isArray } from 'util';

export class Items {

    constructor(){}

    // here we are checking if comming data is array or not
    // if it is an array then we create a new array of image
    // then we loop through all the data
    // take each item, test it and push it into new array 
    // for that we create fillFrom()

    static fillForm(obj: any): Array<Item> {
        let data: Array<Item> = new Array<Item>();
        if(!isArray(obj)) {
            return data;
        }
        for(var i = 0; i < obj.length; i++) {
            data.push(new Item(obj[i]));
        }

        return data;

    }
}