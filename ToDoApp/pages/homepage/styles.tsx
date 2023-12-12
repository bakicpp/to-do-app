import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    
    image: {
        marginTop: 16,
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop   : 16,
        marginBottom: 16,
        marginLeft: 16,
    },
    
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
      },
    
    
    newContainer: {
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 12,
        margin: 16,
        borderRadius: 24,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 7,
        elevation: 5,
        paddingHorizontal   : 16,
    
      },
    
    appbar: {
        backgroundColor: '#2196F3',
        height: 80,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
    },
    
    appbarTitle:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    
      container: {
        padding: 22,
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
      },
      input: {
        margin: 16,
        height: 40,
        width: 280,
        marginBottom: 16,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        color: '#333',
      },
    
      button: {
        backgroundColor: '#3498db',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        width: '100%',
        alignItems: 'center',
      },
    
      listContainer:{
        
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 12,
        margin: 16,
        borderRadius: 8,
        height: 70,
        width: 300,
        
        
      },
    
      checkBox: {
        marginRight: 8,
        width: 25,
        height: 25,
        backgroundColor: 'white',
        borderRadius: 100,
        alignItems: 'center',
        borderColor: 'green',
        borderWidth: 2,
    
      },
    });
    
    export default styles;