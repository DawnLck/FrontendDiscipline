var line1 = readline().split(' ');
var A = parseInt(line1[0]);
var B = parseInt(line1[1]);
var result = 0;
for(var i=1;i<=B;i++){
    result += parseInt(A/i);
}
print(result);
