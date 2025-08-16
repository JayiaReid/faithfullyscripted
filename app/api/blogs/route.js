import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "app/api/blogs/blogs.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const blogPosts = JSON.parse(jsonData);

  return new Response(JSON.stringify(blogPosts), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}