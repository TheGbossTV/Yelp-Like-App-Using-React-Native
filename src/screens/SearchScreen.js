import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        //price === $ || $$ || $$$
        return results.filter(result => { //For every result in the Results Array, only returns if it's "True"
            return result.price === price; //The price of the result is equal to the "price" in line 11
        })
    }

    return <View style={{ flex: 1 }}>
        <SearchBar
            term={term}
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)}
        />

        {errorMessage ? <Text>{errorMessage}</Text> : null /**This is called a ternary expression */}

        <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
            <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier' />
            <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender' />
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({

})

export default SearchScreen