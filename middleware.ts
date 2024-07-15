import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
<<<<<<< HEAD
  publicRoutes: ["/", "/hello", "/contact", "/faqs", "/demo" , "/about", /^\/invite\/.*/],
=======
  publicRoutes: ["/", "/contact", "/faqs", "/about", /^\/invite\/.*/],
>>>>>>> 174ca097fee4f3eda0fcfef14e1bf993f2755522
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
