import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import Data from '../Data/Movies.json'
import NotificationData from '../Data/notification.json'
import SuggestedData from '../Data/suggested.json'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Film from '../Components/Film'
import Notification from '../Components/Notification'
import { ScrollView, TextInput } from 'react-native-gesture-handler';

export default function Index() {
    useEffect(() => {
        console.log(Data);
    }, []);

    const renderItem = ({ item }) => {
        return (
            <Film item={item} />
        );
    };

    const renderNotification = ({ item }) => {
        return (
            <Notification item={item} />
        );
    };

    const [isSearchOpen, setMSearchOpen] = useState(false);

    return (
        <SafeAreaView style={{ flex: 1 }} >
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.header_title}>MOVIES</Text>
                    <TouchableOpacity style={styles.searchContainer} onPress={() => { setMSearchOpen(!isSearchOpen); }}>
                        {isSearchOpen ? (
                            <TextInput
                                style={styles.searchInput}></TextInput>
                        ) : null}
                        <Icon name='search' size={17} color={'black'} style={{ position: 'absolute', right: 10, padding: 10, }} />
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                        <FlatList showsHorizontalScrollIndicator={false} data={NotificationData} renderItem={renderNotification} horizontal />
                    </View>
                    <View style={{ marginHorizontal: 20, }}>
                        <Text style={styles.body_title}>POPULAR</Text>
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 10, }}>
                        <FlatList style={{ flex: 1, }} showsVerticalScrollIndicator={false} numColumns={2} data={Data} renderItem={renderItem} />
                    </View>

                    <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                        <Text style={styles.body_title}>SUGGESTED</Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
                        <FlatList showsHorizontalScrollIndicator={false} data={SuggestedData} renderItem={renderNotification} horizontal />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 40,
        alignItems: 'center',
        height: 110,
    },
    header_title: {
        fontSize: 20,
        fontWeight: 700,
    },
    body: {
        flex: 1,
        marginBottom: 20,
    },
    body_title: {
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 15,
    },
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 220,
    },
    searchInput: {
        flex: 1,
        marginRight: 5,
        height: 30,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8,
        padding: 5,
        right: 5,
    },
});