import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Border, Spacing } from '../constants/theme';
import { Card } from './Card';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react-native';

export type VerificationStatus = 'verified' | 'pending' | 'review';

interface VerificationStatusCardProps {
  title: string;
  subtitle: string;
  status: VerificationStatus;
  icon?: React.ReactNode;
}

export function VerificationStatusCard({ title, subtitle, status, icon }: VerificationStatusCardProps) {
  const isVerified = status === 'verified';
  const isPending = status === 'pending';
  const isReview = status === 'review';

  let StatusIcon = CheckCircle2;
  let statusColor = Colors.success;
  let statusText = 'Complete';
  let badgeBg = '#ECFDF5';

  if (isReview) {
    StatusIcon = Clock;
    statusColor = Colors.info;
    statusText = 'In Progress';
    badgeBg = '#EFF6FF';
  } else if (isPending) {
    StatusIcon = AlertCircle;
    statusColor = Colors.warning;
    statusText = 'Pending';
    badgeBg = '#FFFBEB';
  }

  return (
    <Card style={styles.container} padding="md" shadow="none">
      <View style={styles.iconContainer}>
        {icon || <CheckCircle2 color={Colors.textSecondary} size={24} />}
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={[styles.badge, { backgroundColor: badgeBg }]}>
        <Text style={[styles.badgeText, { color: statusColor }]}>{statusText}</Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    marginBottom: Spacing.sm,
    backgroundColor: Colors.card,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: Border.radius,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Border.radiusFull,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
