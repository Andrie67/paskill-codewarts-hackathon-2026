import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Colors, Spacing, Border } from '../../constants/theme';
import { useRouter } from 'expo-router';
import { HardHat, Hammer, Wrench, Sprout, Car } from 'lucide-react-native';

const ROLES = [
  { id: 'construction', title: 'Construction Worker', icon: HardHat },
  { id: 'carpenter', title: 'Carpenter', icon: Hammer },
  { id: 'welder', title: 'Welder', icon: Wrench },
  { id: 'gardener', title: 'Gardener', icon: Sprout },
  { id: 'driver', title: 'Driver', icon: Car },
];

export default function RoleSelectionScreen() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>What kind of work do you do?</Text>
        <Text style={styles.subtitle}>Select your primary skill category.</Text>
        
        <View style={styles.grid}>
          {ROLES.map((role) => {
            const isSelected = selectedRole === role.id;
            const Icon = role.icon;
            return (
              <Pressable 
                key={role.id} 
                onPress={() => setSelectedRole(role.id)}
                style={styles.cardWrapper}
              >
                <Card 
                  style={[styles.roleCard, isSelected && styles.roleCardSelected]} 
                  padding="lg"
                >
                  <Icon 
                    size={32} 
                    color={isSelected ? Colors.primary : Colors.textSecondary} 
                  />
                  <Text style={[styles.roleTitle, isSelected && styles.roleTitleSelected]}>
                    {role.title}
                  </Text>
                </Card>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button 
          title="Continue" 
          disabled={!selectedRole}
          onPress={() => router.push('/onboarding/basic-info')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    padding: Spacing.lg,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: Spacing.xl,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.md,
  },
  cardWrapper: {
    width: '47%',
  },
  roleCard: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.sm,
    borderColor: Colors.border,
    minHeight: 120,
  },
  roleCardSelected: {
    borderColor: Colors.primary,
    backgroundColor: '#F0F5FA',
    borderWidth: 2,
  },
  roleTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  roleTitleSelected: {
    color: Colors.primary,
  },
  footer: {
    padding: Spacing.lg,
    paddingBottom: Spacing.xl,
    backgroundColor: Colors.background,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
});
