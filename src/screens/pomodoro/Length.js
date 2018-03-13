import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    PixelRatio
} from "react-native";

const Length = (props) => {
    const {
        title,
        length,
        minus,
        plus
    } = props;

    return (
        <View style={styles.container} >
            <Text style={styles.title}>{title} Length</Text>

            <View style={{ flexDirection: 'row' }}>

                {/* USE REACT NATIVE ELEMENTS */}
                
                <TouchableOpacity onPress={() => minus} >
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>

                <Text style={styles.text}> {length} </Text>
                
                <TouchableOpacity onPress={() => plus} >

                    {/* USE REACT NATIVE ELEMENTS */}

                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: PixelRatio.get()*10,
        textAlign: 'center',
    },
    text: {
        fontSize: PixelRatio.get()*12,
    }
});

export { Length };