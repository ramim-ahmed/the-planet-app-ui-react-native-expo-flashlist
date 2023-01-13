import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../text/text'
import { spacing } from '../../theme/spacing'
import { colors } from '../../theme/colors'

const PlanetRow = ({ title, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title} preset='small'>{title}</Text>
            <Text style={styles.value} preset='h2'>{value}</Text>
        </View>
    )
}

export default PlanetRow;

const styles = StyleSheet.create({
    container: {
        marginTop: spacing[4],
        marginHorizontal: spacing[5],
        borderWidth: 1,
        borderColor: colors.grey,
        padding: spacing[4],
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {},
    value: {

    }
})