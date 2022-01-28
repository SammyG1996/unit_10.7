//Quick Question #1

//[1,2,3,4]




//Quick Question #2 

//["ref"]




//Quick Questions #3

/*
m will return => 

{
  [1,2,3]: true, 
  [1,2,3]: false
}

*/





//hasDuplicate 

const hasDuplicate = (arr) => {
  const newSet = new Set(arr)
  return arr.length === newSet.size ? false : true
}

//vowelCount 
const vowelCount = (str) => {
const vowels = [...str.toLowerCase()].filter(letter => {
  return letter.includes('a' || 'e' || 'i' || 'o' || 'u')
})
const map = new Map(); 
for (let vowel of vowels){
  map.has(vowel) ? map.set(vowel, map.get(vowel) + 1) : map.set(vowel, 1)
}
return map
}
