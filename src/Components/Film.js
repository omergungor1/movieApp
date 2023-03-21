import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, FlatList, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Film = ({ item }) => {
    const history = useNavigation();

    return (
        <TouchableOpacity onPress={() => history.navigate('MyView', { id: item.id })} style={styles.container}>
            <View style={styles.image_container}>
                <View style={styles.category_container}>
                    <Text style={styles.category}>{item.category}</Text>
                </View>
                <View style={styles.star_container}>
                    <Text style={styles.star}>{item.star}</Text>
                </View>
                <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <View style={styles.detail_container}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        alignItems: 'center',
    },
    image: {
        height: 200,
        width: '100%',
        borderRadius: 5,
    },
    image_container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

        width: '100%',
        height: 200,
    },
    detail_container: {
        marginTop: 5,
    },
    title: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '500',
    },
    category: {
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
        color: 'white',
    },
    category_container: {
        position: 'absolute',
        zIndex: 9,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        left: 5,
        top: 5,
        padding: 5,
    },
    star_container: {
        position: 'absolute',
        zIndex: 9,
        borderRadius: 100,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EC712B',
        right: 5,
        top: 5,
    },
    star: {
        fontSize: 14,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
    },
});

export default Film;