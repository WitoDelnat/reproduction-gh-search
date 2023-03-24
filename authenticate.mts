import { createAppAuth } from "@octokit/auth-app";

// Instructions
//
// 1. Retrieve user code
//    Get with https://github.com/login/oauth/authorize?client_id=Iv1.326789f2989df7d7
//    This will redirect to http://localhost:3000 and you can take the code from URL.
// 2. Get user to server token
//    execute `npm run authenticate`
//
// note: the user code will expire after 10 minutes
const USER_CODE = "enter_your_user_code";

const PRIVATE_KEY = `redacted`;

const authenticate = createAppAuth({
  appId: 309477,
  clientId: "Iv1.326789f2989df7d7",
  clientSecret: "redacted",
  privateKey: PRIVATE_KEY,
});

const { token } = await authenticate({ type: "oauth-user", code: USER_CODE });

console.log("User-to-server token:", token);
