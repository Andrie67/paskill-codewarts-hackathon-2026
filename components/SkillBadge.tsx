import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Border, Spacing } from '../constants/theme';
import { CheckCircle2 } from 'lucide-react-native';

interface SkillBadgeProps {
  name: string;
  verified?: boolean;
}

export function SkillBadge({ name, verified = false }: SkillBadgeProps) {
  return (
    <View style={[styles.container, verified && styles.verifiedContainer]}>
      <Text style={[styles.text, verified && styles.verifiedText]}>{name}</Text>
      {verified && <CheckCircle2 size={14} color={Colors.success} style={styles.icon} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    borderRadius: Border.radiusFull,
    borderWidth: 1,
    borderColor: Colors.border,
    alignSelf: 'flex-start',
  },
  verifiedContainer: {
    backgroundColor: '#ECFDF5', // Soft green background
    borderColor: '#D1FAE5',
  },
  text: {
    fontSize: 12,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  verifiedText: {
    color: '#065F46', // Dark green text
  },
  icon: {
    marginLeft: 4,
  },
});
