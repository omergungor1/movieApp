import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Data from '../Data/Movies.json'
import NotificationData from '../Data/notification.json'
import SuggestedData from '../Data/suggested.json'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Film from '../Components/Film'
import Notification from '../Components/Notification'
import { ScrollView, TextInput } from 'react-native-gesture-handler';


export default function View2() {


    return (
        <SafeAreaView style={{ flex: 1 }} >
            <ScrollView>
                <Text>Hello World</Text>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
});