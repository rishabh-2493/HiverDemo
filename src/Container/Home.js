import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { CommonActions } from "@react-navigation/native";
import { callApi } from '../ApiClient/ApiClient'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            respData:[],
            updated:false
        }
    }

    componentDidMount() {
        this.getData()
    }

    async getData(){
        this.setState({loading : true})
        var res = await callApi();
        console.log(res)
        if(res){
            for(let obj in res.item){
                obj["isExpanded"] = false
            }
            this.setState({data: res.items})
            
        } else{

        this.setState({error : true})
        }
        this.setState({loading : false})
    }

    componentWillUnmount() {
    }

    retry(){
        this.setState({error:false})
        this.getData()
    }

    expand(index){
        if(this.state.data[index].isExpanded){
            this.state.data[index].isExpanded = !this.state.data[index].isExpanded
        } else{
            for(let i = 0; i < this.state.data.length; i++){
                this.state.data[i].isExpanded = false
            }
            this.state.data[index].isExpanded = true
        }
        this.setState({updated: !this.state.updated})
    }
  
    render() {
        return (
        <View style={{flex:1}}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor={"#ffffff"}
                translucent={false}/>
            <View style={{flexDirection:'row', height:Platform.OS == 'ios'?75:50, paddingTop:Platform.OS == 'ios'?15:0, backgroundColor:"#ffffff", alignItems:'center', paddingStart:15, shadowColor: '#000', shadowOffset: { width: 1, height: 1 }, shadowOpacity:  0.4, shadowRadius: 3,elevation: 5}}>
                <View style={{width:20, height:20}}></View>
                <View style={{flex:1}}></View>
                <Text style={{color:'#000000', fontWeight:'bold', fontSize:18, alignSelf:'center'}}>Trending</Text>
                <View style={{flex:1}}></View>
                <Image style={{with:20, height:20}} source={require('../../assets/menu_dots.png')} resizeMode='contain'></Image>
            </View>

            {
                this.state.loading
                ?
                    <View style={{position:'absolute', top:0, bottom:0, left:0, right:0, justifyContent:'center', alignItems:'center'}}>
                        <ActivityIndicator size="large" color='blue' />
                    </View>
                :
                    
                        this.state.error 
                        ?
                        <View style={{justifyContent:'center', alignItems:'center', flex:1, flexDirection:'column'}}>
                            <View style={{flex:1}}></View>
                            <Image style={{width:220, height:220}} resizeMode='contain' resizeMethod='resize' source={require('../../assets/nointernet_connection.png')}></Image>
                            <Text style={{color:'#4a4a4a', fontWeight:'bold', fontSize:18, alignSelf:'center', marginTop:24}}>Something went wrong..</Text>
                            <Text style={{color:'#929292', fontSize:15, alignSelf:'center', marginTop:8}}>An alien is probably blocking your signal.</Text>
                            <View style={{flex:1}}></View>
                            <TouchableOpacity style={{height:50, backgroundColor:"#ffffff", margin:20, borderColor:"#31b057", borderWidth:1, alignSelf:'stretch', justifyContent:'center'}}
                            onPress={() => this.retry()}>
                                <Text style={{color:'#31b057', fontSize:15, alignSelf:'center'}}>Retry</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <FlatList
                            extraData={this.state.updated}
                            data={this.state.data}
                            showsVerticalScrollIndicator={true}
                            style={{flexGrow:0}}
                            renderItem={({ item: rowData, index: index }) => {  
                                return(
                                    <View style={{backgroundColor:"#ffffff"}}>
                                        <TouchableOpacity style={{padding:10, flexDirection:'row'}} onPress={() => this.expand(index)}>
                                            <Image style={{height:60, width:60, borderRadius:30 }} source={{uri: rowData.owner.avatar_url}} resizeMode={'cover'}></Image>
                                            <View style={{justifyContent:'center', marginStart:20, flex:1}}>
                                                <Text style={{color:'#929292', fontSize:12}}>{rowData.full_name}</Text>
                                                <Text style={{color:'#4a4a4a', fontWeight:'bold', fontSize:15, marginTop:5}} numberOfLines={1}>{rowData.description}</Text>
                                            </View>
                                        </TouchableOpacity>
                                        {
                                            rowData.isExpanded
                                            ?
                                                <View style={{marginBottom:20}}>
                                                    <View style={{justifyContent:'center', marginStart:90, flex:1}}>
                                                        <Text style={{color:'#929292', fontSize:12}}>{rowData.html_url}</Text>
                                                        <View style={{flexDirection:'row', marginTop:10, marginEnd:10, alignItems:'center'}}>
                                                            <View style={{backgroundColor:'red', width:10, height:10, borderRadius:5}}></View>
                                                            <Text style={{marginStart:5, color:"#929292"}}>{rowData.language?rowData.language:"N/A"}</Text>

                                                            <Image style={{width:15, height:15, marginStart:15}} source={require('../../assets/stars.png')} resizeMode={'stretch'}></Image>
                                                            <Text style={{marginStart:5, color:"#929292"}}>{rowData.watchers}</Text>

                                                            <Image style={{width:15, height:15, marginStart:15}} source={require('../../assets/forks.png')}></Image>
                                                            <Text style={{marginStart:5, color:"#929292"}}>{rowData.forks}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            :
                                                null
                                        }
                                        <View style={{backgroundColor:"#e8e8e8", height:1}}></View>
                                    </View>
                                );
                            }}
                            horizontal={false}
                            keyExtractor={(item, index) => index}
                            />
            }

        </View>
        );
    }
}

export default Home;