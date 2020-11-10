//Question 1
console.log(( function (name){
    let hello = 'Hello, my name is Dog and I have purple eyes' + name;
    return hello
})('Max'))


//Question 2
 //Given array 
 //Group_of_name = ['Max','Baseball','Reboot','Goku','Trucks','Rodger']

// Creation of Array of Names 
let group_of_names = ['Max','Baseball','Reboot','Goku','Trucks','Rodger']

//method 1 for looping through an array
function all_names(){
    for(let i = 0; i < group_of_names.length; i++){
        console.log(group_of_names[i]) // Max, Baseball, Reboot, Goku, Trucks, Rodger
    }

}

//Remove all even indexes and replace with a new name
function replace_new_name(){
    // For loop to get all names
    for(let i = 0; i < group_of_names.length; i++){
        if(i % 2 == 0){
            group_of_names.splice(i,1,'Baseball','Goku','Rodger' )
        }
    }
    return group_of_names

}
console.log(replace_new_name())

   





