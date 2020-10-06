let n=0;
let a=1;
for(let i=0;i<6;i++){
    n+=1/(a*(a+3));
    a=a+3;
}
console.log(n);

let r = (1+0.19+0.88)*(0.19+0.88+0.94)-(1+0.19+0.88+0.94)*(0.19+0.88);
console.log(r);
