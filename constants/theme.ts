export const Colors = {
  primary: '#0A2540',
  accent: '#F59E0B',
  background: '#F9FAFB',
  card: '#FFFFFF',
  text: '#1F2937',
  textSecondary: '#6B7280',
  textInverse: '#FFFFFF',
  border: '#E5E7EB',
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B', // Pending / Warning
  info: '#3B82F6',    // Review / Processing
  overlay: 'rgba(0,0,0,0.4)',
  glass: 'rgba(255, 255, 255, 0.85)',
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const Border = {
  radiusSm: 8,
  radius: 12,
  radiusLg: 16,
  radiusXl: 24,
  radiusFull: 9999,
  curve: 'continuous' as const,
};

export const Shadows = {
  sm: {
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
  },
  md: {
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
  lg: {
    boxShadow: '0 12px 24px -4px rgba(0, 0, 0, 0.08)',
  },
  float: {
    boxShadow: '0 20px 40px -8px rgba(0, 0, 0, 0.12)',
  }
};
