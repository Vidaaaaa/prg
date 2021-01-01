import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';


export class Conform extends Component{
    continue = e => {
        e.preventDefault();
        //PROCESS FORM//
        const i ={name:this.props.values.name,work:this.props.values.work,domain:this.props.values.domain}
        localStorage.setItem('person',JSON.stringify(i));
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const {values:{name, work, domain}} = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="  Confirm User Dtat"/>
                    <List>
                        <ListItem
                        primaryText="نام"
                        secondaryText={name}
                        />
                        
                        <ListItem
                        primaryText="حوزه کاری"
                        secondaryText={work}
                        />
                        <ListItem
                        primaryText="دامنه"
                        secondaryText={domain}
                        />
                        
                    
                    </List>
                    <br/>
                    <RaisedButton
                    label="تایید و ثبت سفارش"
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
export default Conform