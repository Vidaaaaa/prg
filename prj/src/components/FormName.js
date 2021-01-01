import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export class FormUserDetails extends Component{
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render(){
        const {values, handleChange} = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField
                    hintText="نام خود را وارد کنید"
                    floatingLabelText="نام"
                    onChange={handleChange('name')}
                    defaultValue={values.name}
                    />
                    <br/>
                    
                    <br/>
                    <RaisedButton
                    label="بعدی"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
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
export default FormUserDetails