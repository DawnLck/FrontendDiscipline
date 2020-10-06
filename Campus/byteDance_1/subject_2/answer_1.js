/*判断手串珠子颜色不合格*/

//接收第一行的参数
var line1 = readline().split(' ');
var n = line1[0],
  m = line1[1],
  c = line1[2];
var  obj = {};
var arr = [];
var cnt = 0;

//接收第二行的参数
for(var i=0;i<n;i++){
  arr[i] = readline().split(' ');
  for(var j=1;j<=arr[i][0];j++){
    if(obj[arr[i][j]]){
      obj[arr[i][j]].push(i+1);
    }else{
      obj[arr[i][j]] = [i+1];
    }
  }
}

// 判断手串相同颜色的位置
var temp = Object.values(obj);
for(var i=0;i<temp.length;i++){
  for(var j=0;j<temp[i].length-1;j++){
    if((temp[i][j+1] - temp[i][j]) < m){
      cnt++;
      break;
    }
  }
  if(n-temp[i][temp.length-1]+temp[i][0] < m){
    cnt++;
    break;
  }
}
print(cnt);
