const objectA = {
    a: 10,
    b:true
 }
 const copy0fA = objectA
 copy0fA.c = 'abc'
 
 
 const a = () => {
    console.log( 'Hey there' )
 }
 a() = 10
 a()
 
 
 const myCity = {
    city:  'New York'
 }
 myCity.popular = true
 console.log(myCity)
 myCity.country = 'USA'
 console.log (myCity)
 
 
 const myCity = {
    city: 'New York' ,
    popular: true,
    country: 'USA'
 }
 delete myCity.country
 console.log(myCity)
 
 
 const myCity = {
    city: ' New York ' ,
    info: {
       isPopular:  true,
       country: 'USA'
    }
 }
 console.log(myCity.info.isPopuplar)
 delete myCity.info[ 'isPopular' ]
 console.log(myCity)
 
 
 
 const name = 'Bogdan'
 const postsQty = 23 
 
 const userProfile = {
    name: name,
    postQty: postQty,
    hasSignedAgreement: false
 }
 
 
 
 const person = { 
    name: 'Bob' ,
    age: 25
 }
 const person2 = person
 
 person2age = 26 
 person2isAdult = true
 
 console.log(person.age)
 console.log(person.isAdult)
 
 
 
 let a = 5
 let b = 3
 
 let c 
 
 c = a + b
 console.log(c)
 
 a = 8 
 b = 12 
 
 c = a + b
 console.log(c)
 
 
 
 
 const person0ne = {
    name: ' Bob ' ,
    age: 21
 }
 
 function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1 
    return updatedPerson
 }
 
 const updatedPersonOne = increasePersonAge(personOne)
 console.log(personOne.age)
 console.log(updatedPersonOne.age)
 
 
 
 
 let a 
 let b
 
 function myFn() {
    let b
    a = true
    b = 10
    console.log(b)
 }
 
 myFn()
 
 console.log(a)
 console.log(b)
 
 
 
 
 const a = 5
 
 function myFn() {
    function innerFn() {
       console.log(a)
    }
    innerFn()
 }
 myFn
 
 
 
 
 let a
 let b 
 
 function myFn() {
    let b
    a = true
    b = 10
    console.log(a)
 }
 myFn()
 
 console.log(a)
 consolelog(b)
 
 
 
 
 const button = {
    width: 200,
    text: 'Buy'
 }
 const redButton = {
    ...button,
    color: 'red'
 }
 console.table(redButton)
 
 
 
 
 const buttonInfo = {
    text: 'Buy'
 }
 const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
 }
 const button = {
    ...buttonInfo,
    ...buttonStyle
 }
 console.table(button)
 
 
 
 
 
 function multByFactor(value, multiplier = 10 {
    return value * multiplier
 }
 multByFactor(10, 2)
 multByFactor(5)
 
 
 
 
 
 const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
 ])
 const firstPost = {
    id: 1,
    author: 'Bogdan',
 }
 newPost(firstPost)
 
 
 
 const fnWithError = () => {
    throw new Error( 'Some error' )
 }
 fnWithError()
 console.log('Continue...')
 
 
 
 
 const fnWithError = () => {
    throw new Error ('Some error')
 }
 try {
    fnWithError()
 } catch (error) {
    console.error(error)
    console.log(error.message)
 }
 console.log( 'Continue...' )
 
 
 
 
 let a;
 const b = 5;
 if (a > b) {
    console.log( 'a is larger') ;
 }
 for (let i = 0; i++; i < 5) {
    console.log(i);
 }
 
 
 
 
 function myFn(a) {
    console.log(a);
 }
 const b = true;
 let c = 10;
 
 myFn(2 + 3) 
 myFn(b)
 myFn(c = c + 1)
 myFn(c = c + 1;)
 myFn(let d)
 
 
 
 
 
 const myArray = [1, 2, 3]
 console.log(myArray)
 
 const myArray2 = new Array(1, 2, 3)
 console.log(myArray2)
 
 
 
 
 
 const myArray = [1, true, 'a']
 console.log(myArray)
 console.log(myArray[0])
 console.log(myArray[1])
 console.log(myArray.length)
 
 
 
 
 
 const myArray = [1, 2, 3, 4]
 console.log(myArray)
 console.log(myArray.length)
 
 myArray[2] = 'abc'
 console.log(myArray)
 console.log(myArray[2])
 myArray[4] = true
 console.log(myArray)
 console.log(myArray.length)
 
 
 
 
 const myArray = [1, 2, 3]
 console.log(myArray)
 myArray.unshift(true)
 console.log(myArray)
 myArray.unshift( 'abc' )
 console.log(myArray)
 
 
 
 
 
 
 
 
 const myArray = [1, 2, 3]
 console.log(myArray)
 myArray.forEach(el =. console.log(el * 2))
 
 console.log(myArray)
 
 
 
 
 
 
 constmyArray = [1, 2, 3]
 console.log(myArray)
 
 const newArray = myArray.map(el => el * 3)
 
 console.log(newArray) 
 console.log(myArray)






