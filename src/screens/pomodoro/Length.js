import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    PixelRatio
} from "react-native";
import { Icon } from 'react-native-elements';

import { COLORS } from '../../constants';

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

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => minus()} >
                    <Icon 
                        name='remove'
                        type='material-icons'
                        size={25}
                        color={COLORS.TEXT} />
                </TouchableOpacity>

                <Text style={styles.text}>{length}</Text>
                
                <TouchableOpacity 
                    style={styles.button}                    
                    onPress={() => plus()} >
                    <Icon 
                        name='add'
                        type='material-icons'
                        size={25}
                        color={COLORS.TEXT} />
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
        color: COLORS.TEXT
    },
    text: {
        fontSize: PixelRatio.get()*12,
        paddingRight: 10,
        paddingLeft: 10,
        color: COLORS.TEXT
    },
    button: {
        justifyContent: 'center',
    },
});

export { Length };