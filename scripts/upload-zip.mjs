import { put } from "@vercel/blob";
import { readFileSync } from "fs";
import { resolve } from "path";

const zipPath = resolve("/Users/dann/Downloads/Marshmellow-Day-Spa-Mac.zip");
const file = readFileSync(zipPath);

console.log("Uploading zip to Vercel Blob... (~114 MB, please wait)");

const blob = await put("Marshmellow-Day-Spa-Mac.zip", file, {
  access: "public",
  contentType: "application/zip",
});

console.log("\n✅ Upload complete!");
console.log("URL:", blob.url);
console.log("\nAdd this to your .env.local:");
console.log(`NEXT_PUBLIC_DOWNLOAD_URL=${blob.url}`);
