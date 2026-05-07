import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { Colors, Border, Spacing } from '../constants/theme';
import { ShieldCheck } from 'lucide-react-native';

interface ConfidenceScoreProps {
  score: number;
  size?: 'sm' | 'md' | 'lg';
}

export function ConfidenceScore({ score, size = 'md' }: ConfidenceScoreProps) {
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        tension: 40,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  let color = Colors.error;
  let text = 'Needs Improvement';
  let bg = '#FEF2F2';
  
  if (score >= 80) {
    color = Colors.success;
    text = 'High Confidence';
    bg = '#ECFDF5';
  } else if (score >= 60) {
    color = Colors.accent;
    text = 'Good Match';
    bg = '#FFFBEB';
  }

  const isLg = size === 'lg';

  return (
    <Animated.View style={[
      styles.container, 
      isLg && styles.containerLg,
      { transform: [{ scale: scaleAnim }], opacity: opacityAnim }
    ]}>
      <View style={[styles.circle, { borderColor: color, backgroundColor: bg }, isLg && styles.circleLg]}>
        <Text style={[styles.scoreText, { color }, isLg && styles.scoreTextLg]}>{score}</Text>
      </View>
      <View style={styles.textContainer}>
        <View style={styles.row}>
          <ShieldCheck size={isLg ? 20 : 16} color={color} />
          <Text style={[styles.title, { color }, isLg && styles.titleLg]}>{text}</Text>
        </View>
        <Text style={[styles.subtitle, isLg && styles.subtitleLg]}>Verified by PaSkill</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.card,
    padding: Spacing.md,
    borderRadius: Border.radiusLg,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  containerLg: {
    padding: Spacing.lg,
    borderRadius: Border.radiusXl,
  },
  circle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  circleLg: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 4,
    marginRight: Spacing.lg,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: '800',
  },
  scoreTextLg: {
    fontSize: 28,
  },
  textContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: '700',
  },
  titleLg: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  subtitleLg: {
    fontSize: 14,
  },
});
