/*let ABC = new Promise(function(resolve, reject) {
    setTimeout (function() {
        resolve ("Done!");
        reject ("Failed");
    }, 1500);
});

ABC.then(function(value) {
    console.log(value);
}, function(error) {
    console.log(error);
});
*/

/*ABC.then(console.log("Whatever"))*/







/*unction waitASecond(seconds) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            seconds++;
            resolve(seconds);
        }, 1000)
    })
}

waitASecond(0)
.then(waitASecond)
.then(function(seconds) {
    console.log(seconds)
})
*/


function waitASecond(seconds) {
    return new Promise(function(resolve, reject){
        if (seconds > 2) {
            reject("Rejected!");
        } else {
            setTimeout(function(){
                seconds++;
                resolve(seconds);
            }, 1000)
        }
    });
}

waitASecond(0)
.then(waitASecond)
.then(function(seconds) {
    console.log(seconds)
})
.catch(function(error) {
    console.log(error);
});

waitASecond(2)
.then(waitASecond)
.then(function(seconds) {
    console.log(seconds)
})
.catch(function(error) {
    console.log(error);
});