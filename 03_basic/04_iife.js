// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log('DB Connected')
})();


((name)=>{
    //Unnamed IIFE
    console.log(`DB Connected Two ${name}`)
})("Zaki")