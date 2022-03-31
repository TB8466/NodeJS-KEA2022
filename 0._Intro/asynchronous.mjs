// Fetching aka: If something happens over the network
// Browser event listeners
// Converting data : Stream
// File handling
// DB
// Encryption / Decryption
// Anything that takes time and/or has been implemtented with a promise


//Promise is used to avoid "callback hell"
//It has two states: Pending || Fufilled
//And once it's done it will become: Resolved || Rejected
 new Promise((resolve,reject) => {
    try {
        //throw new Error("Woops")
        resolve("Everything went well")
    }
    catch(customError) {
        reject("Everything went wrong"+customError)
    }
        
})
.then(message => console.log(message))
.catch(errormsg => console.log(errormsg));

//B4 knowing
function somethingGoodSomethingBad(){
    new Promise((resolve,reject) =>{
        setTimeout(()=>{
            console.log("Done cooking");
            return resolve("Something good")
        },4000)
    })
    
}
somethingGoodSomethingBad()

//After knowing
function somethingGoodSomethingBad2(){
    return new Promise((resolve,reject)=> {
        setTimeout(() =>{
            try{
                resolve("Good");
            }
            catch{
                reject("Bad");
            }
        },4000);
    });
}
somethingGoodSomethingBad2()

//With async/await
const goodOrBad = await somethingGoodSomethingBad2();
console.log(goodOrBad);

async function getCondition() {
    const goodOrBad = await somethingGoodSomethingBad2();
    console.log(goodOrBad);
}
getCondition();