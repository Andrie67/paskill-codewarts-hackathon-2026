import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Card } from './Card';
import { Button } from './Button';
import { MapPin, Briefcase, Star } from 'lucide-react-native';
import { Colors, Spacing, Border } from '../constants/theme';

export interface JobCardProps {
  title: string;
  employer: string;
  location: string;
  salary: string;
  type: string;
  match?: number;
  isRecommended?: boolean;
  onPress?: () => void;
  onApply?: () => void;
}

export function JobCard({ 
  title, employer, location, salary, type, match, isRecommended, onPress, onApply 
}: JobCardProps) {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <View style={[styles.wrapper, pressed && styles.pressed]}>
          <Card style={styles.container} padding="lg">
            {isRecommended && (
              <View style={styles.recommendedBadge}>
                <Star size={12} color={Colors.accent} fill={Colors.accent} />
                <Text style={styles.recommendedText}>Recommended for you</Text>
              </View>
            )}
            
            <View style={styles.header}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.employer} numberOfLines={1}>{employer}</Text>
              </View>
              {match && (
                <View style={styles.matchBadge}>
                  <Text style={styles.matchText}>{match}% Match</Text>
                </View>
              )}
            </View>
            
            <View style={styles.salaryContainer}>
              <Text style={styles.salary}>{salary}</Text>
            </View>

            <View style={styles.detailsRow}>
              <View style={styles.detailItem}>
                <MapPin size={14} color={Colors.textSecondary} />
                <Text style={styles.detailText}>{location}</Text>
              </View>
              <View style={styles.detailItem}>
                <Briefcase size={14} color={Colors.textSecondary} />
                <Text style={styles.detailText}>{type}</Text>
              </View>
            </View>
            
            <View style={styles.footer}>
              <Button title="Quick Apply" size="sm" onPress={onApply} style={styles.applyBtn} />
              <Button title="Save" variant="outline" size="sm" onPress={() => {}} />
            </View>
          </Card>
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Spacing.md,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  container: {
    borderWidth: 1,
    borderColor: Colors.border,
  },
  recommendedBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFBEB',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Border.radiusFull,
    alignSelf: 'flex-start',
    marginBottom: Spacing.sm,
    gap: 4,
  },
  recommendedText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#D97706',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.xs,
  },
  titleContainer: {
    flex: 1,
    marginRight: Spacing.sm,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  employer: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  matchBadge: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: Border.radiusFull,
    borderWidth: 1,
    borderColor: '#D1FAE5',
  },
  matchText: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.success,
  },
  salaryContainer: {
    marginVertical: Spacing.sm,
    paddingVertical: Spacing.xs,
    paddingHorizontal: Spacing.sm,
    backgroundColor: '#F3F4F6',
    borderRadius: Border.radiusSm,
    alignSelf: 'flex-start',
  },
  salary: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primary,
  },
  detailsRow: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginBottom: Spacing.lg,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  detailText: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  footer: {
    flexDirection: 'row',
    gap: Spacing.sm,
  },
  applyBtn: {
    flex: 1,
  },
});
