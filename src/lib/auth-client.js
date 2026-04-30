import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "https://skillsphere-ibtesam.vercel.app",
});

