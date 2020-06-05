import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Home extends Component {
    state = {
        links: [
            { title: 'Open Chat', link: 'https://guarded-dusk-82018.herokuapp.com' },
        ]
    }

    handleButtonPress(item) {
        const { title, link } = item;
        this.props.navigation.navigate('Browser', { title, link })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.list}>
                    {this.state.links.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => this.handleButtonPress(item)}
                            style={styles.button}>
                                <Text style={styles.text}>{item.title}</Text>
                            </TouchableOpacity>
                    ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonList: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        margin: 10,
        backgroundColor: '#356bca',
        borderRadius: 5,
        padding: 10
    },
    text: {
        color: '#fff',
        textAlign: 'center'
    }

})

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#333',
        textAlign: 'center'
    }
})

export default Home;