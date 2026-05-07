import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Button } from '../../components/Button';
import { Colors, Spacing, Border } from '../../constants/theme';
import { useRouter } from 'expo-router';

const MOCK_QUESTIONS = [
  {
    id: 1,
    question: 'How many years have you worked in this trade?',
    options: ['Less than 1 year', '1-3 years', '3-5 years', 'More than 5 years']
  },
  {
    id: 2,
    question: 'Can you read measurements and plans?',
    options: ['Yes, comfortably', 'Yes, basic ones', 'No, I rely on instruction']
  }
];

export default function QuestionsScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const question = MOCK_QUESTIONS[currentStep];
  const isLast = currentStep === MOCK_QUESTIONS.length - 1;
  const hasAnsweredCurrent = answers[currentStep] !== undefined;

  const handleNext = () => {
    if (isLast) {
      router.push('/assessment/upload');
    } else {
      setCurrentStep(s => s + 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${((currentStep + 1) / MOCK_QUESTIONS.length) * 100}%` }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          {currentStep + 1} of {MOCK_QUESTIONS.length}
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.questionText}>{question.question}</Text>
        
        <View style={styles.options}>
          {question.options.map((option, index) => {
            const isSelected = answers[currentStep] === index;
            return (
              <Pressable
                key={index}
                onPress={() => setAnswers(prev => ({ ...prev, [currentStep]: index }))}
                style={[styles.optionCard, isSelected && styles.optionCardSelected]}
              >
                <View style={[styles.radio, isSelected && styles.radioSelected]}>
                  {isSelected && <View style={styles.radioInner} />}
                </View>
                <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                  {option}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button 
          title={isLast ? "Next: Upload Proof" : "Next Question"} 
          disabled={!hasAnsweredCurrent}
          onPress={handleNext} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressContainer: {
    padding: Spacing.lg,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.md,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: Colors.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.primary,
  },
  progressText: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: '500',
  },
  scroll: {
    padding: Spacing.lg,
  },
  questionText: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: Spacing.xl,
    lineHeight: 30,
  },
  options: {
    gap: Spacing.md,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Spacing.lg,
    backgroundColor: Colors.card,
    borderRadius: Border.radiusLg,
    borderWidth: 1,
    borderColor: Colors.border,
    gap: Spacing.md,
  },
  optionCardSelected: {
    borderColor: Colors.primary,
    backgroundColor: '#F0F5FA',
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioSelected: {
    borderColor: Colors.primary,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.primary,
  },
  optionText: {
    fontSize: 16,
    color: Colors.text,
    flex: 1,
  },
  optionTextSelected: {
    fontWeight: '600',
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
