import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null)//this means an object

    const getBusiness = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data);
    }

    useEffect(() => {
        getBusiness(id)
    }, [])

    if (!result) {
        return null
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={{ height: 200, width: 300 }} source={{ uri: item }} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ResultsShowScreen