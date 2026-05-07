import { View, Text, StyleSheet } from 'react-native';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Colors, Spacing } from '../../constants/theme';
import { useRouter } from 'expo-router';
import { CheckCircle2, Star, Search } from 'lucide-react-native';

export default function GuidedIntroScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>How PaSkill Works</Text>
        
        <View style={styles.steps}>
          <Card style={styles.stepCard} padding="lg">
            <View style={styles.iconContainer}>
              <CheckCircle2 color={Colors.success} size={24} />
            </View>
            <View style={styles.stepTextContainer}>
              <Text style={styles.stepTitle}>Verify Your Skills</Text>
              <Text style={styles.stepDesc}>Upload photos or certificates of your work. Our system helps verify what you know.</Text>
            </View>
          </Card>

          <Card style={styles.stepCard} padding="lg">
            <View style={styles.iconContainer}>
              <Star color={Colors.accent} size={24} />
            </View>
            <View style={styles.stepTextContainer}>
              <Text style={styles.stepTitle}>Get a Confidence Score</Text>
              <Text style={styles.stepDesc}>A higher score shows employers they can trust your experience.</Text>
            </View>
          </Card>

          <Card style={styles.stepCard} padding="lg">
            <View style={styles.iconContainer}>
              <Search color={Colors.primary} size={24} />
            </View>
            <View style={styles.stepTextContainer}>
              <Text style={styles.stepTitle}>Get Discovered</Text>
              <Text style={styles.stepDesc}>Employers search for verified workers. Apply to jobs with just one tap.</Text>
            </View>
          </Card>
        </View>
      </View>

      <View style={styles.footer}>
        <Button 
          title="Start Skill Check" 
          onPress={() => router.push('/assessment/questions')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
    padding: Spacing.lg,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.xl,
  },
  steps: {
    gap: Spacing.md,
  },
  stepCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepTextContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  stepDesc: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  footer: {
    padding: Spacing.lg,
    paddingBottom: Spacing.xl,
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
});
