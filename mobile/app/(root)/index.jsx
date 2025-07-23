import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';//Link, routrer
import { Text, View, RefreshControl, Alert } from 'react-native';
import { SignOutButton } from '@/components/SignOutButton';
import { useTransactions } from '../../hooks/useTransactions';
import PageLoader from '../../components/PageLoader';
import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from '../../assets/styles/home.styles';
import { BalanceCard } from '../../components/BalanceCard';
import { FlatList } from 'react-native';
import  NoTransactionsFound  from '../../components/NoTransactionsFound';
import { TransactionItem } from '../../components/TransactionItem';
//import { useUser } from '@clerk/clerk-expo';


export default function Page() {
  const { user } = useUser();
  const router = useRouter();
  const [refreshing, setRefreshing] = useState(false);

  // ✅ Debug Logs
  console.log("🔍 Debug Components:");
  console.log("PageLoader:", PageLoader);
  console.log("BalanceCard:", BalanceCard);
  console.log("TransactionItem:", TransactionItem);
  console.log("NoTransactionsFound:", NoTransactionsFound);
  console.log("SignOutButton:", SignOutButton);
  console.log("useTransactions:", useTransactions);

  const { transactions, summary, isLoading, loadData, deleteTransaction } = useTransactions(user.id);
  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  }

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleDelete = (id) => {
    Alert.alert("Delete Transaction", "Are you sure you want to delete this transaction?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => deleteTransaction(id) },
    ]);
  };
  if (isLoading && !refreshing) return <PageLoader />;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/*  HEADER */}
        <View style={styles.header}>
          {/*  LEFT SIDE */}
          <View style={styles.headerLeft}>
            <Image
              source={require('../../assets/images/logo.png')}
              style={styles.headerLogo}
              resizeMode="contain"
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome,</Text>
              <Text style={styles.usernameText}>
                {user?.emailAddresses[0]?.emailAddress.split('@')[0]}
              </Text>
            </View>
          </View>
          { /*  RIGHT SIDE */}
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.addButton} onPress={() => router.push("/create")}>
              <Ionicons name="add" size={20} color="#FFF" />
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <SignOutButton />
          </View>
        </View>

        <BalanceCard summary={summary} />

        <View style={styles.transactionsHeaderContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
        </View>
      </View>

      <FlatList
        style={styles.transactionsList}
        contentContainerStyle={styles.transactionsListContent}
        data={transactions}
        renderItem={({ item }) => <TransactionItem item={item} onDelete={handleDelete} />}
        ListEmptyComponent={<NoTransactionsFound />}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
}