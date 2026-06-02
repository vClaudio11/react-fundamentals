
interface GreetingProps {
  name: string
  course: string
  role?: string
}

function App() {
  return ( 
    <div>
      <h1>Hello react</h1>
      <Greeting name="Von Claudio" course="Mechatronic Engineering"/>
      <Greeting name="Jane Doe" course="Computer Science" role="student" />
    </div>
    )
}

export default App

function Greeting({ name, course, role}: GreetingProps ) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{course}</p>
      {role && <p>{role}</p>}
    </div>
  )
}