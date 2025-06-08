import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView className="flex-1 px-4">
        <View className="py-6">
          <Text className="text-3xl font-bold text-foreground mb-2">
            Welcome to Student Hub
          </Text>
          <Text className="text-muted-foreground mb-6">
            Your all-in-one university companion
          </Text>
          
          <View className="space-y-4">
            <View className="bg-card p-4 rounded-lg border border-border">
              <Text className="text-lg font-semibold text-card-foreground mb-2">
                📧 Email Streaks
              </Text>
              <Text className="text-muted-foreground">
                Stay on top of your university emails and maintain your reading streak!
              </Text>
            </View>
            
            <View className="bg-card p-4 rounded-lg border border-border">
              <Text className="text-lg font-semibold text-card-foreground mb-2">
                💼 Job Opportunities
              </Text>
              <Text className="text-muted-foreground">
                Swipe through job opportunities tailored for students
              </Text>
            </View>
            
            <View className="bg-card p-4 rounded-lg border border-border">
              <Text className="text-lg font-semibold text-card-foreground mb-2">
                🧠 Mental Wellness
              </Text>
              <Text className="text-muted-foreground">
                Track your mood and connect with your mental health
              </Text>
            </View>
            
            <View className="bg-card p-4 rounded-lg border border-border">
              <Text className="text-lg font-semibold text-card-foreground mb-2">
                🎟️ Event Tickets
              </Text>
              <Text className="text-muted-foreground">
                Buy and sell event tickets with fellow students
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
} 