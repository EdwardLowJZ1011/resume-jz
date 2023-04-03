import axios from "axios";

export async function rsa() {
  const resp = await axios.post("/api/users/rsa", {});
  const { status, data } = resp;

  if (status == 200) {
    return data["success"];
  }

  return false;
}

export async function logout() {
  const resp = await axios.post("/api/users/logout", {});
  const { status, data } = resp;

  if (status == 200) {
    return data["success"];
  }

  return false;
}

export async function getOTP() {
  const resp = await axios.post("/api/users/getOTPDetail", {});
  const { status, data } = resp;
 
  if (status == 200) {
    return data["success"];
  }

  return false;
}

export async function logout2() {
  await axios.post("/api/users/logout-v2", {});
}
