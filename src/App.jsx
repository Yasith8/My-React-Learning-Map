import './App.css'
import TodoList from './components/ToDo List/TodoList'
import Array from './components/SumArray Validation/Array'
import Card from './components/Props-Parent to Child/Card' 
import Parent from './components/props-Child to Parent/Parent'

function App() {

  const studentList=[
    {name:"Yasith",grade:"2nd Year",stream:"Frontend"},
    {name:"Nemash",grade:"1st Year",stream:"Backtend"},
    {name:"Amanda",grade:"2nd Year",stream:"QA"},
    {name:"Damitha",grade:"3rd Year",stream:"CyberSecurity"},
    {name:"Sashini",grade:"1st Year",stream:"App Dev"},
  ]

  return (
    <div>
      <TodoList/>
      {/* <Parent/> */}
      {/* <Array/> */}

        {/* {studentList.map(item=>
        <Card name={item.name} grade={item.grade} stream={item.stream}/>    
        )} */}

      
    </div>
  )
}

export default App
