import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const CreateRecord = () => {
    return (
      <>
        <Header />
        <Text style={styles.text}>aaaaa</Text>
      </>
    );
};

const styles = StyleSheet.create({
    text: {
      color: '#FFF',
    },
  });

export default CreateRecord;