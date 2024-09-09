'use client'

import useAuth from "@/hooks/useAuth";

export default function Tasks() {

  const isAuthenticated = useAuth();

  if (!isAuthenticated) return null;

  return <h1>Tasks</h1>
}
