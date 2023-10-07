"use server";
import axios from "axios";
const N8N_ENDPOINT =
  "https://automate.xentora.com/webhook/964498ba-dbd4-4a39-84b7-23045bb9a48b";
export async function sendApplication(data: any) {
  const res = await axios.post(N8N_ENDPOINT, data);
}
