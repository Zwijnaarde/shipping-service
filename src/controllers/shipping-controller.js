var productService = require('../services/product-service')

class ShippingController {

  constructor() {
    this.REGULAR_PRICE = 0.1
    this.OVERNIGHT_PRICE = 1
  }

  async getItemShipping(item) {

    var shippingAmount = await productService.getProductWeight(item.id)
    var shippingPrice = this.REGULAR_PRICE;
    
    if 

        (item.type == "overnight") {shippingPrice = this.OVERNIGHT_PRICE;}

    return shippingAmount * shippingPrice
  }

}

module.exports = ShippingController;
