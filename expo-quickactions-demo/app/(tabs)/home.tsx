import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useQuickActions from '../../hooks/useQuickActions';

export default function Home() {
  useQuickActions(); // registers quick actions and handlers
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, alignItems:'center', justifyContent:'center' },
  text:{ fontSize:20, fontWeight:'600' }
});
