// import React, { useState } from 'react';
// import {
//     FlatList,
//     Image,
//     Text,
//     Modal,
//     TouchableOpacity,
//     View,
//     StyleSheet,
//     Pressable,
//     Button
// } from "react-native";

import { FlatList, Text, View, Image, Button, ButtonText } from '@gluestack-ui/themed';
import { useState } from 'react';
import { TouchableOpacity, Modal } from 'react-native';

  // Dummmy Data (Array of Object)
const datas = [
    {
        id: 1,
        title:
            "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
        },
    {
        id: 2,
        title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
        },
    {
        id: 3,
        title:
            "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
        },
    {
        id: 4,
        title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
        },
    {
        id: 5,
        title:
            "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
        },
    {
        id: 6,
        title:
            "Dorong Pengembangan UMKM, IT Telkom Surabaya Gandeng UD Rozi dalam Pembuatan Website",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/Salinan-IMG_0823-768x512.jpg",
    },
        {
        id: 7,
        title: "Mahasiswa ITTelkom Surabaya Menang Kompetisi di New Delhi",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghjk-768x492.jpg",
    },
        {
        id: 8,
        title:
            "Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset dari Kampus ITTelkom Surabaya",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
    },
        {
        id: 9,
        title: "4 Industri Tahan Resesi! Pastikan Kemampuanmu Termasuk Di Dalamnya",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/mbacay-768x512.jpg",
    },
        {
        id: 10,
        title:
            "Selamat Datang Mahasiswa Baru, PKKMB ITTelkom Surabaya Berlangsung Secara Luring",
        image:
            "https://ittelkom-sby.ac.id/wp-content/uploads/2022/09/DSC_1931-768x512.jpg",
        },
    ];

// DENGAN MODAL
// Functional Component
const List = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // Arrow Function with destructured argument
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => handleItemPress(item)} >
            <View padding = {20} borderBottomColor= '#dddddd' borderBottomWidth= {1}>
                <Image source={{ uri: item.image }} 
                    height= {200}
                    width= {null}
                    alt='list'
                />
                <Text fontSize= {18} paddingTop= {10}>
                    {item.title}
                </Text>
            </View>
            </TouchableOpacity>
        );
    };

    const handleItemPress = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View>
            <FlatList
                data={datas}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
            {selectedItem && (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}>
                <View 
                    flex= {1}
                    justifyContent= 'center'
                    alignItems= 'center'
                    backgroundColor= 'rgba(0, 0, 0, 0.7)'
                >
                    <View backgroundColor= 'white' padding= {20} borderRadius= {10}>
                        <Text>{selectedItem.title}</Text>
                        <Image source={{ uri: selectedItem.image }} 
                            h= {200}
                            w= {null}
                            alt='imagelist'
                        />
                        <Button onPress={closeModal}
                            bg= '#2196F3'
                            justifyContent= 'center'
                            alignItems= 'center'
                            mt= {20}
                        >
                            <Text color= 'white'>Tutup</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
            )}
        </View>
        );
    };

export default List;  