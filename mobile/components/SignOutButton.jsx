import { styles } from '../assets/styles/auth.styles';
import { useClerk } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';
import { Alert, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
//This entire file for the sign-out button is provided by the clerk
export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk()
  const handleSignOut = async () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      {text: "Cancel", style: "cancel"},
      {text: "Logout", style: "destructive", onPress: signOut},
    ])
  }
  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
      <Ionicons name='log-out-outline' size={22} color={COLORS.text} />
    </TouchableOpacity>
  )
}