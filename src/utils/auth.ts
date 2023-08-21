import { User } from "types";

export async function handleLogin(username: string, password: string): Promise<[boolean, string]> {
  const { data, error } = await useFetch(getFullPath("jwt-token"), {
    method: 'POST',
    body: { username: username, password: password },
    headers: { Authorization: 'Bearer ' + "" }
  });
  let errorResponse = error.value;
  if (errorResponse && errorResponse.status !== 200) {
    return [false, errorResponse.message]
  }
  const tokens = data.value as { refresh: string, access: string };
  await saveUserTokens(tokens);
  await getUserInformation(tokens.access);
  return [true, ""]
}

async function saveUserTokens(tokens: { refresh: string, access: string }) {
  useCookie("refresh", { sameSite: true, maxAge: 2505600 }).value = tokens.refresh;
  useCookie("access", { sameSite: true, maxAge: 86400 }).value = tokens.access;
}

async function getUserInformation(access: string) {
  const { data, error } = await useFetch(getFullPath("users"), {
    method: 'GET',
    headers: { Authorization: 'Bearer ' + access }
  });
  useCookie("u", { sameSite: true, maxAge: 2505600 }).value = JSON.stringify(data.value);
}