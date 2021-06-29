export class Ingredient{

    public name: string;
    public qty: number;
    public validity: string;

    constructor(name: string, qty: number, validity: string){
        this.name = name;
        this.qty = qty;
        this.validity = validity;
    }

}