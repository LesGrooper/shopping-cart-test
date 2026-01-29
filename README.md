
### Ionic 5 Angular Shopping Cart with Stripe payment 

Clone and run npm install, If you wish to update to the latest Ionic **delete** the `node_modules` and run below,

```
ng update @angular/core @angular/cli
npm install @ionic/angular-toolkit@latest
```

## Install the Stripe (cordova) plugin not for Capacitor 

```
ionic cordova plugin add cordova-plugin-stripe
npm install --save @ionic-native/stripe
```

## Ionic Native (peer dependency issue fix)

```
npm WARN @ionic-native/stripe@5.31.1 requires a peer of @ionic-native/core@^5.1.0 but none is installed. You must install peer dependencies yourself.
```

You need to install manually as below

```
npm i @ionic-native/core
```

## Install Stripe for Capacitor 

Make sure your Ionic project is integrated with Capacitor and not Cordova

```
npm install cordova-plugin-stripe
npm install @ionic-native/stripe
ionic cap sync
```

> ### Result
>> Listing Products
>> <img width="388" height="840" alt="1" src="https://github.com/user-attachments/assets/b3385d05-ebb6-41b0-be34-f8cc0368addb" />

>> Listing Cart
>> <img width="381" height="825" alt="2" src="https://github.com/user-attachments/assets/88ba9f05-09bc-4cac-be81-66c533de77a8" />

>> Listing Payments
>> <img width="373" height="832" alt="3" src="https://github.com/user-attachments/assets/4172ab87-53f6-458e-81d0-c13b1c76aa56" />

>> Alert Payments
>> <img width="372" height="830" alt="4" src="https://github.com/user-attachments/assets/8ab84c37-45b3-4b94-b198-598b997ff6ea" />


