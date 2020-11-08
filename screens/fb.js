import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';


class fb extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style ={styles.text}>
                    Facebook 
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
    , text: {
        color: "#005CC8",
        fontSize:20,
        fontWeight:'bold'
    }
}
)
export default fb;