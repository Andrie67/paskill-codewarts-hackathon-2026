import React from 'react';
import { Pressable, Text, StyleSheet, PressableProps, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { Colors, Border, Spacing } from '../constants/theme';

interface ButtonProps extends PressableProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  title: string;
  icon?: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  title,
  icon,
  style,
  disabled,
  ...props
}: ButtonProps) {
  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isOutline = variant === 'outline';

  const containerStyles: ViewStyle[] = [
    styles.base,
    styles[`size_${size}`],
    isPrimary && styles.primary,
    isSecondary && styles.secondary,
    isOutline && styles.outline,
    (disabled || loading) && styles.disabled,
  ];

  const textStyles: TextStyle[] = [
    styles.textBase,
    styles[`textSize_${size}`],
    isPrimary && styles.textInverse,
    isSecondary && styles.textPrimary,
    isOutline && styles.textPrimary,
    variant === 'ghost' && styles.textPrimary,
  ];

  return (
    <Pressable
      style={({ pressed }) => [
        ...containerStyles,
        pressed && !disabled && !loading && { opacity: 0.8, transform: [{ scale: 0.98 }] },
        style as ViewStyle,
      ]}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={isPrimary ? Colors.textInverse : Colors.primary} />
      ) : (
        <>
          {icon}
          <Text style={textStyles}>{title}</Text>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Border.radiusFull,
    borderCurve: Border.curve,
    gap: Spacing.sm,
  },
  size_sm: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    minHeight: 32,
  },
  size_md: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    minHeight: 48,
  },
  size_lg: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    minHeight: 56,
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.accent,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  disabled: {
    opacity: 0.5,
  },
  textBase: {
    fontWeight: '600',
    textAlign: 'center',
  },
  textSize_sm: {
    fontSize: 14,
  },
  textSize_md: {
    fontSize: 16,
  },
  textSize_lg: {
    fontSize: 18,
  },
  textInverse: {
    color: Colors.textInverse,
  },
  textPrimary: {
    color: Colors.primary,
  },
});
