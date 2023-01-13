import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Text from '../text/text'
import { spacing } from '../../theme/spacing'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
useNavigation
const PlanetItem = ({ item }) => {
    const { name, color } = item;
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate('Details', { item })} style={styles.container}>
            <View style={styles.wrap}>
                <View style={[styles.circle, { backgroundColor: color }]} />
                <Text style={styles.name} preset='h4'>{name}</Text>
            </View>
            <AntDesign name="right" size={24} color="white" />
        </Pressable>
    )
}

export default PlanetItem;


const styles = StyleSheet.create({
    container: {
        paddingVertical: spacing[5],
        paddingHorizontal: spacing[5],
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    wrap: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        height: 15,
        width: 15,
        borderRadius: 15,
        marginRight: spacing[3]
    },
    name: {
        textTransform: 'uppercase'
    }
})