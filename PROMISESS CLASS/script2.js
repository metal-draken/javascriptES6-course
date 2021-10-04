let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve ("Resolved");
    }, 1000)
});

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("Rejected");
    }, 1000)
});




Promise.all([promise1, promise2])
.then(function(sucsess) {
    console.log(sucsess);
})
.catch(function(error){
    console.log(error);
});





Promise.race([promise1, promise2])
.then(function(sucsess) {
    console.log(sucsess);
})
.catch(function(error){
    console.log(error);
});

