//react custom hook file

import { useCallback, useState } from "react";
import { Alert } from "react-native";

const API_URL = "http://192.168.107.48:5001/api";


// This api is for development, we can use this URL in development 
//const API_URL = "http://localhost:5001/api"

// For production, you can use the following URL
//  const API_URL = "https://wallet-application-5b51.onrender.com/api";


export const useTransactions = (userId) => {
    const [transactions, setTransactions] = useState([]);
    const [summary, setSummary] = useState({
        balance: 0,
        income: 0,
        expenses: 0,
    });
    const [isLoading, setIsLoading] = useState(true);
    //useCallback is used for performance reason,and it will memoize the function.When userId changes this will again callback the function
    const fetchTransactions = useCallback(async () => {
        try {
            const response = await fetch(`${API_URL}/transactions/${userId}`)
            const data = await response.json()
            setTransactions(data)
        } catch (error) {
            console.error("OOPS! Error Fetching Transactions!", error);
        }
    }, [userId]);

    const fetchSummary = useCallback(async () => {
        try {
            const response = await fetch(`${API_URL}/transactions/summary/${userId}`)
            const data = await response.json()
            setSummary(data);
        } catch (error) {
            console.error("OOPS! Error Fetching Summary!", error);
        }
    }, [userId]);

    const loadData = useCallback(async () => {
        if (!userId) return;

        setIsLoading(true);
        try {
            //Can run in parallal
            await Promise.all([fetchTransactions(), fetchSummary()]);
        } catch (error) {
            console.log("Error Loading Data", error);
        } finally {
            setIsLoading(false);
        }
    }, [fetchTransactions, fetchSummary, userId]);

    const deleteTransaction = async (id) => {
        try {
            const response = await fetch(`${API_URL}/transactions/${id}`, { method: "DELETE" });
            if (!response.ok) throw new Error("Failed to delete the transaction");

            //refresh data after delete
            loadData();
            Alert.alert("Success", "Transaction deleted successfully");
        } catch (error) {
            console.error("Error Deleting The Transaction", error);
            Alert.alert("Error", error.message);
        }
    };

    return { transactions, summary, isLoading, loadData, deleteTransaction };
};