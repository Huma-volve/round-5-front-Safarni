import axiosInstance from "@/lib/axios-instance";
import { loginData, signUpData, resetPasswordData } from "@/lib/types";
import { AxiosError } from "axios";
import { toast } from "sonner";

export async function login(credentials: loginData) {
  try {
    const response = await axiosInstance.post(`login`, credentials);
    console.log(response);
    if (response?.status === 200) {
      console.log("res", response.data);

      toast.success(response?.data?.message || "Login successful");
      localStorage.setItem("token", response?.data?.data?.token);
      localStorage.setItem("name", JSON.stringify(response?.data?.data?.name));
      localStorage.setItem(
        "email",
        JSON.stringify(response?.data?.data?.email)
      );
    }
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    const errorMessage = axiosError.response?.data?.message || "Login failed";
    toast.error(errorMessage);
    throw error;
  }
}

export async function signUp(data: signUpData) {
  try {
    const response = await axiosInstance.post(`register`, data);
    console.log(response);
    if (response?.status === 201) {
      console.log(response.data);
      toast.success(response?.data?.message || "Registration successful");
      localStorage.setItem("token", response?.data?.data?.token);
      localStorage.setItem("name", JSON.stringify(response?.data?.data?.name));
      localStorage.setItem(
        "email",
        JSON.stringify(response?.data?.data?.email)
      );
    }
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    const errorMessage =
      axiosError.response?.data?.message || "Registration failed";
      toast.error(errorMessage);
      console.log(error);
      throw error;
  }
}

export async function forgetPassword(data: { email: string }) {
  try {
    const response = await axiosInstance.post(`forgot-password`, data);
    console.log(response);
    if (response?.status === 200) {
      console.log(response.data);
      localStorage.setItem("email", data.email);
      toast.success("Email sent successfully");
    }
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    const errorMessage =
      axiosError.response?.data?.message || "Failed to send email";
      toast.error(errorMessage);
      console.log(error);
      throw error;
  }
}

export async function resetPassword(data: resetPasswordData) {
  try {
    const response = await axiosInstance.post(`reset-password`, data);
    console.log(response);
    if (response?.status === 200) {
      console.log(response.data);
      toast.success("Password reset successfully");
    }
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    const errorMessage =
      axiosError.response?.data?.message || "Failed to reset password";
      toast.error(errorMessage);
      console.log(error);
      throw error;
  }
}

export async function verifyCode(data: { email: string; otp: string }) {
  try {
    const response = await axiosInstance.post(`otp`, data);
    console.log(response);
    if (response?.status === 200) {
      console.log(response.data);
      toast.success("Code verified successfully");
    }
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    const errorMessage =
      axiosError.response?.data?.message || "Failed to verify code";
      toast.error(errorMessage);
      console.log(error);
      throw error;
  }
}

export async function logout() {
  try {
    const response = await axiosInstance.post(`logout`);
    console.log(response);
    if (response?.status === 200) {
      console.log(response.data);
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      toast.success(response?.data?.message ||"Loged Out successfully");
    }
    return response;
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;
    const errorMessage =
      axiosError.response?.data?.message || "Failed to Logout";
      toast.error(errorMessage);
      console.log(error);
      throw error;
  }
}
