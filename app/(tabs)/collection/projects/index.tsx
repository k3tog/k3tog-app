import { getUserProjectsV1Api } from '@/apis/user-projects';
import ListCardWithStatus from '@/components/card/card.list-item-status';
import ChipFilled from '@/components/chip/chip.filled';
import TopbarLarge from '@/components/topbar/topbar.large';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet, ScrollView, Text } from 'react-native';

const STATUS = ['All', 'Not Started', 'WIP', 'Finished'];

const MyProjects = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<UserProjectV1ResponseData[]>([]); // Add state for projects

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await getUserProjectsV1Api({ username: 'knitwithcode' }); // Replace 'your_username' with the actual username
      if (response.data) {
        setProjects(response.data); // Set the fetched projects
      } else {
        console.error('Error fetching projects:', response.error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopbarLarge title="Projects" leftIcon={icons.chevronLeftColoredIcon} />
      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
      <View style={styles.statusContainer}>
        {STATUS.map((status) => (
          <ChipFilled key={status} label={status} />
        ))}
      </View>
      {/* </ScrollView> */}
      {projects.length === 0 ? (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyStateText}>It seems you haven't added any projects.</Text>
          <Text style={styles.emptyStateText}>Start your collection now!</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.listContainer}>
          {projects.map((project) => (
            <ListCardWithStatus
              key={project.id}
              thumbnail={images.placeholderImage100}
              status={project.status ?? 'Not Started'}
              title={project.title}
              description={project.note ?? 'No description'}
              dateFrom={project.co_date ?? 'Unknown'}
              dateTo={project.fo_date ?? 'Unknown'}
              onPress={() => router.push(`/collection/projects/${project.id}`)}
            />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default MyProjects;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  statusContainer: {
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    alignSelf: 'flex-start',
    width: '100%',
  },
  listContainer: {
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 24,
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  emptyStateText: {
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
    color: '#898D8F',
    lineHeight: 27,
  },
});
