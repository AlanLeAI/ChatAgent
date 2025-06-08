// import { clerkIntegration } from "convex/auth/clerk";


export default {
  providers: [
    {
      domain: process.env.CLERK_ISSUER_URL,
      applicationID: "convex",
    },
  ],
};


// export default clerkIntegration();

