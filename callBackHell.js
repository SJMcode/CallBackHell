let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

//console.log(stocks)

let order = (fruit, call_production)=>{
  console.log("Order has been placed");
  
  setTimeout(()=>{
    
    console.log(`${stocks.Fruits[0]} was selected`);
    call_production();
    
  } , 2000)
    
}

let production = () =>{
  console.log("production started")
      setTimeout(()=>{

        console.log(`Fruits started cutting`);
        setTimeout(()=>{
    
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
          setTimeout(()=>{
    
    console.log(`machine started`);
            setTimeout(()=>{
    
    console.log(`${stocks.holder[0]} was selected`);
              
              setTimeout(()=>{
    
    console.log(`${stocks.toppings[0]} was selected as toppings`);
                setTimeout(()=>{
    
    console.log(`IceCream served`);
                
    
  } , 2000)
    
  } , 3000)
    
    
  } , 1000)
    
    
  } , 1000)
    
  } , 1000)

      } , 2000);
}

order("", production);

  // place order -2
  // Cut the fruit - 2
  // Add water and Ice  - 1 
  // start the machine - 1
  // select container - 2
// select toppings - 3
  // Serve Icecream - 2 
  
 