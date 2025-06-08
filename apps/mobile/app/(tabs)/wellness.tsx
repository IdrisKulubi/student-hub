import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function WellnessScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 justify-center items-center px-4">
        <Text className="text-2xl font-bold text-foreground mb-4">
          🧠 Mental Wellness
        </Text>
        <Text className="text-muted-foreground text-center">
          Mood tracking, journaling, and wellness features will be here
        </Text>
      </View>
    </SafeAreaView>
  );
} 