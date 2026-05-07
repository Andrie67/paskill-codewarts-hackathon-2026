import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors, Spacing, Border } from '../../constants/theme';
import { Card } from '../../components/Card';
import { CheckCircle2, Eye, Building2 } from 'lucide-react-native';

const NOTIFICATIONS = [
  {
    id: 1,
    title: 'Profile Viewed',
    message: 'ABC Construction viewed your passport.',
    time: '2 hours ago',
    icon: Eye,
    color: Colors.primary,
    unread: true,
  },
  {
    id: 2,
    title: 'New Match',
    message: 'You are a strong match for a Welding job in Makati.',
    time: '5 hours ago',
    icon: Building2,
    color: Colors.accent,
    unread: true,
  },
  {
    id: 3,
    title: 'Verification Complete',
    message: 'Your TESDA certificate has been verified. Your score increased!',
    time: 'Yesterday',
    icon: CheckCircle2,
    color: Colors.success,
    unread: false,
  },
];

export default function NotificationsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      {NOTIFICATIONS.map(note => {
        const Icon = note.icon;
        return (
          <Card key={note.id} style={[styles.card, note.unread && styles.unreadCard]}>
            <View style={[styles.iconBox, { backgroundColor: note.color + '20' }]}>
              <Icon color={note.color} size={24} />
            </View>
            <View style={styles.content}>
              <Text style={styles.title}>{note.title}</Text>
              <Text style={styles.message}>{note.message}</Text>
              <Text style={styles.time}>{note.time}</Text>
            </View>
            {note.unread && <View style={styles.unreadDot} />}
          </Card>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scroll: {
    padding: Spacing.lg,
    gap: Spacing.md,
  },
  card: {
    flexDirection: 'row',
    padding: Spacing.md,
    gap: Spacing.md,
    alignItems: 'flex-start',
  },
  unreadCard: {
    backgroundColor: '#F8FAFC',
    borderColor: Colors.primary,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 6,
    lineHeight: 20,
  },
  time: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    marginTop: 8,
  },
});
