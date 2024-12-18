import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

listOfProducts: string[] = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'];

  addToCart :number= 0;
  product1={
    
    title: 'Product 1',
    description:'This is a description of Product 1. It is a great product that offers many features.',
    price: 25.99,
    cart :'Add to Cart',
    discount : 10,
    instock : 10,
    pImage : '/assets/images/bd61bd3552524e8e8a7c006dd580c826_EOS+200D+MKII+BK+Front+Slant+w+Screen.png'
    
  }

title2: string='Product 2';
description2: string='This is a description of Product 2. It is a great product that offers many features.';
price2: number=39.99;
cart2 : string='Add to Cart';

title3: string='Product 3';
description3: string='This is a description of Product 3. It is a great product that offers many features.';
price3: number=19.99;
cart3 : string='Add to Cart';


getDiscountPrice() {
  return this.product1.price - (this.product1.price * this.product1.discount / 100);
}
onNameChange(event: any) {
   // this.name = event.target.value;
  //console.log(event.target.value);


}
decrementCartvalue(){
  if(this.addToCart > 0){
    this.addToCart--;
  }

}

incrementCartvalue(){
  if(this.addToCart < this.product1.instock){
    this.addToCart++;
  }
}
}