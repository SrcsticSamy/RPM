// custom hook to check if the user is online or offline
import { useState, useEffect } from "react";
import NetInfo from '@react-native-community/netinfo';

export default function useNetwork() {

    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return isConnected;
}