import {reduceStock} from './product.js'
import {getCartItems,getCartTotal,clearCart} from './cart.js'
import {applyDiscount} from './discount.js'

// TODO: Implement these functions

export function processPayment(paymentMethod,couponCode=null){
  // 1. Get cart items and total
  let items=getCartItems()
  let subtotal=getCartTotal()

  // 2. Apply discount if coupon provided
  let discount=0
  let total=subtotal

  if(couponCode){
    let result=applyDiscount(subtotal,couponCode,items)
    discount=result.discount
    total=result.finalTotal
  }

  // 3. Validate payment method (card/upi/cod)
  let valid=validatePaymentMethod(paymentMethod)
  if(valid===false){
    return{
      orderId:null,
      items:items,
      subtotal:subtotal,
      discount:discount,
      total:total,
      paymentMethod:paymentMethod,
      status:'failed',
      message:'invalid payment method'
    }
  }

  // 4. Process payment (simulate)

  // 5. Reduce stock for all items
  items.forEach(obj=>{
    reduceStock(obj.productID,obj.quantity)
  })

  // 6. Clear cart
  clearCart()

  // 7. Generate order summary
  return{
    orderId:generateOrderId(),
    items:items,
    subtotal:subtotal,
    discount:discount,
    total:total,
    paymentMethod:paymentMethod,
    status:'success',
    message:'payment successful'
  }
}

export function validatePaymentMethod(method){
  // Check if method is valid (card/upi/cod)
  if(method==='card'||method==='upi'||method==='cod'){
    return true
  }
  return false
}

function generateOrderId(){
  // Generate random order ID
  return 'ORD'+Date.now()
}