import { StatusBar } from 'expo-status-bar';
import { ScrollView,SafeAreaView, StyleSheet, Text, View  } from 'react-native';
import FlatCard from './components/FlatCard';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.container}>
          <FlatCard/>
          <ElevatedCard/>
          <FancyCard/>
          <ActionCard/>
          <ContactList/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  screen: {
    paddingTop: 24,
    flex: 1,
  },
});
