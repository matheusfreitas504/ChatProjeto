import ChatListItem from "../components/ChatListItem";
import chats from "../../assets/data/chats";
import {View,Text,FlatList} from "react-native";


const ChatsScreen = () => {
    return (
        <View>
            <FlatList 
                data={chats}
                renderItem={({item}) => <ChatListItem chat={item}/>}
            />
        </View>
    );
};

export default ChatsScreen;