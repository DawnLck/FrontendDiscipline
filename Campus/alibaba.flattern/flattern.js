const obj = {
    a: 1,
    // b: {
    //     b1: 2,
    //     b2: [1,2,[3]]
    // },
    c: [[1], [2]]
};
function flatten(input){
    console.log(input);
    let tem = {},
    result = {};

    for(let key in input){
        // console.log(key);
        // console.log(input[key]);
        if(!isNaN(input[key])){
            console.log('Number');
            tem[key] = input[key];
        } else if(Array.isArray(input[key])){
            flatten({input:input[key], path: key});
        }
    }

    if(input.hasOwnProperty('path')){
        let path = input['path'];
        for(let k in tem){
            result[path + k] = tem[k];
        }
    }else{
        result = tem;
    }
    return result;

    // if(Array.isArray(input)){
    //
    // }else if(typeof  input === 'object'){
    //     for(let key in input){
    //         if(Array.isArray(input[key])){
    //
    //         }else if(typeof  input[key] === 'object'){
    //
    //         }else{
    //             result
    //         }
    //         result.concat(result, flatten(input[key]));
    //     }
    // }else{
    //     return input;
    // }

}
console.log(flatten(obj));
