React learning materials organised from @freecodecamp by jessica-llai


# create a react component 
class Kitten extends React.Component {
  constructor(props) {     # constructor is a class that calls super 
    super(props); # super is a function that  to call the constructor of the parent class
  }

  render() {
    return ( 
      <h1>Hi</h1>
    );
  }
}


# parent and child component 
 ChildComponent is defined with an ES6 arrow function 
 
 const ChildComponent = () => {
   return (
   <div>Child</div>;
   )
 };
 class ParentComponent extends React.Component {
   constructor(props) {
     super(props);
   }
   render() {
   return (
   <div>
   <p>Parent</p>
   {<ChildComponent/>} # this call the child 
   
   
   </div>;
   )
   }
 }
 
 # Render a Class Component to the DOM
 JSX render: ReactDOM.render(JSX, document.getElementById('challenge-node'))
 React render: ReacttDOM.render(<ReactComponentToRender />), document.getElementById('challenge-node')))
 
 # create my first React Component and render it to DOM 
 // Change code below this line
class MyComponent extends React.Component {
  constructor(props){
    super(props);
  };
  render(){
    return(
      <div><h1>My First React Component!</h1></div>
    )
  }
};

ReactDOM.render(<MyComponent/>, document.getElementById('challenge-node'));
 
 
 # Pass Props to a Stateless Functional Component
 child: <p>The current date is: {props.date}</p> # a stateless function 
 parent: <Child date={Date()} /> # call the 
 
 # pass an array with join()
const Ingredients =(props)=>{
  return (<div>
  <p>{props.lists.join(-)}</p>
  </div>)
}

class Dishes extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
    <div>
    <Ingredients lists="fish","tofu","cariender"/>
    <Ingredients lists="spinish","garlic","kimchi"/>
    </div>
    )
  }
}
 
 # default props
 child: ...<h1>Deposit</h1>...
 Deposit.defaultProps{values: 0}
 
 # override a props 
 child: cart: {props.quantity}
 items.defaultProps = {quantity= whatever}
 call the new quntity: <cart quantity={10}/>
 
 
 
 
 

