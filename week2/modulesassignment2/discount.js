
                          // Available coupons
                          const coupons = {
                            'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
                            'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
                            'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
                          };
                          
                          // TODO: Implement these functions
                          
                          export function validateCoupon(couponCode, cartTotal, cartItems) {
                            // 1. Check if coupon exists
                            // 2. Check minimum amount requirement
                            // 3. Check category requirement (if any)
                            // Return { valid: true/false, message: '...' }
                               if(coupons[couponCode]===undefined){
                                 return{valid:false,message:"coupon not found"}
                                 }
                                if(cartTotal<coupons[couponCode].minAmount){
                              return{valid:false,message:"minimum amount not satisfied"}
                                  }
                                  if(coupons[couponCode].category){
                               let found=cartItems.find(obj=>obj.category===coupons[couponCode].category)
                              if(found===undefined){
                           return{valid:false,message:"category not applicable"}
                                    }
                                     }
                                   return{valid:true,message:"coupon applied"}
                                  }

                          
                          export function calculateDiscount(couponCode, cartTotal) {
                            if(couponCode==='WELCOME10'){
                           return cartTotal*0.10
                            }
                          if(couponCode==='FLAT500'){
                           return 500
                           }
                           if(couponCode==='ELECTRONICS20'){
                             return cartTotal*0.20
                             }
                           return 0
                             }
                            // Return discount amount
         
                          
                          
                          export function applyDiscount(cartTotal, couponCode, cartItems) {
                            // 1. Validate coupon
                            // 2. If valid, calculate discount
                            // 3. Return final amount and discount details
                            // Return { 
                            //   originalTotal: ..., 
                            //   discount: ..., 
                            //   finalTotal: ...,
                            //   message: '...'
                            // }
                            let result=validateCoupon(couponCode,cartTotal,cartItems)
                            if(result.valid===false){
                             return{
                          originalTotal:cartTotal,
                             discount:0,
                             finalTotal:cartTotal,
                             message:result.message
                               }
                             }
                            let discount=calculateDiscount(couponCode,cartTotal)
                            return{
                           originalTotal:cartTotal,
                            discount:discount,
                              finalTotal:cartTotal-discount,
                             message:"discount applied successfully"
                             }
                          }
 