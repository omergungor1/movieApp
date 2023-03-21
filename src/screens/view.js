import React, { useState } from 'react'
import { View, StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Data from '../Data/Movies.json'
import StarRating from 'react-native-star-rating'
import Modal from "react-native-modal"
import { Video } from 'expo-av'

const MyView = props => {
    const id = props.route.params.id;
    const item = Data.filter((item) => item.id == id)[0];
    const [isModalVisible, setModalVisible] = useState(false);
    const Cast = ({ cast }) => {
        return (
            <View style={styles.castContainer}>
                <Image source={{ uri: cast.photo }} style={styles.cast_image} />
                <Text style={styles.cast_name}>{cast.name}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, }}
            >
                <View style={styles.header}>
                    <View style={styles.controls} >
                        <TouchableOpacity
                            onPress={() => props.navigation.goBack()}
                            style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name="chevron-left" size={30} color={'white'} />
                            <Text style={{ color: 'white', fontSize: 16, marginLeft: 5, fontWeight: 700, }} >Back</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="share" size={30} color={'white'} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.overlay} />
                    <Image source={{ uri: item.image }} style={styles.header_image} />
                    <View style={styles.playbutton_container} >
                        <TouchableOpacity onPress={() => {
                            setModalVisible(!isModalVisible);
                        }} style={styles.playButton} >
                            <Icon name='play' size={25} color={'white'} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.informationImageContainer} >
                        <Image style={styles.information_image} source={{ uri: item.image }} />
                    </View>
                    <View style={styles.informationNameContainer} >
                        <Text style={styles.insformationName}>{item.name}</Text>
                    </View>

                </View>
                <View style={styles.body} >
                    <View style={{ justifyContent: 'flex-end', flexDirection: 'row', }} >
                        <View style={{ flex: 1, }} />
                        <View style={styles.topRight} >
                            <View style={styles.topRightItem} >
                                <Icon name='user' size={20} />
                                <Text style={styles.topRightItemText} >{item.director}</Text>
                            </View>
                            <View style={styles.topRightItem} >
                                <Icon name='folder' size={20} />
                                <Text style={styles.topRightItemText} >{item.category}</Text>
                            </View>
                            <View style={styles.topRightItem} >
                                <Icon name='clock' size={20} />
                                <Text style={styles.topRightItemText} >{item.time}</Text>
                            </View>
                            <View style={styles.topRightItem} >

                                <StarRating
                                    disabled={true}
                                    maxStars={5}
                                    starSize={25}
                                    fullStarColor={'#DB3069'}
                                    halfStarColor={'#DB3069'}
                                    rating={item.star}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                />

                            </View>
                        </View>
                    </View>
                    <View style={styles.content} >
                        <Text style={styles.contentText} >{item.title}</Text>
                    </View>
                    <View style={styles.casts} >
                        {item.casts.map(item => (
                            <Cast cast={item} />
                        ))}
                    </View>
                </View>
            </ScrollView>

            <Modal isVisible={isModalVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalBody}>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(!isModalVisible);
                            }}
                            style={styles.modalCloseButton}>
                            <Icon name='times-circle' size={25} color={'white'} />
                        </TouchableOpacity>

                        <Video
                            source={{ uri: item.video }}
                            rate={1.0}
                            volume={1.0}
                            isMuted={false}
                            resizeMode={"contain"}
                            shouldPlay
                            isLooping
                            style={styles.video}
                        />
                    </View>
                </View>
            </Modal>

        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    header: {

    },
    header_image: {
        width: '100%',
        height: 300,
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0,
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 9,
    },
    playbutton_container: {
        position: 'absolute',
        // backgroundColor: '#EC712B',
        zIndex: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    playButton: {
        width: 60,
        height: 60,
        borderRadius: 100,
        backgroundColor: '#DB3069',
        alignItems: 'center',
        justifyContent: 'center',
    },
    controls: {

        position: 'absolute',
        flexDirection: 'row',
        zIndex: 11,
        top: 20,
        paddingHorizontal: 20,
        width: '100%',
        justifyContent: 'space-between',
    },
    information_image: {
        height: 180,
        width: 120,
        borderRadius: 5,
        borderColor: 'rgba(221,221,221,0.3)',
        borderWidth: 1,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    informationImageContainer: {
        zIndex: 11,
        position: 'absolute',
        bottom: -100,
        left: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    informationNameContainer: {
        zIndex: 11,
        position: 'absolute',
        bottom: 20,
        right: 10,
        width: 210,
    },
    insformationName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 700,
    },
    body: {
        flex: 1,
    },
    topRight: {
        flex: 1.5,
        marginHorizontal: 5,
        paddingVertical: 20,
    },
    topRightItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    topRightItemText: {
        left: 10,
    },
    content: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    contentText: {
        fontSize: 19,
        color: '#666666',
    },
    casts: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    castContainer: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 10,
    },
    cast_image: {
        height: 150,
        width: 100,
        borderRadius: 5,
    },
    cast_name: {
        fontSize: 12,
        marginTop: 5,
        fontWeight: 300,
        textAlign: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBody: {
        backgroundColor: 'white',
        height: 300,
        width: '100%',
    },
    modalCloseButton: {
        position: 'absolute',
        zIndex: 9999,
        top: -15,
        right: -15,
        backgroundColor: 'rgba(0,0,0,0.6)',
        height: 35,
        width: 35,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    video: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    }
});

export default MyView;