import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CartService } from '../_services/cart.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.page.html',
  styleUrls: ['./payments.page.scss'],
})
export class PaymentsPage {

  cardinfo = {
    number: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  };
  
  constructor(
    private alertCtrl: AlertController,
    private cartService: CartService
  ) { }

  async pay() {
    const totalItems = this.cartService.getTotalItems();
    const totalAmount = this.cartService.getTotalAmount();

    const alert = await this.alertCtrl.create({
      header: 'Success!',
      message: `
      You have successfully purchase <b>${totalItems} products</b><br><br>
      with total of <b>Rp. ${totalAmount.toLocaleString('id-ID')}</b>.<br><br>
      Click close to buy another modems
    `,
      buttons: [
        {
          text: 'Close',
          handler: () => {
            this.cartService.clearCart(); // 🔥 optional tapi cakep
          }
        }
      ],
      cssClass: 'success-alert'
    });

    await alert.present();
  }


  formatCurrency(value: number) {
    return value.toLocaleString('id-ID');
  }
}
