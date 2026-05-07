import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Colors, Spacing, Border, Shadows } from '../../constants/theme';
import { ConfidenceScore } from '../../components/ConfidenceScore';
import { SkillBadge } from '../../components/SkillBadge';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { MapPin, QrCode, Share, CheckCircle2, FileText, Image as ImageIcon, Video } from 'lucide-react-native';

export default function PassportScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scroll}>
      
      {/* Primary Identity Layer */}
      <View style={styles.identityWrapper}>
        <Card style={styles.identityCard} padding="lg">
          <View style={styles.qrCorner}>
            <QrCode size={24} color={Colors.primary} />
          </View>
          
          <View style={styles.profileRow}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JC</Text>
            </View>
            <View style={styles.profileInfo}>
              <Text style={styles.name}>Juan Dela Cruz</Text>
              <Text style={styles.role}>Construction Worker</Text>
              <View style={styles.locationRow}>
                <MapPin size={14} color={Colors.textSecondary} />
                <Text style={styles.location}>Manila, Philippines</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.verifiedPill}>
            <CheckCircle2 size={16} color={Colors.success} />
            <Text style={styles.verifiedText}>Verified Worker</Text>
          </View>
        </Card>

        {/* Floating Confidence Score */}
        <View style={styles.floatingScore}>
          <ConfidenceScore score={82} />
        </View>
      </View>

      {/* Verified Portfolio Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Verified Skills</Text>
        <Card style={styles.skillsCard} padding="md" shadow="none">
          <View style={styles.skillsList}>
            <SkillBadge name="Bricklaying" verified />
            <SkillBadge name="Concrete Mixing" verified />
            <SkillBadge name="Site Cleanup" verified />
            <SkillBadge name="Basic Carpentry" />
          </View>
        </Card>
      </View>

      {/* Proof Gallery Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Proof Gallery</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.galleryScroll}>
          <Card style={styles.galleryCard} padding="sm" shadow="sm">
            <View style={[styles.galleryIconBox, { backgroundColor: '#E0E7FF' }]}>
              <FileText color={Colors.info} size={24} />
            </View>
            <Text style={styles.galleryTitle}>Gov ID</Text>
            <View style={styles.galleryStatus}><CheckCircle2 size={12} color={Colors.success} /></View>
          </Card>
          
          <Card style={styles.galleryCard} padding="sm" shadow="sm">
            <View style={[styles.galleryIconBox, { backgroundColor: '#FEF3C7' }]}>
              <FileText color={Colors.accent} size={24} />
            </View>
            <Text style={styles.galleryTitle}>NC II Cert</Text>
            <View style={styles.galleryStatus}><CheckCircle2 size={12} color={Colors.success} /></View>
          </Card>

          <Card style={styles.galleryCard} padding="sm" shadow="sm">
            <View style={[styles.galleryIconBox, { backgroundColor: '#ECFDF5' }]}>
              <ImageIcon color={Colors.success} size={24} />
            </View>
            <Text style={styles.galleryTitle}>Photos (3)</Text>
            <View style={styles.galleryStatus}><CheckCircle2 size={12} color={Colors.success} /></View>
          </Card>

          <Card style={styles.galleryCard} padding="sm" shadow="sm">
            <View style={[styles.galleryIconBox, { backgroundColor: '#F3F4F6' }]}>
              <Video color={Colors.textSecondary} size={24} />
            </View>
            <Text style={styles.galleryTitle}>Task Video</Text>
            <Text style={styles.galleryPendingText}>Reviewing</Text>
          </Card>
        </ScrollView>
      </View>

      {/* Action Footer */}
      <View style={styles.actionGrid}>
        <Button 
          title="Share Passport" 
          icon={<Share size={20} color={Colors.textInverse} />} 
          style={{ flex: 1 }}
        />
      </View>
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
    paddingBottom: 100, // accommodate tab bar
  },
  identityWrapper: {
    position: 'relative',
    marginBottom: Spacing.xl + 40, // extra margin for the floating score
  },
  identityCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    ...Shadows.lg,
    position: 'relative',
    zIndex: 1,
  },
  qrCorner: {
    position: 'absolute',
    top: Spacing.lg,
    right: Spacing.lg,
    width: 40,
    height: 40,
    borderRadius: Border.radius,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    marginBottom: Spacing.lg,
    paddingRight: 40,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: Colors.textInverse,
    fontSize: 28,
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 22,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: Colors.textSecondary,
    fontWeight: '500',
    marginBottom: 6,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  location: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  verifiedPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Border.radiusFull,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#D1FAE5',
  },
  verifiedText: {
    color: '#065F46',
    fontWeight: '600',
    fontSize: 13,
  },
  floatingScore: {
    position: 'absolute',
    bottom: -32,
    left: Spacing.lg,
    right: Spacing.lg,
    zIndex: 2,
    ...Shadows.float,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  skillsCard: {
    backgroundColor: Colors.card,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  galleryScroll: {
    gap: Spacing.sm,
    paddingRight: Spacing.lg,
  },
  galleryCard: {
    width: 100,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    backgroundColor: Colors.card,
    position: 'relative',
  },
  galleryIconBox: {
    width: 48,
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  galleryTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.text,
  },
  galleryStatus: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  galleryPendingText: {
    fontSize: 10,
    color: Colors.warning,
    fontWeight: 'bold',
    marginTop: 2,
  },
  actionGrid: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.sm,
  },
});
