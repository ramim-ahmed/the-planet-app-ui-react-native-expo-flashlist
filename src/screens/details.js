import { Image, Linking, Pressable, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import Header from '../components/header/header';
import { spacing } from '../theme/spacing';
import Text from '../components/text/text';
import PlanetRow from '../components/planetRow/planetRow';
import renderSvg from '../utils/renderSvg/renderSvg';

const Details = ({ route }) => {
    const { name, description, rotationTime, revolutionTime, radius, avgTemp, wikiLink } = route.params.item || {};

    return (
        <SafeAreaView style={styles.container} >
            <Header prev title='THE PLANETS' />
            <ScrollView>
                <View style={styles.svg}>
                    {renderSvg(name)}
                </View>
                <View style={styles.details}>
                    <Text style={styles.name} preset='h1'>{name}</Text>
                    <Text style={styles.description} >{description}</Text>
                    <View style={styles.source}>
                        <Text>Source:</Text>
                        <Pressable onPress={() => Linking.openURL(wikiLink)}>
                            <Text
                                style={styles.wikipedia}
                                preset='h4'>Wikipedia</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.planetSection}>
                    <PlanetRow title='Rotation Time' value={rotationTime} />
                    <PlanetRow title='Revolution Time' value={revolutionTime} />
                    <PlanetRow title='Radius' value={radius} />
                    <PlanetRow title='AvgTemp.' value={avgTemp} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    svg: {
        marginTop: spacing[8],
        padding: spacing[5],
        alignItems: 'center',
        justifyContent: 'center'
    },
    details: {
        alignItems: 'center',
        marginTop: spacing[8],
        marginHorizontal: spacing[5]
    },
    name: {
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    description: {
        marginTop: spacing[4],
        textAlign: 'center',
        lineHeight: 30
    },
    source: {
        marginTop: spacing[4],
        flexDirection: 'row'
    },
    wikipedia: {
        marginLeft: spacing[2],
        textDecorationLine: 'underline'
    },
    planetSection: {
        marginTop: spacing[8]
    }
})