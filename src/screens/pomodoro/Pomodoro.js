import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Button,
    StyleSheet,
    Dimensions,
    PixelRatio,
    LayoutAnimation,
    NativeModules
} from "react-native";

import { Length } from "./Length";
import { POMODORO_MARGIN, COLORS } from "../../constants";

const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && 
    UIManager.setLayoutAnimationEnabledExperimental(true);

const CustomLayoutAnimation = {
    duration: 200,
    create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleXY,
    },
    update: {
        type: LayoutAnimation.Types.easeIn,
        // property: LayoutAnimation.Properties.opacity,        
    },
};

const TIMER_SIZE = Dimensions.get("window").width - POMODORO_MARGIN * 2;
const TIMER_BORDER = 3;
const TIMER_BG_SIZE = Dimensions.get("window").width - POMODORO_MARGIN * 2 - TIMER_BORDER * 2;

let timer;

export default class PomodoroClock extends Component {
    state = {
        type: "",
        sessionLength: 25,
        breakLength: 5,
        isPaused: true,
        timeInMs: ""
    };

    convertToMsec = (minutes) => minutes * 1000 * 60;

    convertMsecToMin = (msec) => 
        Math.floor((msec % (1000 * 60 * 60)) / (1000 * 60));
    ;

    convertMsecToSec = (msec) => {
        let sec = Math.floor((msec % (1000 * 60)) / 1000);
        return sec < 10 ? `0${sec}` : sec;
    };

    timerBackground() {
        let percentDiff, color;

        if ((this.state.type == "Focus")) {
            percentDiff =
                this.state.timeInMs /
                this.convertToMsec(this.state.sessionLength);
            color = "#87A878";
        } else {
            percentDiff =
                this.state.timeInMs /
                this.convertToMsec(this.state.breakLength);
            color = "#C95E5C";
        }
        let size = TIMER_BG_SIZE * percentDiff;
        let radius = size / 2;
        return {
            backgroundColor: color,
            height: size,
            width: size,
            borderRadius: radius
        };
    }

    countdown() {
        // LayoutAnimation.configureNext(CustomLayoutAnimation);
        this.setState({ timeInMs: this.state.timeInMs - 1000 },
            () => {
                
            }
        );
        if (this.state.timeInMs <= 0) {
            if (this.state.type === "Break") {
                this.setState({
                    type: "Focus",
                    timeInMs: this.convertToMsec(this.state.breakLength)
                });
            } else {
                this.setState({
                    type: "Break",
                    timeInMs: this.convertToMsec(this.state.sessionLength)
                });
            }
        }
    }

    onAdd(type) {
        if (this.state.isPaused) {
            if (type === "session" && this.state.sessionLength < 59) {
                let newLength = this.state.sessionLength + 1;

                this.setState({
                    type: "Focus",
                    sessionLength: newLength,
                    timeInMs: this.convertToMsec(newLength)
                });
            } else if (type === "break" && this.state.breakLength < 59) {
                this.setState({
                    type: "Focus",
                    breakLength: this.state.breakLength + 1,
                    timeInMs: this.convertToMsec(this.state.sessionLength)
                });
            }
        }
    }

    onSubtract(type) {
        if (this.state.isPaused) {
            if (type === "session" && this.state.sessionLength > 1) {
                let newLength = this.state.sessionLength - 1;

                this.setState({
                    type: "Focus",
                    sessionLength: newLength,
                    timeInMs: this.convertToMsec(newLength)
                });
            } else if (type === "break" && this.state.breakLength > 1) {
                this.setState({
                    type: "Focus",
                    breakLength: this.state.breakLength - 1,
                    timeInMs: this.convertToMsec(this.state.sessionLength)
                });
            }
        }
    }

    reset() {
        this.setState({
            type: "Focus",
            sessionLength: 25,
            breakLength: 5,
            isPaused: true,
        },
        () => this.setState({timeInMs: this.convertToMsec(this.state.sessionLength)})
    );
        clearInterval(timer);
    }

    handlePressTimer() {
        if (this.state.isPaused) {
            timer = setInterval(() => this.countdown(), 1000)
        } else {
            clearInterval(timer);
        }
        this.setState({isPaused: !this.state.isPaused})
    }

    componentWillMount() {
        this.setState({
            timeInMs: this.convertToMsec(this.state.sessionLength),
            type: "Focus",
            isPaused: true
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.timer}
                    onPress={() => this.handlePressTimer()}>
                    <View
                        style={[styles.timerBackground, this.timerBackground()]}
                    />
                    <Text style={styles.timerText}>
                        {`${this.state.type}!`}
                    </Text>
                    <Text style={styles.timerTime}>
                        {`${this.convertMsecToMin(this.state.timeInMs)}:${this.convertMsecToSec(this.state.timeInMs)}`}
                    </Text>
                </TouchableOpacity>

                <View style={styles.row}>
                    <Length
                        title="Session"
                        length={this.state.sessionLength}
                        minus={() => this.onSubtract("session")}
                        plus={() => this.onAdd("session")}
                    />
                    <Length
                        title="Break"
                        length={this.state.breakLength}
                        minus={() => this.onSubtract("break")}
                        plus={() => this.onAdd("break")}
                    />
                </View>

                <TouchableOpacity style={styles.reset} onPress={() => this.reset()}>
                    <Text style={styles.resetText}>Reset</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ccc",
        padding: POMODORO_MARGIN,
        justifyContent: "center",
        alignItems: "center"
    },
    timer: {
        height: TIMER_SIZE,
        width: TIMER_SIZE,
        borderWidth: TIMER_BORDER,
        borderRadius: TIMER_SIZE / 2,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30
    },
    timerBackground: {
        // backgroundColor: "olive",
        // height: TIMER_BG,
        // width: TIMER_BG,
        // borderRadius: TIMER_BG_SIZE / 2,
        position: "absolute",
        flex: 1,
        zIndex: -1
    },
    timerText: {
        fontSize: PixelRatio.get() * 40,
        color: COLORS.TEXT
    },
    timerTime: {
        fontSize: PixelRatio.get() * 40,
        color: COLORS.TEXT
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    reset: {
        backgroundColor: "#555",
        padding: 5,
        paddingRight: 10,
        paddingLeft: 10
    },
    resetText: {
        color: "white",
        fontWeight: "bold",
        fontSize: PixelRatio.get() * 8
    }
});
