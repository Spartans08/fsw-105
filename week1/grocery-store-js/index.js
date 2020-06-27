var shopper = {
    firstName: 'Brandon',
    lastName: 'Lewis',
    custID: 8088,
    fullName: function() {
        return this.firstName + '' + this.lastName;
    }
};
var cart = ['eggs', 'milk', 'bread', 'water'];
var quantity = 2;
var inStock = true;
var outStock = false;