import { getProductById, checkStock } from './product.js';
                          
                          let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                          export function addToCart(productId, quantity) {
                            // 1. Get product details
                            // 2. Check stock availability
                            // 3. Check if product already in cart
                            //    - If yes, update quantity
                            //    - If no, add new item
                            // 4. Return success/error message
                            const product=getProductById(productId);

                            if (!checkStock(productId, quantity)) {
                             return 'Stock not available';
                               }

                            const item=cartItems.find(c =>c.productId===productId);

                          if (item) {
                             item.quantity=item.quantity+quantity;
                                 return 'Quantity updated';
                            }

                             cartItems.push({ productId, quantity });
                            return 'Item added';
                          }
                          
                          export function removeFromCart(productId) {
                            // Remove product from cart
                            cartItems=cartItems.filter(c => c.productId !== productId);
                            return 'Item removed';
                          }
                          
                          export function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            // Check stock before updating
                            if (!checkStock(productId, newQuantity)) {
                              return 'Stock not available';}
                              const item=cartItems.find(c => c.productId === productId);
                             item.quantity=newQuantity;
                                return 'Quantity changed';
                          }
                          
                          export function getCartItems() {
                            // Return all cart items with product details
                            return cartItems;
                          }
                          
                          export function getCartTotal() {
                            // Calculate total price of all items in cart
                            // Return total
                            let total=0;

                          cartItems.forEach(c => {const product=getProductById(c.productId);
                               total=total+product.price*c.quantity;});
                               return total;
                          }
                          
                          export function clearCart() {
                            // Empty the cart
                            return cartItems = [];
                          }
