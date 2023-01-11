import { StyleSheet } from 'react-native';




export default StyleSheet.create({
  
  header: {
    backgroundColor: 'lightgrey',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTwo: {
    backgroundColor: 'lightgrey',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
  },
  headerText: {
    color: '#000',
    fontSize: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#000',
  },
  search:{
    maxWidth:250,
    height: 32,
    padding:0,
    backgroundColor:"white",
    borderRadius: 5,
    fontSize:18,
    
  },
  announcementBox:{

    flexDirection:"row",
  },
  teamBox:{
    padding:10,
    alignItems:"center",
    marginTop:12,
    marginLeft: 10,
    marginRight:10,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  newCard:{
    backgroundColor:"white",
    padding:5,
    alignItems:"center",
    justifyContent:"center",
    borderColor:"yellow",
    borderWidth:1,
    borderRadius:10,
    elevation:20,
    shadowColor: '#000',
  }

});
