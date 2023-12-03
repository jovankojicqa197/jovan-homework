import { BasePage } from "./BasePage";

export class OrderingPage extends BasePage {

  // ul li a[href="/angularpractice/shop"]



//Locators

link_shop(){
    return cy.get( 'ul li a[href="/angularpractice/shop"]')
  }


get_all_products() {
  return cy.get('h4.card-title')
}

btn_checkout() {
  //Prodji opet, zasto ne moze onaj jednostavniji lokator
  return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}



//Problem je protok informacija.Ja cu da mu zadam necu preko fixtures-a, to cu naknadno
// get_all_products().each($el, index, list)
//products.forEach(product)
/*  */ 

//Methods

orderProducts(products: string[]) {
this.launchStore()
this.link_shop().click()
this.selectProducts(products)
this.btn_checkout().click()
}


selectProducts(products: string[]) {
  //Ukoliko ostavim forEach bez => nece da prepozna this.get_all_products() -Zasto je tako?
  products.forEach((element) => {
    this.get_all_products().each(($el, index, list) => {
      if ($el.text().includes(element)) {
        cy.get('button.btn.btn-info').eq(index).click();
      }
    });
  });
}











}






