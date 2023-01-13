import { Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import Text from '../text/text'
import { spacing } from '../../theme/spacing'
import { colors } from '../../theme/colors'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
useNavigation
const Header = ({ title, prev }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {
                prev && (
                    <Pressable style={{ marginRight: spacing[4] }} onPress={() => navigation.goBack()}>
                        <AntDesign name="left" size={24} color="white" />
                    </Pressable>
                )
            }
            <Text preset='h2'>{title}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        padding: spacing[5],
        borderBottomWidth: 0.2,
        borderBottomColor: colors.grey,
        flexDirection: 'row',
        alignItems: 'center'
    }
})