import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Button,
    StyleSheet,
    Dimensions,
    PixelRatio
} from 'react-native';

import { Length } from './Length';
import { 
    POMODORO_MARGIN,
    COLORS
} from '../../constants';

const TIMER_SIZE = Dimensions.get('window').width - (POMODORO_MARGIN * 2);
const TIMER_BORDER = 3;
const TIMER_BG = Dimensions.get('window').width - (POMODORO_MARGIN * 2) - (TIMER_BORDER * 2); 

export default class PomodoroClock extends Component {
    state = {
        mode: '',

    };

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity 
                    style={styles.timer}
                    onPress={ () => false } >
                    <View style={styles.timerBackground} />
                    <Text style={styles.timerText}>Focus!</Text>
                    <Text style={styles.timerTime}>25:00</Text>
                </TouchableOpacity>

                <View style={styles.row} >
                    <Length 
                        title="Session"
                        length="25"
                        minus={() => false}
                        plus={() => false} />
                    <Length
                        title="Break"
                        length="5"
                        minus={() => false}
                        plus={() => false} />
                </View>

                <TouchableOpacity 
                    style={styles.reset}
                    onPress={() => false} >
                    <Text style={styles.resetText}>Reset</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        padding: POMODORO_MARGIN,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timer: {
        height: TIMER_SIZE,
        width: TIMER_SIZE,
        borderWidth: TIMER_BORDER,
        borderRadius: TIMER_SIZE/2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    timerBackground: {
        backgroundColor: 'olive',
        height: TIMER_BG,
        width: TIMER_BG,
        borderRadius: TIMER_BG/2,
        position: 'absolute',
        flex: 1,
        zIndex: -1,
    },
    timerText: {
        fontSize: PixelRatio.get()*40,
        color: COLORS.TEXT
    },
    timerTime: {
        fontSize: PixelRatio.get()*40,
        color: COLORS.TEXT
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    reset: {
        backgroundColor: '#555',
        padding: 5,
        paddingRight: 10,
        paddingLeft: 10,
    },
    resetText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: PixelRatio.get()*8
    },
});