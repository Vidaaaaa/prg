import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';



export class FormPersonalDetails extends Component{
     
    
    handleSubmit = e => {
        e.preventDefault();
        const checkedValues = Array.from(e.target.course).map(el => [
          el.id,
          el.checked
        ]);
        console.log(Object.fromEntries(checkedValues));
      };
    continue = e => {
        e.preventDefault();
        
        console.log(this.props.values.work);
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render(){
        const {values, handleChange} = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                         {["com", "org", "ir"].map(i => (
                             <label key={i}>
                                 {i}
                                 <input type="checkbox" id={i} name="course" />
                            </label>
                         ))}
                        <button type="submit">ارسال</button>
                        </form> 
                    </div>
                    <RaisedButton
                     label="بعدی"
                     primary={true}
                     style={styles.button}
                     onClick={this.continue}
                    />
                   <RaisedButton
                    label="بازگشت"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles ={
    button:{
        margin:15
    }
}
export default FormPersonalDetails