import { View, SafeAreaView, StyleSheet, FlatList, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../theme/colors';
import Header from '../components/header/header';
import { PLANET_LIST } from '../data/planet-list';
import PlanetItem from '../components/planetItem/planetItem';
import { spacing } from '../theme/spacing';
import { FlashList } from '@shopify/flash-list';
import Text from '../components/text/text';


const Home = () => {
    const [render, setRender] = useState(false)
    const [lists, setLists] = useState(PLANET_LIST)
    const onChangeSearchHandler = (text) => {
        const filterList = PLANET_LIST.filter(({ name }) => {
            const itemName = name.toLocaleLowerCase();
            const inputName = text.toLocaleLowerCase();
            return itemName.indexOf(inputName) > -1;
        });
        setLists(filterList);
    };
    useEffect(() => {
        setRender(true)
    }, []);
    return render ? <>
        <SafeAreaView style={styles.container} >
            <Header title='THE PLANETS' />
            <View style={styles.inputArea}>
                <TextInput
                    onChangeText={onChangeSearchHandler}
                    style={styles.input} placeholder='Search....' placeholderTextColor={colors.grey} />
            </View>
            {/* render planets item */}
            <FlashList
                estimatedItemSize={200}
                data={lists}
                keyExtractor={(item) => item.name}
                renderItem={({ item, index }) => <PlanetItem item={item} />}
            />
        </SafeAreaView>
    </> : <View><Text>Loading....</Text></View>
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },

    divider: {
        borderBottomWidth: 0.7,
        borderBottomColor: colors.grey
    },
    inputArea: {
        marginVertical: spacing[5],
        padding: spacing[4]
    },
    input: {
        paddingVertical: spacing[4],
        fontSize: 20,
        color: colors.white,
        borderBottomColor: colors.white,
        borderBottomWidth: 1
    }
})