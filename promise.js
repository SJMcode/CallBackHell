// place order -2 sec
  // Cut the fruit - 2 sec
  // Add water and Ice  - 1 sec 
  // start the machine - 1 sec
  // select container - 2 sec
// select toppings - 3 sec
  // Serve Icecream - 2 sec
  let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_shop_open=true;

let order = (time , work) =>{
  return new Promise( (resolve, reject) =>{
    if(is_shop_open){
      setTimeout(()=>{
        resolve(work())
      }, time)
    }
    else{
      reject(console.log("Shop is closed now"))
    }
  })
}

order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))
.then(()=>{
  return order(0000, ()=>{console.log("Production started")})
})
.then(()=>{
  return order(2000, ()=>console.log("Started cutting fruits"))
})

.then(()=>{
  return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})
.then(()=>{
  return order(1000, ()=>console.log("Started the machine"))
})

.then(()=>{
  return order(2000, ()=>console.log(`Container ${stocks.holder[0]} selected`))
})

.then(()=>{
  return order(3000, ()=>console.log(`${stocks.toppings[1]} selected as topping`))
})

.then(()=>{
  return order(2000, ()=>console.log(`IceCream served`))
})

.catch(()=>{ console.log("Customer left")})

.finally(()=>{console.log("Please visit again!")})