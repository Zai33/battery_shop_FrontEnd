"use client";
import { AppDispatch, RootState } from "@/store";
import { checkAuth } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const { loggedIn, loading } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    if (!loading) {
      if (loggedIn) router.push("/dashboard");
      else router.push("/login");
    }
    
  }, [loggedIn, loading, router]);
  return (
    <div className="text-2xl flex items-center justify-center h-screen">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
