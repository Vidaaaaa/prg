import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



export class FormPersonalDetails extends Component{

   /* setData(){
        let obj = {name:this.props.values.name,work:this.props.values.work}
        localStorage.setItem('myData', JSON.stringify(obj));

    }
    getData(){
        let data = localStorage.getItem('myData');
        const state = data;
        data = JSON.parse(data);
        console.log('domain is',data.name)
        
    }*/


    continue = e => {
        e.preventDefault();
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
                    
                    
                  {/* <div>
                    <button onClick={() => this.setData()}>نمایش  دامنه های پیشنهادی</button>
                    <br/>
                    <br/>
                    
                    <button onClick={() => this.getData()}>انتخاب دامنه مورد نظر</button>
                  </div>*/}
                  <span>
                      {
                          this.props.values.name.split(' ')[0] + this.props.values.work[0]
                          
                      }
                  </span>
                    <br/>
                    <TextField
                    hintText="دامنه پیشنهادی خود را وارد کنید"
                    floatingLabelText="دامنه "
                    onChange={handleChange('domain')}
                    defaultValue={values.domain}
                    />
                    <br/>
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