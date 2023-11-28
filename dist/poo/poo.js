class Sale {
    constructor(optional) {
        this._total = 0;
        this._optional = optional;
    }
    getTotal() {
        return this._total;
    }
    getOptional() {
        return this._optional;
    }
    setOptional(optional) {
        this._optional = optional;
    }
}
class SaleWithTax extends Sale {
    constructor(tax, optional) {
        super(optional);
        this._tax = 0;
        this._tax = tax;
    }
    getTotal() {
        return super.getTotal() + this._tax;
    }
}
const sale = new Sale(10);
//console.log(sale.getTotal())
//sale.setOptional(20)
//console.log(sale.getOptional())
const saleWithTax = new SaleWithTax(10, 20);
console.log(saleWithTax.getTotal());
