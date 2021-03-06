import React, { Component } from "react";
import { View } from "react-native";
import { RootStack } from "../router/router";
import OneSignal from "react-native-onesignal";

OneSignal.configure({})

export default class App extends Component {
    componentWillMount() {
        OneSignal.init("6ea03bc1-833c-47b4-adda-1700694659b1");

        // OneSignal.addEventListener("received", this.onReceived);
        // OneSignal.addEventListener("opened", this.onOpened);
        OneSignal.addEventListener("ids", this.onIds);
    }

    componentWillUnmount() {
        // OneSignal.removeEventListener("received", this.onReceived);
        // OneSignal.removeEventListener("opened", this.onOpened);
        OneSignal.removeEventListener("ids", this.onIds);
    }

    onReceived(notification) {
        console.log("Notification received: ", notification);
    }

    onOpened(openResult) {
        console.log("Message: ", openResult.notification.payload.body);
        console.log("Data: ", openResult.notification.payload.additionalData);
        console.log("isActive: ", openResult.notification.isAppInFocus);
        console.log("openResult: ", openResult);
    }

    onIds(device) {
        console.log("Device info: ", device);
    }

    render() {
        return <RootStack />;
    }
}
