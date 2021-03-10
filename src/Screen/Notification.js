import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types'

export class NotificationPage extends Component {

    render() {
        return (
            <div style={styles.container}>
                <Text> My Notification Page</Text>
            </div>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default NotificationPage;
