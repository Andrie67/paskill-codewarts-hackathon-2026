import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { Colors, Border, Shadows, Spacing } from '../constants/theme';

interface CardProps extends ViewProps {
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

export function Card({ style, padding = 'md', shadow = 'sm', children, ...props }: CardProps) {
  return (
    <View
      style={[
        styles.card,
        styles[`padding_${padding}`],
        shadow !== 'none' && Shadows[shadow],
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: Border.radiusLg,
    borderCurve: Border.curve,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  padding_none: { padding: 0 },
  padding_sm: { padding: Spacing.sm },
  padding_md: { padding: Spacing.md },
  padding_lg: { padding: Spacing.lg },
});
