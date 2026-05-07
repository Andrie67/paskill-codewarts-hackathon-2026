import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors, Spacing, Border } from '../../constants/theme';
import { useRouter } from 'expo-router';
import { VerificationStatusCard } from '../../components/VerificationStatusCard';
import { Button } from '../../components/Button';
import { FileBadge, ShieldCheck } from 'lucide-react-native';

export default function VerificationStatusScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.header}>
          <View style={styles.iconCircle}>
            <ShieldCheck size={32} color={Colors.primary} />
          </View>
          <Text style={styles.title}>Verification Status</Text>
          <Text style={styles.subtitle}>
            We are reviewing your uploaded evidence. Your profile is already active and you can start applying for jobs!
          </Text>
        </View>

        <View style={styles.list}>
          <VerificationStatusCard 
            title="Identity Check"
            subtitle="Your ID has been verified."
            status="verified"
          />
          <VerificationStatusCard 
            title="Skills Assessment"
            subtitle="Your basic quiz answers were recorded."
            status="verified"
          />
          <VerificationStatusCard 
            title="Certificates"
            subtitle="We are verifying your NC II with TESDA."
            status="review"
            icon={<FileBadge color={Colors.info} size={24} />}
          />
          <VerificationStatusCard 
            title="Work Evidence"
            subtitle="Awaiting manual review of your uploaded photos."
            status="pending"
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button 
          title="Go to Dashboard" 
          onPress={() => router.replace('/(tabs)/')} 
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
  scroll: {
    padding: Spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
    marginTop: Spacing.md,
  },
  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E0E7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  list: {
    gap: Spacing.sm,
  },
  footer: {
    padding: Spacing.lg,
    paddingBottom: Spacing.xl,
    backgroundColor: Colors.card,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
});
