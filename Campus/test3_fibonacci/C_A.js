//自定义组合函数(就是数学排列组合里的C)
function combination(m,n){
    return factorial(m,n)/factorial(n,n);//就是Cmn(上面是n，下面是m) = Amn(上面是n，下面是m)/Ann(上下都是n)
}


//自定义排列函数(就是数学排列组合里的A)
function array(m,n){
    return factorial(m,n);//就是数学里的Amn,上面是n，下面是m
}


//自定义一个阶乘函数，就是有n个数相乘，从m开始，每个数减1，如factorial(5,4)就是5*(5-1)*(5-2)*(5-3),相乘的数有4个
function factorial(m,n){
    var num = 1;
    var count = 0;
    for(var i = m;i > 0;i--){
        if(count == n){//当循环次数等于指定的相乘个数时，即跳出for循环
            break;
        }
        num = num * i;
        count++;
    }
    return num;
}


//6个数里面，取出2个数有多少种组合(即不考虑顺序)
document.writeln("排列组合的C运算符:6个数里面，取出2个数有<strong>" + combination(6,2) + "</strong>种组合<br>");


//6个数里面，取出2个数有多少种排列(即考虑顺序)
document.writeln("排列组合的A运算符:6个数里面，取出2个数有<strong>" + array(6,2) + "</strong>种排列<br>");
