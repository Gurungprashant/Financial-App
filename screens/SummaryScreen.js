import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { transactions } from './TransactionListScreens';

const getSummaryData = (transactions) => {
  const totalCount = transactions.length;
  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const highestSpending = Math.max(...transactions.map(transaction => transaction.amount));
  const lowestSpending = Math.min(...transactions.map(transaction => transaction.amount));
  const highestSpendingTransaction = transactions.find(transaction => transaction.amount === highestSpending);
  const lowestSpendingTransaction = transactions.find(transaction => transaction.amount === lowestSpending);

  return {
    totalCount,
    totalAmount,
    highestSpending,
    lowestSpending,
    highestSpendingTransaction,
    lowestSpendingTransaction,
  };
};

export default function SummaryScreen() {
  const { totalCount, totalAmount, highestSpending, lowestSpending, highestSpendingTransaction, lowestSpendingTransaction } = getSummaryData(transactions);

  return (
    <View style={styles.container}>
      <View style={styles.summaryContainer}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryItem}>Transactions</Text>
          <Text style={styles.summaryValue}>{totalCount}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryItem}>Balance</Text>
          <Text style={styles.summaryValue}>${totalAmount.toFixed(2)}</Text>
        </View>
        <Text style={styles.spendingTitle}>High Spending</Text>
        <View style={styles.spendingDetails}>
          <View style={styles.spendingRow}>
            <Text style={styles.spendingName}>{highestSpendingTransaction.name}</Text>
            <Text style={styles.spendingAmount}>${highestSpending.toFixed(2)}</Text>
          </View>
        </View>
        <Text style={styles.spendingTitle}>Low Spending</Text>
        <View style={styles.spendingDetails}>
          <View style={styles.spendingRow}>
            <Text style={styles.spendingName}>{lowestSpendingTransaction.name}</Text>
            <Text style={styles.spendingAmount}>${lowestSpending.toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  summaryContainer: {
    padding: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    paddingTop: 6
  },
  summaryItem: {
    fontSize: 22,
  },
  summaryValue: {
    fontSize: 22,
    color: 'gray',
  },
  spendingTitle: {
    fontSize: 23,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 4,
    color: '#4A90E2',
  },
  spendingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 6,
  },
  spendingName: {
    fontSize: 22,
  },
  spendingAmount: {
    fontSize: 22,
    color: 'gray',
  },
});
