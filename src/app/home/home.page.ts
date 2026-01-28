import { Component } from '@angular/core';
import { CartService } from '../_services/cart.service';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartviewPage } from '../cartview/cartview.page';
import { ProductService } from '../services/products/products.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cart = [];
  products = [];
  allProducts = [];
  cartItemCount: BehaviorSubject<number>;
  selectedFilter = 'default';
  isLoading = true; // 👈 tambahan

  constructor(
    private cartService: CartService, 
    private modalCtrl: ModalController,
    private productService: ProductService,
  ) {}

  ngOnInit(){
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
    this.loadProducts();
  }

  loadProducts() {
    this.isLoading = true;

    this.productService.getProducts().subscribe(res => {
      this.allProducts = res.map(p => ({
        id: p.id,
        name: p.title,
        price: p.price,
        image: p.thumbnail,
        quantity: 1
      }));

      this.products = [...this.allProducts];
      this.isLoading = false; // 👈 data siap
    });
  }

  onFilterChange(value: string) {
    this.selectedFilter = value;

    switch (value) {
      case 'lowest':
        this.products = [...this.allProducts].sort((a, b) => a.price - b.price);
        break;
      case 'highest':
        this.products = [...this.allProducts].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        this.products = [...this.allProducts].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;
      default:
        this.products = [...this.allProducts];
    }
  }

  addToCart(product) {
    this.cartService.addProduct(product);
  }

  async openCart() {
    const modal = await this.modalCtrl.create({
      component: CartviewPage,
      cssClass: 'cart-modal'
    });
    modal.present();
  }
}


