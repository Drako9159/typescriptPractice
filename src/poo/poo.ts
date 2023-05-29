


class Sale{

    private _total : number = 0;
    private _optional?: number;

    constructor(optional?: number){
        this._optional = optional;
    }
    
    getTotal(){
        return this._total;
    }
    getOptional(){
        return this._optional;
    }
    setOptional(optional: number){
        this._optional = optional;
    }
    
}

class SaleWithTax extends Sale{
    private _tax: number = 0;

    constructor(tax: number, optional?: number){
        super(optional);
        this._tax = tax;
    }

    override getTotal(){
        return super.getTotal() + this._tax;
    }
}


const sale : Sale = new Sale(10);
//console.log(sale.getTotal())
//sale.setOptional(20)
//console.log(sale.getOptional())

const saleWithTax : SaleWithTax = new SaleWithTax(10, 20);
console.log(saleWithTax.getTotal())