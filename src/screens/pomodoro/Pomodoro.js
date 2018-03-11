import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Button,
    StyleSheet
} from 'react-native';

export default class PomodoroClock extends Component {
    state = {
        mode: '',

    };

    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Text>Focus!</Text>
                    <Text>25:00</Text>
                </TouchableOpacity>

                <Text>
                    <Text>Session Length</Text>
                    <Text>Break Length</Text>
                </Text>

                <View>
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
                </View>
                <TouchableOpacity><Text>Reset</Text></TouchableOpacity>
            </View>
        );
    }
}