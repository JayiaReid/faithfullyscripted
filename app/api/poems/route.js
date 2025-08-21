import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "app/api/poems/poems.json");
  const jsonData = fs.readFileSync(filePath, "utf8");
  const Poems = JSON.parse(jsonData);

  return new Response(JSON.stringify(Poems), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}