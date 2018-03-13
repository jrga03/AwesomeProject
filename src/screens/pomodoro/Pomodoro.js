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
import { POMODORO_MARGIN } from '../../constants';

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

                {/* <Text style={[styles.row]}>
                    <Text>Session Length</Text>
                    <Text>Break Length</Text>
                </Text>

                <View style={[styles.row]}>
                    <TouchableOpacity>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text>25</Text>
                    <TouchableOpacity>
                        <Text>+</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text>5</Text>                    
                    <TouchableOpacity>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View> */}

                <TouchableOpacity 
                    style={styles.reset}
                    onPress={() => false} >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Reset</Text>
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
        height: Dimensions.get('window').width - (POMODORO_MARGIN * 2),
        width: Dimensions.get('window').width - (POMODORO_MARGIN * 2),
        borderWidth: 3,
        borderRadius: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    timerBackground: {
        backgroundColor: 'olive',
        height: Dimensions.get('window').width - (POMODORO_MARGIN * 2) - 6,
        width: Dimensions.get('window').width - (POMODORO_MARGIN * 2) - 6,
        borderRadius: Dimensions.get('window').width,
        position: 'absolute',
        flex: 1,
        zIndex: -1,
    },
    timerText: {
        fontSize: PixelRatio.get()*40,
    },
    timerTime: {
        fontSize: PixelRatio.get()*40,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    reset: {
        backgroundColor: '#555',
        padding: 5,
    },
});