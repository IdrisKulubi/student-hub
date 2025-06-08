import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EmailsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 justify-center items-center px-4">
        <Text className="text-2xl font-bold text-foreground mb-4">
          📧 Email Reader
        </Text>
        <Text className="text-muted-foreground text-center">
          Your university emails with gamification features will appear here
        </Text>
      </View>
    </SafeAreaView>
  );
} 