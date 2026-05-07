import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Colors, Spacing, Border } from '../../constants/theme';
import { JobCard } from '../../components/JobCard';
import { Search, Filter } from 'lucide-react-native';

export default function JobsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
        <View style={styles.searchBar}>
          <Search size={20} color={Colors.textSecondary} />
          <TextInput 
            placeholder="Search by skill or title..." 
            style={styles.searchInput}
            placeholderTextColor={Colors.textSecondary}
          />
        </View>
        <View style={styles.filterBtn}>
          <Filter size={20} color={Colors.primary} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <JobCard 
          title="Senior Welder"
          employer="ABC Construction Corp."
          location="Makati, Metro Manila"
          salary="₱800 - ₱1000 / day"
          type="Full-time"
        />
        <JobCard 
          title="Site Carpenter"
          employer="BuildRight Inc."
          location="Quezon City"
          salary="₱750 / day"
          type="Project-based"
        />
        <JobCard 
          title="Maintenance Plumber"
          employer="Metro Builders"
          location="Taguig"
          salary="₱850 / day"
          type="Full-time"
        />
        <JobCard 
          title="Heavy Equipment Operator"
          employer="Pioneer Works"
          location="Pasig City"
          salary="₱1,200 / day"
          type="Contract"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  searchHeader: {
    flexDirection: 'row',
    padding: Spacing.lg,
    gap: Spacing.sm,
    backgroundColor: Colors.card,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background,
    borderRadius: Border.radius,
    paddingHorizontal: Spacing.md,
    height: 44,
    gap: Spacing.sm,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: Colors.text,
  },
  filterBtn: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F5FA',
    borderRadius: Border.radius,
  },
  scroll: {
    padding: Spacing.lg,
    paddingBottom: 100,
  },
});
