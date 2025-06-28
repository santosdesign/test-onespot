import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

const DataManagementScreen: React.FC = () => {
  const handleDeleteData = () => {
    Alert.alert(
      'Confirm Deletion',
      'Are you sure you want to delete your data?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => console.log('Data deleted') },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Management</Text>
      <Button title="Delete Data" onPress={handleDeleteData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default DataManagementScreen;