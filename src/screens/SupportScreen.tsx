import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SupportScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Support</Text>
      <Text>Here you can find troubleshooting guides and FAQs.</Text>
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

export default SupportScreen;