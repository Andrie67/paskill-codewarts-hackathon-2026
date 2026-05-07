import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Colors, Spacing, Border } from '../../constants/theme';
import { useRouter } from 'expo-router';
import { FileBadge, Image as ImageIcon, Camera, Plus, Check } from 'lucide-react-native';

export default function UploadScreen() {
  const router = useRouter();
  
  // States for each category: 'idle', 'uploading', 'done'
  const [idStatus, setIdStatus] = useState<'idle'|'uploading'|'done'>('idle');
  const [certStatus, setCertStatus] = useState<'idle'|'uploading'|'done'>('idle');
  const [photoStatus, setPhotoStatus] = useState<'idle'|'uploading'|'done'>('idle');
  const [videoStatus, setVideoStatus] = useState<'idle'|'uploading'|'done'>('idle');

  const canSubmit = idStatus === 'done'; // At least ID must be done

  const handleUpload = (setStatus: any) => {
    setStatus('uploading');
    setTimeout(() => {
      setStatus('done');
    }, 1500); // Simulate upload time
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Build your portfolio</Text>
        <Text style={styles.subtitle}>
          Upload proof of your skills to increase your Confidence Score and stand out.
        </Text>

        <View style={styles.uploadList}>
          <UploadCard 
            title="Government ID" 
            desc="Required for identity verification." 
            icon={<FileBadge color={Colors.primary} size={24} />}
            status={idStatus}
            onPress={() => handleUpload(setIdStatus)}
            required
          />
          <UploadCard 
            title="Certificates" 
            desc="Training or skill certificates (NC II, etc.)." 
            icon={<FileBadge color={Colors.textSecondary} size={24} />}
            status={certStatus}
            onPress={() => handleUpload(setCertStatus)}
          />
          <UploadCard 
            title="Work Photos" 
            desc="Photos of your actual projects." 
            icon={<ImageIcon color={Colors.textSecondary} size={24} />}
            status={photoStatus}
            onPress={() => handleUpload(setPhotoStatus)}
          />
          <UploadCard 
            title="Task Video" 
            desc="A short video of you working." 
            icon={<Camera color={Colors.textSecondary} size={24} />}
            status={videoStatus}
            onPress={() => handleUpload(setVideoStatus)}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button 
          title="Submit Evidence" 
          disabled={!canSubmit}
          onPress={() => router.push('/assessment/analysis')} 
        />
      </View>
    </View>
  );
}

function UploadCard({ title, desc, icon, status, onPress, required }: any) {
  const isDone = status === 'done';
  const isUploading = status === 'uploading';

  return (
    <Pressable onPress={isDone || isUploading ? undefined : onPress} disabled={isDone || isUploading}>
      {({ pressed }) => (
        <Card style={[styles.uploadCard, pressed && styles.pressed, isDone && styles.doneCard]} padding="lg">
          <View style={[styles.iconBox, isDone && styles.iconBoxDone]}>
            {isDone ? <Check color={Colors.success} size={24} /> : icon}
          </View>
          <View style={styles.uploadTextContainer}>
            <View style={styles.titleRow}>
              <Text style={styles.uploadTitle}>{title}</Text>
              {required && <Text style={styles.requiredBadge}>Required</Text>}
            </View>
            <Text style={styles.uploadDesc}>{desc}</Text>
          </View>
          <View style={styles.actionBox}>
            {isUploading ? (
              <ActivityIndicator color={Colors.primary} size="small" />
            ) : isDone ? (
              <Text style={styles.uploadedText}>Added</Text>
            ) : (
              <Plus color={Colors.primary} size={20} />
            )}
          </View>
        </Card>
      )}
    </Pressable>
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
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: Colors.textSecondary,
    marginBottom: Spacing.xl,
    lineHeight: 22,
  },
  uploadList: {
    gap: Spacing.md,
  },
  uploadCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  pressed: {
    transform: [{ scale: 0.98 }],
    backgroundColor: '#F9FAFB',
  },
  doneCard: {
    borderColor: '#D1FAE5',
    backgroundColor: '#F0FDF4',
  },
  iconBox: {
    width: 48,
    height: 48,
    backgroundColor: '#F3F4F6',
    borderRadius: Border.radius,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBoxDone: {
    backgroundColor: '#D1FAE5',
  },
  uploadTextContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  uploadTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text,
  },
  requiredBadge: {
    fontSize: 10,
    fontWeight: '700',
    color: Colors.error,
    backgroundColor: '#FEF2F2',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  uploadDesc: {
    fontSize: 13,
    color: Colors.textSecondary,
  },
  actionBox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.card,
  },
  uploadedText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.success,
  },
  footer: {
    padding: Spacing.lg,
    paddingBottom: Spacing.xl,
    backgroundColor: Colors.card,
    borderTopWidth: 1,
    borderTopColor: Colors.border,
  },
});
