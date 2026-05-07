import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors, Spacing, Border } from '../../constants/theme';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { User, Shield, Globe, LogOut, Settings } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      <Card style={styles.headerCard} padding="lg">
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JC</Text>
        </View>
        <Text style={styles.name}>Juan Dela Cruz</Text>
        <Text style={styles.role}>Construction Worker</Text>
        
        <Button 
          title="Edit Profile" 
          variant="outline" 
          size="sm" 
          style={styles.editBtn} 
        />
      </Card>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <Card style={styles.menuCard} padding="none">
          <MenuItem icon={<User size={20} color={Colors.text} />} title="Personal Information" />
          <MenuItem icon={<Shield size={20} color={Colors.text} />} title="Trust & Verification" />
          <MenuItem icon={<Settings size={20} color={Colors.text} />} title="App Settings" borderBottom={false} />
        </Card>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <Card style={styles.menuCard} padding="none">
          <MenuItem icon={<Globe size={20} color={Colors.text} />} title="Language (English)" />
          <MenuItem icon={<LogOut size={20} color={Colors.error} />} title="Log Out" textColor={Colors.error} borderBottom={false} />
        </Card>
      </View>
    </ScrollView>
  );
}

function MenuItem({ icon, title, borderBottom = true, textColor = Colors.text }: any) {
  return (
    <View style={[styles.menuItem, borderBottom && styles.menuBorder]}>
      <View style={styles.menuIcon}>{icon}</View>
      <Text style={[styles.menuTitle, { color: textColor }]}>{title}</Text>
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
  headerCard: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  avatarText: {
    color: Colors.textInverse,
    fontSize: 32,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: Spacing.md,
  },
  editBtn: {
    minWidth: 120,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: Spacing.sm,
    marginLeft: 4,
  },
  menuCard: {
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.md,
  },
  menuBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  menuIcon: {
    marginRight: Spacing.md,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
});
