function sayHi() {
    console.log('[TimeOut-and-Interval]: Hello');
}

setTimeout(sayHi, 1000);

// Using clear timer to cancel setTimeOut;
let timerId = setTimeout(()=> console.log("nerver happens"), 1000);
console.log('[TimeOut-and-Interval]:', timerId);

clearTimeout(timerId);

//Using setInterval methods to repeat action
let timerIdInterval = setInterval(() => console.log('[TimeOut-and-Interval]: Stick'), 2000);
setTimeout(() => {
    clearInterval(timerIdInterval);
    console.log('[TimeInterval]: Stop');
}, 7000)

//