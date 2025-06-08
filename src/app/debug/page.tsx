"use client";
import { useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export default function DebugToken() {
  const { getToken } = useAuth();

  useEffect(() => {
    getToken().then((token) => {
      console.log("🔐 Clerk token:", token);
      // Paste it at https://jwt.io to inspect manually
    });
  }, []);

  return null;
}