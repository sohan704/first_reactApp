export default function Singer({singer}){
  console.log(singer);
  return(
    <div>
      <h2>name is :- {singer.name}</h2>
      <h4>age is :- {singer.age}</h4>
    </div>
  )
}