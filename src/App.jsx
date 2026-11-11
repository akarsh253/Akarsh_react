import Chai from "./Chai"

// this app.jsx is used to write my code and main.jsx is used to execute the code functions ultimately the main file gets executed.

//this App function is being rendered in main.jsx and all the written html here is rendered in index.html so ultimately all the work is being done on that one html file.
function App() {
  
//this chai gets imported from a component known as chai.jsx
//the empty <>,</> are known as "fragments" in react.
  return (
    <>
      <h4>The text written below has been imported from a seperate component</h4>
     <Chai/>
    </>
  )
}

export default App