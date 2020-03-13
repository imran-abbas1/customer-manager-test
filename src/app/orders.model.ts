export interface Orders {
  email: string;
  orderId: number;
  amount: number;
  key?: string;
  product: Product[];
}

export interface Product {
  productName: string;
  productPrice: number;
}
  /*constructor(email: string, orderId: number, amount: number, productName: string, productPrice: number) {
    this.email = email;
    this.orderId = orderId;
    this.amount = amount;
    this.product.productName = productName;
    this.product.productPrice = productPrice;
  }
}*/
