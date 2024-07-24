import Link from "next/link";
import { db } from "~/server/db";

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
     {posts.map((post) => (
      <>
      <div key={post.id}>
        <Link href={`/post/${post.id}`}>
          {post.name}
        </Link>
      </div>
        </>
     ))}
      Hello 
    </main>
  );
}
