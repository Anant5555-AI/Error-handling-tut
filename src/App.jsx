
// import React from "react";

// class ErrorBoundary extends React.Component {//handle error during rendering
//   constructor(props) {
//     super(props);//we get props from parent (using super)
//     this.state = { hasError: false }//initaiily it is false 
//   }

//   componentDidCatch(error, info) {//this function will run if i get error 
//     this.setState({hasError: true});//lifecycle method of class comp
//     console.log("Error caught: ", error, info);//both error and info are objects
//   }

//   render() {//ui part using class nethod
//     if(this.state.hasError) {
//       return <h2>Something went wrong!</h2>
//     }
//     return this.props.children;//children here is buggy comp
//   }
// }//error boundary created now let me use this ...

// function BuggyComponent() {//we have error in bugyy comp 
//   throw new Error("Error occured here!!!");//intentinal error ....crating instance of error ..this is custom error 
//   return <h1>Everything is fine!</h1>;
// }

// export default function App() {
//   return (
//     <ErrorBoundary>
//       <BuggyComponent />
//     </ErrorBoundary>
//   )
// }
// //as we have created using class comp ...we have some limitations like it cannot handle of use effect or jsx syntax error 


import React from 'react'
import Counter from './Counter'

const App = () => {
  return (
    <div Style={{padding:"20px"} }>
      <Counter />
    </div>
  )
}

export default App