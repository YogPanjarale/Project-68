import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';


class In extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    Instagram 
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
        color: "#e84f48",
        fontSize: 20,
        fontWeight: 'bold'
    }
}
)
export default In;