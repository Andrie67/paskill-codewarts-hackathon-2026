import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors, Spacing, Border } from '../../constants/theme';
import { ConfidenceScore } from '../../components/ConfidenceScore';
import { JobCard } from '../../components/JobCard';
import { Card } from '../../components/Card';
import { ProgressBar } from '../../components/ProgressBar';
import { useRouter } from 'expo-router';
import { ChevronRight } from 'lucide-react-native';

export default function HomeDashboard() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Good morning, Juan!</Text>
        <Text style={styles.subtitle}>Here is your passport status.</Text>
      </View>

      {/* Profile Strength Widget */}
      <Card style={styles.strengthCard} padding="md" shadow="sm">
        <View style={styles.strengthHeader}>
          <Text style={styles.strengthTitle}>Profile Strength</Text>
          <Text style={styles.strengthValue}>80%</Text>
        </View>
        <ProgressBar progress={80} color={Colors.accent} backgroundColor="#FEF3C7" />
        <View style={styles.strengthAction}>
          <Text style={styles.strengthSub}>Complete your passport to increase visibility</Text>
          <ChevronRight size={16} color={Colors.textSecondary} />
        </View>
      </Card>

      <View style={styles.section}>
        <ConfidenceScore score={82} />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Suggested Jobs</Text>
          <Text style={styles.seeAll} onPress={() => router.push('/(tabs)/jobs')}>See All</Text>
        </View>

        <JobCard 
          title="Senior Welder"
          employer="ABC Construction Corp."
          location="Makati, Metro Manila"
          salary="₱800 - ₱1000 / day"
          type="Full-time"
          match={95}
          isRecommended
        />
        <JobCard 
          title="Site Carpenter"
          employer="BuildRight Inc."
          location="Quezon City"
          salary="₱750 / day"
          type="Project-based"
          match={82}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    padding: Spacing.lg,
    paddingBottom: 100, // padding for absolute tab bar
  },
  header: {
    marginBottom: Spacing.lg,
  },
  greeting: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.text,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginTop: 4,
  },
  strengthCard: {
    marginBottom: Spacing.xl,
    backgroundColor: '#FFFBEB', // Light amber background
    borderColor: '#FDE68A',
  },
  strengthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  strengthTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.text,
  },
  strengthValue: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.accent,
  },
  strengthAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Spacing.sm,
  },
  strengthSub: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
  },
  seeAll: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: '600',
  },
});
