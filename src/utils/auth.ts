import { User } from "types";
import { LONG_MAX_AGE, SHORT_MAX_AGE } from "@/constants";

export async function handleLogin(username: string, password: string): Promise<[boolean, string]> {
  const { data, error } = await useFetch(getAPIPath("jwt-token"), {
    method: 'POST',
    body: { username: username, password: password },
    headers: { Authorization: 'Bearer ' + "" }
  });
  let errorResponse = error.value;
  if (errorResponse && errorResponse.status !== 200) {
    return [false, errorResponse.message]
  }
  const tokens = data.value as { refresh: string, access: string, sessionid: string };
  await saveUserTokens(tokens);
  await getUserInformation(tokens.access);
  return [true, ""]
}

async function saveUserTokens(tokens: { refresh: string, access: string, sessionid: string }) {
  useManageCookie("refresh", LONG_MAX_AGE).value = tokens.refresh;
  useManageCookie("sessionid", LONG_MAX_AGE).value = tokens.sessionid;
  useManageCookie("access", SHORT_MAX_AGE).value = tokens.access;
}

async function getUserInformation(access: string) {
  const { data, error } = await useFetch(getAPIPath("users"), {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + access }
  });
  const user = data.value as User;
  useUser().value = user;
  useManageCookie("u", LONG_MAX_AGE).value = JSON.stringify(user);
}
