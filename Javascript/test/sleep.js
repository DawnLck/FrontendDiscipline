function mySleep(delay){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(delay);
        }, delay);
    })
}

console.log('sleep now');

mySleep(5000).then(()=>{
     console.log("after sleep");
})