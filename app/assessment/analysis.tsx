import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors, Spacing } from '../../constants/theme';
import { useRouter } from 'expo-router';
import { BrainCircuit } from 'lucide-react-native';

export default function AnalysisScreen() {
  const router = useRouter();
  const [status, setStatus] = useState('Analyzing your uploads...');

  useEffect(() => {
    // Simulate AI analysis steps
    const timer1 = setTimeout(() => setStatus('Verifying ID...'), 1500);
    const timer2 = setTimeout(() => setStatus('Evaluating skill photos...'), 3000);
    const timer3 = setTimeout(() => setStatus('Generating Confidence Score...'), 4500);
    
    const finish = setTimeout(() => {
      // Go to verification status screen
      router.replace('/assessment/verification-status');
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(finish);
    };
  }, []);

  return (
    <View style={styles.container}>
      <BrainCircuit color={Colors.primary} size={64} style={styles.icon} />
      <Text style={styles.title}>AI Assessment</Text>
      <Text style={styles.status}>{status}</Text>
      <ActivityIndicator size="large" color={Colors.accent} style={styles.loader} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  icon: {
    color: Colors.textInverse,
    marginBottom: Spacing.lg,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.textInverse,
    marginBottom: Spacing.sm,
  },
  status: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginBottom: Spacing.xl,
    textAlign: 'center',
  },
  loader: {
    marginTop: Spacing.lg,
  },
});
