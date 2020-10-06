var line1 = readline().split(' ');
var N = parseInt(line1[0]);
for(var i=0;i<N;i++){
    var line = readline().split(' ');
    var A = line[0];
    var B = line[1];
    var obj = {};
    if(A.length !== B.length){
        print('No');
    }else{
        var flag = true;
        for(var j=0;j<A.length;j++){
            var c = A[j];
            if(!obj[c]){
                obj[c] = B[j];
                obj[B[j]] = c;
            }else{
                if(c !== B[j]){
                    flag = false;
                    break;
                }
            }
        }
        if(flag){print('Yes');}
        else{
            print('No');
        }
    }
}
