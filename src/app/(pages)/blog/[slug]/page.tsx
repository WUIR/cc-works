import blogPosts from "@/content/blog.json";
import { BlogPostContent } from "./BlogPostContent";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <BlogPostContent slugPromise={params} />;
}
