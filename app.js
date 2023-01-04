//1 findUserByUsername

//Write a function called findUserByUsername which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined.

const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
//   findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
//   findUserByUsername(users, 'taco') // undefined

//plan going to use find!

function findUserByUsername (ObjArray,username){
    return ObjArray.find(function (user){
        return username===user.username 
    })
}

//2 removeUser

//Write a function called removeUser which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array and return this object. If the object is not found, return undefined.

// const users = [
//     {username: 'mlewis'},
//     {username: 'akagen'},
//     {username: 'msmith'}
//   ];
  
//   removeUser(users, 'akagen') // {username: 'akagen'}
//   removeUser(users, 'akagen') // undefined

function removeUser (userArray,username){
    let foundIndex=userArray.findIndex(function (user){
        return username===user.username 
    })
    if (foundIndex===-1) return;
    return userArray.splice(foundIndex,1)[0]

}