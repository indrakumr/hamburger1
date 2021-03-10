import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SettingsPage extends Component {

    render() {
        return (
            <div style={styles.container}>
                <Text> My Setting Page</Text>
            </div>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SettingsPage;
