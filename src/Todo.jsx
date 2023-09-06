// export default function Todo({task, isDone}){

//   return (
//     <li>Task :- {task}</li>
//   )
// }


//conditional rendering option 1
// export default function Todo({task, isDone}){

//     if(isDone){
//       return <li>Finished : {task}</li>
//     }else{
//       return <li>Unfinished : {task}</li>
//     }
// }

//conditional rendering option 2

// export default function Todo({task, isDone}){

//     if(isDone){
//       return <li>Finished : {task}</li>
//     }
//       return <li>Work on : {task}</li>
    
// }


//conditional rendering option 3

// export default function Todo({task, isDone}){

//       return <li> {isDone ? 'Complete :-' : 'Incomplete :-'} {task}</li>
    
// }


//conditional rendering option 5: 

// export default function Todo({task, isDone}){

//   return (
//     <li> {task} {isDone || ' incomplete '}</li>
//   )
// }


// conditional rendering option 6

export default function Todo({task, isDone}){
  let listItem;

    if(isDone){
      listItem = <li>Finished : {task}</li>
    }else{
      listItem = <li>Work on : {task}</li>
    } 
    return listItem;
    
}
