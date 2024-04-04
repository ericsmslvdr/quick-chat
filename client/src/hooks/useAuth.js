import { useContext } from "react";
import { AuthProvider } from "../providers/AuthProvider";

export const useAuth = () => useContext(AuthProvider);