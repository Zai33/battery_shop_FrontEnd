"use client";
import { ResendOtp, SignUpUser, VerifyOtp } from "@/libs/api";
import { AuthResponse, SendOtpResponse } from "@/types/type";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const SignupForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [timer, setTimer] = useState(60);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      setOtpLoading(true);

      const res: SendOtpResponse = await SignUpUser(
        email,
        name,
        password,
        confirmPassword
      );

      if (res.con) {
        toast.success("OTP sent to your email!");
        if (res.userId) {
          setUserId(res.userId);
        }
        // Show OTP modal only after backend response
        setShowOtpModal(true);
        setResendDisabled(true);
        setTimer(60);
      } else {
        toast.error(res.message);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Registration failed. Please try again.";
      toast.error(message);
    } finally {
      setLoading(false);
      setOtpLoading(false);
    }
  };

  useEffect(() => {
    if (otp.length === 6) handleVerifyOtp();
  }, [otp]);

  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) return;
    try {
      const res: AuthResponse = await VerifyOtp(userId, otp);
      if (!res.con) {
        toast.error(res.message);
        return;
      }
      toast.success("Account verified successfully!");
      router.push("/login");
      setShowOtpModal(false);
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to verify OTP.";
      toast.error(message);
    }
  };

  const handleResendOtp = async () => {
    setOtpLoading(true);
    try {
      const res: AuthResponse = await ResendOtp(userId);
      if (res.con) {
        toast.success("New OTP sent to your email!");
        setTimer(60);
        setResendDisabled(true);
      } else {
        toast.error(res.message);
      }
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Failed to verify OTP.";
      toast.error(message);
    } finally {
      setOtpLoading(false);
    }
  };

  useEffect(() => {
    if (!resendDisabled) return;
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [resendDisabled]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-200 to-pink-200">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-10 relative">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Create Account
        </h2>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm transition"
              required
            />
          </div>

          <button
            disabled={loading}
            className={`w-full py-3 text-white font-semibold rounded-xl shadow-md transition transform ${
              loading
                ? "bg-purple-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700 hover:-translate-y-1"
            }`}
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <p className="text-center text-gray-500 mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-purple-600 hover:underline">
              Login
            </Link>
          </p>
        </form>

        {/*  OTP Modal */}
        {showOtpModal && (
          <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
              {otpLoading ? (
                <div className="flex flex-col items-center justify-center text-gray-600 py-8 space-y-4">
                  <div className="w-10 h-10 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-lg font-medium">Sending OTP...</p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-semibold mb-4 text-center">
                    Verify OTP
                  </h3>
                  <p className="text-gray-600 mb-4 text-center">
                    Enter the 6-digit OTP sent to your email.
                  </p>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={6}
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 shadow-sm text-center text-lg tracking-widest w-full"
                  />

                  <button
                    onClick={handleResendOtp}
                    disabled={resendDisabled}
                    className={`w-full py-2 mt-4 text-sm rounded-lg transition ${
                      resendDisabled
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-purple-600 hover:underline"
                    }`}
                  >
                    {resendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
