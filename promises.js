//1.    Write one example explaining how you can write a callback function ?

//when we call a function inside a function or passes function as an argument while calling a function is called as callback function.
function callback() {
    messageOfCallback()
}
function messageOfCallback() {
    console.log("This Is CallBack Function");
}
callback();

//2.    Write callback function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 
//      should be printed after 3 sec and so on. Explain callback hell.
//      Numbers
//      1
//      2
//      3
//      4
//      5
//      6
//      7

const numbers = () => {
    setTimeout(() => {
        console.log('1')
    }, 1000);
    setTimeout(() => {
        console.log('2')
    }, 2000);
    setTimeout(() => {
        console.log('3')
    }, 3000);
    setTimeout(() => {
        console.log('4')
    }, 4000);
    setTimeout(() => {
        console.log('5')
    }, 5000);
    setTimeout(() => {
        console.log('6')
    }, 6000);
    setTimeout(() => {
        console.log('7')
    }, 7000);
}
numbers()
function numbersUsingLoop() {
    for (let i = 1; i <= 7; i++) {
        setTimeout(() => {
            console.log(i)
        }, 1000 * i);
    }
}
numbersUsingLoop();


//3.    Write promise function to print numbers from 1 to 7, in which 1 should be printed after 1 sec , 2 should be printed after 2 sec, 3 should be printed after 3 sec and so on. 
//      Numbers
//      1
//      2
//      3
//      4
//      5
//      6
//      7
let array = [];
for (let i = 1; i <= 7; i++) {
    const number = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(i);
            reject("code is wrong");
        }, 1000 * i);
    });
    array.push(number);

}

for (let i = 0; i < array.length; i++) {
    array[i]
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(error);
        });
}



//.4      Create a promise function accepting a argument, if yes is passed to the function then it should go to resolved state and print Promise Resolved, 
//        and if nothing is passed then it should go to reject state and catch the error and print Promise Rejected 
function promise2(argument){
    return new Promise((resolve,reject)=>{
        if(argument=="yes"){
            resolve('Promise Resolved')
        }
        else{
            reject('Promise Rejected')
        }
    })
}
promise2("yes")
.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})



//.5       Create examples to explain callback function
function callback() {
    messageOfCallback()
}
function messageOfCallback() {
    console.log("This Is CallBack Function");
}
callback();



//6.     Create examples to explain callback hell function
function callbackhellfunction(a, b, c) {
    console.log(a,b,c);
    setTimeout((a) => {
                console.log(a);
                setTimeout((b)=>{
                    console.log(a+b);
                    setTimeout((c)=>{
                        console.log(b+c);
                    },1000)
                },3000)
            }, 3000);
}

  callbackhellfunction(1, 2, 3);



// 7.       Create examples to explain promises function
const conditionchecking = new Promise((resolve, reject) => {
    let marks = 45;
    if (marks >= 40) {
        resolve("pass");
    } else {
        reject("fail");
    }
});
conditionchecking
.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err)
})


// 8.       Create examples to explain async await function
function checkmarks (m){
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(m);
          resolve("foo"+m);
        }, 3000);
      });
      return myPromise;
};
async function asyncAwait(marks) {
    console.log("Inside async function");

    try{
        let res = await checkmarks(40);
        console.log(res+"res");
        return res;
    }catch(err){
        console.log(err);
    }

}
console.log("Before calling asyncawait function");
let a = asyncAwait(123);
console.log("After calling asyncawait function");
console.log(a+"here");
a.then((data) => {
    console.log(data);
})


// 9.       Create examples to explain promise.all function
let promise1 = new Promise((resolve, reject) => {
  resolve("this is first promise");
  reject("Error 1");
});
let promise2 = new Promise((resolve, reject) => {
  resolve("this is second promise");
  reject("Error 2");
});
let promise3 = new Promise((resolve, reject) => {
  resolve("this is third promise");
  reject("Error 3");
});
let promise4 = new Promise((resolve, reject) => {
    resolve("this is forth promise");
    reject("Error 3");
  });
Promise.all([promise1, promise2, promise3,promise4])
  .then((resolved) => {
    console.log(resolved);
  })
  .catch((error) => {
    console.log(error);
  });