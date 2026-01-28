import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: any[] = [];
  private cartItemCount = new BehaviorSubject<number>(0);

  constructor() {}

  getCart() {
    return this.cart;
  }

  getCartItemCount(): BehaviorSubject<number> {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;

    for (let p of this.cart) {
      if (p.id === product.id) {
        p.qty += 1;
        added = true;
        break;
      }
    }

    if (!added) {
      this.cart.push({
        ...product,
        qty: 1
      });
    }

    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (const [index, item] of this.cart.entries()) {
      if (item.id === product.id) {
        item.qty -= 1;

        if (item.qty === 0) {
          this.cart.splice(index, 1);
        }
        break;
      }
    }

    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (const [index, item] of this.cart.entries()) {
      if (item.id === product.id) {
        this.cartItemCount.next(
          this.cartItemCount.value - item.qty
        );
        this.cart.splice(index, 1);
        break;
      }
    }
  }

  getTotalItems(): number {
    return this.cart.reduce((total, item) => total + item.qty, 0);
  }

  getTotalAmount(): number {
    return this.cart.reduce((total, item) => {
      return total + (item.price * item.qty);
    }, 0);
  }

  clearCart() {
    this.cart = [];
    this.cartItemCount.next(0);
  }
}
