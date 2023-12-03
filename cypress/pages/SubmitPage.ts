import { BasePage } from "./BasePage";
export class SubmitPage extends BasePage {


  //LOCATORS
input_name(){
return cy.get('form input[name="name"]')

}

input_email(){
  return cy.get('form input[name="email"]')
}

input_password(){
  return cy.get('form input[placeholder="Password"]')
} 

check_iceCream(){
  return cy.get('#exampleCheck1')
}


//cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

dropdown_gender(){

   return cy.get('#exampleFormControlSelect1')
}

check_vocation(){
  return cy.get('#inlineRadio1')

}

input_bday(){
  return cy.get('form input[name="bday"]')
}

btn_submit(){
  return cy.get('input[value="Submit"]')
}

alert_field(){
  return cy.get('.alert  strong')
}

  //METHODS
//Void means that function doesent return anything.If we put : string, the it returns string
//Naknadno odradi formatiranje datuma
  submittingForm(name: string, email: string,password: string,date?: string | null | undefined) :void {
    this.launchStore()
    this.input_name().type(name)
    this.input_email().type(email)
    this.input_password().type(password)
    this.check_iceCream().check()
    //Mozda nije dobro
    this.dropdown_gender().select('Male')
    this.check_vocation().check()
    this.btn_submit().click()
    this.alert_field().contains('Success!')

  }
  
  
  
  











}


