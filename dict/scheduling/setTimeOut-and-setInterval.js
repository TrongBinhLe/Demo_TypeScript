"use strict";
function sayHi() {
    console.log('[TimeOut-and-Interval]: Hello');
}
setTimeout(sayHi, 1000);
let timerId = setTimeout(() => console.log("nerver happens"), 1000);
console.log('[TimeOut-and-Interval]:', timerId);
clearTimeout(timerId);
let timerIdInterval = setInterval(() => console.log('[TimeOut-and-Interval]: Stick'), 2000);
setTimeout(() => {
    clearInterval(timerIdInterval);
    console.log('[TimeInterval]: Stop');
}, 7000);
//# sourceMappingURL=setTimeOut-and-setInterval.js.map