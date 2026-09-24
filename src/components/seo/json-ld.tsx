/**
 * Emits a JSON-LD block. Rendered from Server Components only, so the payload
 * is always in the initial HTML where crawlers will see it.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // The payload is built from our own typed data, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
