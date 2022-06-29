const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];


// 1. you need to write a function say, 
// getUniqueProductCount which should return count of each Product(as an object) present in the given list
//  of Products considering Product Name as Key.



const getUniqueProductCount = (listOfProducts) =>{
  let obj = {};
  for (let i = 0; i < listOfProducts.length; i++) {
    //traversing through the list 
    let k = listOfProducts[i].productName;

    if (!obj[k])//checking if the product is available or not
     {
      obj[k] = 1;//if not available assign key value pair as name of product and quantity  
    } else {
      obj[k]++;//if present just increase its count
    }
  }
 return obj//returning obj which is our desired output
} 

console.log(getUniqueProductCount(listOfProducts))//output displayed

// 2. you need to write a function say,
//  getUniquePrducts which should return an array of objects by grouping
//  the products based on the productName and summing up the quantity for
//  the same products present in the given list of Products considering Product Name as Key.

  const getUniquePrducts = listOfProducts.reduce((acc, e) => {
    //using reduce method 
    const found = acc.find((x) => e.productName === x.productName);//return if found the desired result
    found ? (found.quantity += e.quantity) : acc.push(e);//checking the condition
    return acc//returning the result
  }, []);




console.log(getUniquePrducts)//displaying the result