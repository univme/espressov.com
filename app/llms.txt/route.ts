import { canonicalOrigin } from "@/lib/indexing";
import { llmsTemplate } from "@/lib/llms";
export const dynamic = "force-static";
export function GET() {
  return new Response(
    llmsTemplate.replaceAll("https://www.espressov.com", canonicalOrigin),
    {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    },
  );
}
