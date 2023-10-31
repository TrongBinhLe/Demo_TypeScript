let now = new Date();
console.log('[Date_time]: ', now);

let date = new Date("2020-02-23");
console.log('[Date_time]:', date);

function diffSubtract(date1: any, date2: any): any {
    return date2 - date1;
  }
  
  function diffGetTime(date1: any, date2: any) {
    return date2.getTime() - date1.getTime();
  }
  
  function bench(f: any) {
    let date1 = new Date(0);
    let date2 = new Date();
  
    let start = Date.now();
    for (let i = 0; i < 100000; i++) f(date1, date2);
    return Date.now() - start;
  }
  
  console.log( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
  console.log( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );