import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

function RenderItemComponent (props) {
    const [data, setData] = useState(props.data);
    useEffect(() => { setData(props.data) }, [props.data]);
    return(
        <View style={{backgroundColor:"#ffffff"}}>
            <TouchableOpacity style={{padding:10, flexDirection:'row'}} onPress={() => props.onClick(props.index)}>
                <Image style={{height:60, width:60, borderRadius:30 }} source={{uri: props.data.owner.avatar_url}} resizeMode={'cover'}></Image>
                <View style={{justifyContent:'center', marginStart:20, flex:1}}>
                    <Text style={{color:'#929292', fontSize:12}}>{props.data.full_name}</Text>
                    <Text style={{color:'#4a4a4a', fontWeight:'bold', fontSize:15, marginTop:5}} numberOfLines={1}>{props.data.description}</Text>
                </View>
            </TouchableOpacity>
            {
                props.isExpanded && props.index == props.activeIndex
                ?
                    <View style={{marginBottom:20}}>
                        <View style={{justifyContent:'center', marginStart:90, flex:1}}>
                            <Text style={{color:'#929292', fontSize:12}}>{props.data.html_url}</Text>
                            <View style={{flexDirection:'row', marginTop:10, marginEnd:10, alignItems:'center'}}>
                                <View style={{backgroundColor:'red', width:10, height:10, borderRadius:5}}></View>
                                <Text style={{marginStart:5, color:"#929292"}}>{props.data.language?props.data.language:"N/A"}</Text>

                                <Image style={{width:15, height:15, marginStart:15}} source={require('../../assets/stars.png')} resizeMode={'stretch'}></Image>
                                <Text style={{marginStart:5, color:"#929292"}}>{props.data.watchers}</Text>

                                <Image style={{width:15, height:15, marginStart:15}} source={require('../../assets/forks.png')}></Image>
                                <Text style={{marginStart:5, color:"#929292"}}>{props.data.forks}</Text>
                            </View>
                        </View>
                    </View>
                :
                    null
            }
            <View style={{backgroundColor:"#e8e8e8", height:1}}></View>
        </View>
    );
}
export default RenderItemComponent;