import React from "react";
import {View, FlatList} from "react-native";
import {Post} from "src/components/Post";


export const PostList = ({data, onOpen}) => {
    return (
        <View>
            <FlatList data={data}
                      keyExtractor={x => x.id}
                      renderItem={x => <Post data={x.item} onOpen={onOpen}/>}
            />
        </View>
    );
};