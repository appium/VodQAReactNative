import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ListView

} from 'react-native'

class ListViewVerticalSwipe extends Component {
    constructor() {
        super()
        this.renderRowView = this.renderRowView.bind(this)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        this.state = {
            dataSource: ds.cloneWithRows(['C', 'C++', 'Javascript','Python','Rudy','RR','Java','C#', '.net', 'MySql', 'Appium', 'Jasmine', 'Jest', 'Karma' ]),
        }
    }

    renderRowView(RowData) {
        return (
            <View style = {styles.viewWrapper}>
                <Text style = {styles.text}> {RowData}</Text>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRowView}
                    />
            </View>

        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        marginTop: 96
    },
    viewWrapper: {
        padding: 20,
        borderColor: '#d6d6d6',
        backgroundColor: '#002546',
        borderWidth: 1,
        margin: 10
    },
    text: {
        color: '#ECBA00',
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        fontWeight: '900'
    }
})


export default ListViewVerticalSwipe