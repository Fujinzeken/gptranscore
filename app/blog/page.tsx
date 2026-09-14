import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/blog-hero";
import BlogGrid from "@/components/blog/blog-grid";
import BlogNewsletter from "@/components/blog/blog-newsletter";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Blog & Insights | PKT Group",
  description:
    "Stay informed with expert insights on trucking technology, driver careers, sustainability, and industry trends from the PKT Group team.",
  openGraph: {
    title: "Blog & Insights | PKT Group",
    description:
      "Trucking technology, driver stories, sustainability, and industry trends from PKT Group.",
    images: [{ url: "/blog/blog-hero.jpg" }],
  },
};

export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogGrid />
      <BlogNewsletter />
      <SiteFooter />
    </main>
  );
}
