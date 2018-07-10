import React from 'react';
import Login from './Login';
import { Text, View , TextInput, ScrollView, StyleSheet} from 'react-native';

import {connect} from 'react-redux';
import UserPage from "./UserPage";

const styles = StyleSheet.create({  
    container: {    
        flex: 1,    
        top:100
    }
});


class Root extends React.Component {
    render() {
        console.log("in Root "+JSON.stringify(this.props));
        if(this.props.user.hasLogin===true){
            return(

                <UserPage/>
            );
        }
        else{
            return (
                <View style={styles.container}>
                    <Login />
                </View>
                
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};


export default connect(mapStateToProps)(Root);