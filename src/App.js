import './App.css';
import {useEffect,useState} from "react";
function App() {
  const [user, setUser] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemperPage, setitemperPage] = useState(5);

  const handleClick= (e) =>{
    setcurrentPage(Number(e.target.id));
  }




const pages = [];
for (let i=1; i<=Math.ceil(user.length/itemperPage); i++)
{
  pages.push(i);
}
const indexOfLastItem = currentPage * itemperPage;
console.log(indexOfLastItem,"LAsT");
const indexOfFirstPage = indexOfLastItem - itemperPage;
console.log(indexOfFirstPage,"FIRST");
const currentItems = user.slice(indexOfFirstPage, indexOfLastItem);
console.log(currentItems);



  async function getData(){
    return await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((data)=> setUser(data))
  }




const constrenderPageNum = pages.map((number) =>{
  return(
    <ul className='pageNum'>
    <li key={number} id={number} onClick={handleClick} className={currentPage === number ? "active":null}>{number}</li>
    </ul>
  );
});



useEffect(()=>{
  getData();
},[])



  return (
    <div className="App">
      <h2>Karthik</h2>
      {
        currentItems.map((data,index )=>(
          <div className='contain'>
            <h2>{index}</h2>
            <h6>{data.userId}</h6>
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.completed}</p>
          </div>
        ))
      }
      {constrenderPageNum}
    </div>
  );
}
export default App;