const objectA = {
    a: 10,
    b:true
 }
 const copy0fA = objectA
 copy0fA.c = 'abc'
 
 
 const a = () => {
    console.log( 'Hey there' )
 }
 a() = 10
 a()
 
 
 const myCity = {
    city:  'New York'
 }
 myCity.popular = true
 console.log(myCity)
 myCity.country = 'USA'
 console.log (myCity)
 
 
 const myCity = {
    city: 'New York' ,
    popular: true,
    country: 'USA'
 }
 delete myCity.country
 console.log(myCity)
 
 
 const myCity = {
    city: ' New York ' ,
    info: {
       isPopular:  true,
       country: 'USA'
    }
 }
 console.log(myCity.info.isPopuplar)
 delete myCity.info[ 'isPopular' ]
 console.log(myCity)
 
 
 
 const name = 'Bogdan'
 const postsQty = 23 
 
 const userProfile = {
    name: name,
    postQty: postQty,
    hasSignedAgreement: false
 }
 
 
 
 const person = { 
    name: 'Bob' ,
    age: 25
 }
 const person2 = person
 
 person2age = 26 
 person2isAdult = true
 
 console.log(person.age)
 console.log(person.isAdult)
 
 
 
 let a = 5
 let b = 3
 
 let c 
 
 c = a + b
 console.log(c)
 
 a = 8 
 b = 12 
 
 c = a + b
 console.log(c)
 
 
 
 
 const person0ne = {
    name: ' Bob ' ,
    age: 21
 }
 
 function increasePersonAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1 
    return updatedPerson
 }
 
 const updatedPersonOne = increasePersonAge(personOne)
 console.log(personOne.age)
 console.log(updatedPersonOne.age)
 
 
 
 
 let a 
 let b
 
 function myFn() {
    let b
    a = true
    b = 10
    console.log(b)
 }
 
 myFn()
 
 console.log(a)
 console.log(b)
 
 
 
 
 const a = 5
 
 function myFn() {
    function innerFn() {
       console.log(a)
    }
    innerFn()
 }
 myFn
 
 
 
 
 let a
 let b 
 
 function myFn() {
    let b
    a = true
    b = 10
    console.log(a)
 }
 myFn()
 
 console.log(a)
 consolelog(b)
 
 
 
 
 const button = {
    width: 200,
    text: 'Buy'
 }
 const redButton = {
    ...button,
    color: 'red'
 }
 console.table(redButton)
 
 
 
 
 const buttonInfo = {
    text: 'Buy'
 }
 const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
 }
 const button = {
    ...buttonInfo,
    ...buttonStyle
 }
 console.table(button)
 
 
 
 
 
 function multByFactor(value, multiplier = 10 {
    return value * multiplier
 }
 multByFactor(10, 2)
 multByFactor(5)
 
 
 
 
 
 const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
 ])
 const firstPost = {
    id: 1,
    author: 'Bogdan',
 }
 newPost(firstPost)
 
 
 
 const fnWithError = () => {
    throw new Error( 'Some error' )
 }
 fnWithError()
 console.log('Continue...')
 
 
 
 
 const fnWithError = () => {
    throw new Error ('Some error')
 }
 try {
    fnWithError()
 } catch (error) {
    console.error(error)
    console.log(error.message)
 }
 console.log( 'Continue...' )
 
 
 
 
 let a;
 const b = 5;
 if (a > b) {
    console.log( 'a is larger') ;
 }
 for (let i = 0; i++; i < 5) {
    console.log(i);
 }
 
 
 
 
 function myFn(a) {
    console.log(a);
 }
 const b = true;
 let c = 10;
 
 myFn(2 + 3) 
 myFn(b)
 myFn(c = c + 1)
 myFn(c = c + 1;)
 myFn(let d)
 
 
 
 
 
 const myArray = [1, 2, 3]
 console.log(myArray)
 
 const myArray2 = new Array(1, 2, 3)
 console.log(myArray2)
 
 
 
 
 
 const myArray = [1, true, 'a']
 console.log(myArray)
 console.log(myArray[0])
 console.log(myArray[1])
 console.log(myArray.length)
 
 
 
 
 
 const myArray = [1, 2, 3, 4]
 console.log(myArray)
 console.log(myArray.length)
 
 myArray[2] = 'abc'
 console.log(myArray)
 console.log(myArray[2])
 myArray[4] = true
 console.log(myArray)
 console.log(myArray.length)
 
 
 
 
 const myArray = [1, 2, 3]
 console.log(myArray)
 myArray.unshift(true)
 console.log(myArray)
 myArray.unshift( 'abc' )
 console.log(myArray)
 
 
 
 
 
 
 
 
 const myArray = [1, 2, 3]
 console.log(myArray)
 myArray.forEach(el =. console.log(el * 2))
 
 console.log(myArray)
 
 
 
 
 
 
 constmyArray = [1, 2, 3]
 console.log(myArray)
 
 const newArray = myArray.map(el => el * 3)
 
 console.log(newArray) 
 console.log(myArray)