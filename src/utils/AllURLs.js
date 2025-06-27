import { BASE_URL } from "./api";

export const Login_URL = `${BASE_URL}/AdminAuth/login`;

export const SignUp_URL = `${BASE_URL}/AdminAuth/register`;

export const FgtPwd_URL = `${BASE_URL}/AdminAuth/forgot-password`;

export const NewPassword_URL = `${BASE_URL}/AdminAuth/reset-password`;

export const ResetPwd_URL = `${BASE_URL}/AdminAuth/verify-code`;

export const AttenRecord_URL = `${BASE_URL}/attendance-records/filter/date-range`;

export const downloadRecord_URL = `${BASE_URL}/AttendanceReport/generate`;

export const candidates = `${BASE_URL}/Candidates`;

export const CurrentUser = `${BASE_URL}/AdminAuth/currentUser`;