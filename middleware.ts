import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/hello",
    "/contact",
    "/faqs",
    "/about",
    /^\/invite\/.*/,
    "/sign-in",
  ],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
