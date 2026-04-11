function Product(props){//{x:{productsObj}:{}}}
    //state
//console.log(props);
const{productsObj}=props;
    // //return the component
   return(
    <div className="border-2 rounded-4xl shadow-2xl">
    <h2 className="text-2xl text-blue-800">{productsObj.title}</h2>
    <p>${productsObj.price}</p>
    <hr></hr>
    <p className="text-xl text-black">{productsObj.description}</p>
    </div>
   )
}
export default Product;