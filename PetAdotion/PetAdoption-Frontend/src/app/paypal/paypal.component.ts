import { Component, AfterViewChecked } from '@angular/core';
import { ActionSequence } from 'protractor';

declare let paypal: any;


@Component({
  selector: 'paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.scss']
})

export class PaypalComponent implements AfterViewChecked {
  
  addScript: boolean = false;
  paypalLoad: boolean = false;

  finalAmount: number = 1;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'ARebEEsqTpy0TgiLkzXsQZrT7OWAqoO4WyUMBQVx0eC1k4x2Y9C4gq4_ZVN8yUY7R__cPBeVImCvmcVI',
      production: '<your-production-key here>'
    },
    commit: true,

    payment:(data, action)=> {
      return action.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: 'USD'} }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) =>{
        //When payment success!
      })
    }
  };

  ngAfterViewChecked(): void {
    if(!this.addScript) {
      this.addPaypalScript().then(() =>{
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = true;
      })
    }
  }  

  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) =>{
      let scripttagElement = document.createElement('script');
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    
    })
  }
  }






  // constructor() { }
  // ngOnInit() {
  // }

