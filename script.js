// question 3
const unique = (array)=>{
    return [...new Set(array)]
}
let chars = ['1', '1', 'hare', 'krishns', 'krishns',":-o"];
console.log(unique(chars));