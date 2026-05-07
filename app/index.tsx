import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from '../components/Button';
import { Colors, Spacing } from '../constants/theme';
import { useRouter } from 'expo-router';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>PaSkill</Text>
        </View>
        
        <Text style={styles.title}>Your skills deserve to be seen.</Text>
        <Text style={styles.subtitle}>
          Create your verified digital passport and connect with top employers today.
        </Text>
      </View>
      
      <View style={styles.footer}>
        <Button 
          title="Get Started" 
          onPress={() => router.push('/onboarding/role-selection')} 
          size="lg"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'space-between',
    padding: Spacing.xl,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  logo: {
    color: Colors.textInverse,
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Spacing.md,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    paddingBottom: Spacing.md,
  },
});
