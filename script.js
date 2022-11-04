// question 2
function sortDescending (...arguments){
    const data = [...arguments]
   const arr=[]
   for (let i=0;i<data.length;i++){
    arr.push(...arguments[i])
   }
  const result =  arr.sort((a,b)=>a-b)
  console.log(result)
}
sortDescending([1,2,3,9,10,12],[4,5,6,7,8,13,14,15])
