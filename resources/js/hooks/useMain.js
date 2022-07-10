import { useState, useEffect } from "react";
import axios from 'axios';

export const useMain = () => {
    const [ main ] = useState(null);
    useEffect(() => {
      axios.get();
    }, [])
    return main;
}