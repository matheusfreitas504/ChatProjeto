import { View, Text, ImageBackground,StyleSheet,FlatList} from "react-native";
import messages from "../../assets/data/messages";
import bg from "../../assets/images/BG.png";
import Message from "../components/Message";
import InputBox from "../components/InputBox";
import { useRoute,useNavigation } from "@react-navigation/native";
import{useEffect} from "react";



const ChatScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  

  useEffect(() => {

      navigation.setOptions({title: route.params.name});
    }, [route.params.name]);

  return (
    <ImageBackground source={bg} style={styles.bg}>
        <FlatList
      data={messages}
        renderItem={({ item }) => <Message message={item} />}
        style={styles.list}
        inverted
        />
        <InputBox/>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
  
    bg: {
      flex: 1,
    },
    list: {
        padding: 10,
    },
  });
  
  

export default ChatScreen;

