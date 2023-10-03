const myArr = [0,1,2,3,4,5]

myArr.unshift(0)
// console.log(myArr);

myArr.shift()

myArr.slice(1,3)
// console.log("A " + myArr);

myArr.splice(1,3)
// console.log("B " + myArr)

const maha = ["Hare","Krishna","Hare","Krishna","Krishna","Krishna","Hare","Hare"]
const Mantra = ["Hare","Ram","Hare","Ram","Ram","Ram","Hare","Hare"]

const Maha_Mantra = maha.concat(Mantra);
console.log(Maha_Mantra.flat(Infinity));