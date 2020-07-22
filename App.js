
import React from "react";
import {View,Text,StyleSheet,Image,TouchableOpacity,Alert} from "react-native";



export default class App extends React.Component{
  myButton = ()=>{
    var numBer = this.getRandomNumber();
    switch (numBer)
    {
      case 1:
        this.setState({
          uri:require('./assets/dice1.png')})
          break;
      case 2:
        this.setState({
          uri:require('./assets/dice2.png')})
          break;
      case 3:
        this.setState({
          uri:require('./assets/dice3.png')})
          break;
      case 4:
        this.setState({
          uri:require('./assets/dice4.png')})
          break;
      case 5:
        this.setState({
          uri:require('./assets/dice5.png')})
          break;
      case 6:
        this.setState({
          uri:require('./assets/dice6.png')})
          break;
      default:
        Alert.alert("hello");


    }
  
  }
  getRandomNumber= ()=>{
    return Math.floor(Math.random()*6)+1;

   }
  constructor(props){
    super(props);
    this.state =
    {
                uri:require('./assets/dice1.png')
    }
    };

   

  render(){

    return( 
    <View style={styles.container}>
      <Text style={styles.text} >The Ludo Game</Text>
      <Image source={require('./assets/ludo1.jpg')}  style={styles.backgroundImage}/>
         
      <Image source={this.state.uri}/>
      <TouchableOpacity
        onPress={this.myButton}
      >
      <Text style={styles.button}>Let's Play!!</Text>
      </TouchableOpacity>
    </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    fontSize:60,
    backgroundColor:"#c1c1c1",
    padding:20
  
  },
  backgroundImage:{
    width:350,
    height:380,
  },
  button:{
    fontSize:30,
    marginTop:20,
    color:"white",
    fontWeight:"bold",
    borderWidth:2,
    padding:20,
    borderRadius:10

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    paddingTop:20
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
  
})