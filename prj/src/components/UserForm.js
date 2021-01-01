import React,{Component} from "react"
import FormName from "./FormName"
import FormWork from "./FormWork"
import FormDomain from "./FormDomain"
import Conform from "./Conform"
import Success from "./Success"


export class UserForm extends Component{
  state = {
    step:1,
    name:'', 
    work:'',
    domain:'',
    
    

  }

  //Proceed to next step
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    });
  }

   // Go back to prev step
   prevStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1
    });
  }

  // Handel fields change
  handleChange = input => e =>{
    this.setState({[input]: e.target.value});
  }
  render(){
    const {step} = this.state;
    const {name, work, domain} = this.state;
    const values ={name, work, domain}
    
switch(step){
  case 1:
    return(
      <FormName 
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
      />
    )
  case 2:
    return(
      <FormWork
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        handleChange={this.handleChange}
        values={values}
      />
    )
    case 3:
      return(
        <FormDomain
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
        />
      )
  case 4:
    return(
      <Conform 
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        values={values}
      />
    )
  case 5:
    return <Success/>
  default:
    return ('Hello');
    
  }
 }
}
export default UserForm