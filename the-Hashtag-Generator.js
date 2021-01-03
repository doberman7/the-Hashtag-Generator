generateHashtag = (str) =>  {
    str = str.replace(/\s+/g, ' ').trim()//replaces extra spaces for only 1 space, elimintes spaces at end and begining
    if(str==="") return false
    
    str2 = []
    str.split(" ").map(s => str2.push (s[0].toUpperCase() + s.slice(1)))//initial word to upper case           
    str = "#" +str2 //add # and turn to striing
    str = str.replace(/,/g, "")//deletes comas
    if(str.length>140) return false
    return str;
}

console.log(generateHashtag("Hello there thanks for trying my Kata")=="#HelloThereThanksForTryingMyKata")//
console.log(generateHashtag("    Hello     World   ")=="#HelloWorld")
console.log(generateHashtag("")==false)