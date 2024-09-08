'use client';
import Image from "next/image";
import "./style.css"
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from 'react'
import BrotliDecodeModule from 'brotli-dec-wasm';

function PostOptions() {
  const searchParams = useSearchParams();
  const compressedContent = searchParams.get("content") ?? searchParams.get("c") ?? searchParams.get("text") ?? searchParams.get("t");
  const [decompressedContent, setDecompressedContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function decompressContent() {
      if (!compressedContent) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        const BrotliDecode = await BrotliDecodeModule;
        const uint8Array = Uint8Array.from(atob(compressedContent), c => c.charCodeAt(0));
        const decompressed = BrotliDecode.decompress(uint8Array);
        const decodedContent = new TextDecoder().decode(decompressed);
        
        setDecompressedContent(decodeURIComponent(decodedContent));
      } catch (error) {
        setError("Error decompressing content. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }

    decompressContent();
  }, [compressedContent]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      <a
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href={`https://x.com/intent/tweet${decompressedContent ? `?text=${encodeURIComponent(decompressedContent)}` : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="invert"
          src="/x.svg"
          alt="X Logo"
          width={20}
          height={20}
        />
        On X/Twitter
      </a>
      <a
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href={`https://bsky.app/intent/compose${decompressedContent ? `?text=${encodeURIComponent(decompressedContent)}` : ""}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/bluesky.svg"
          alt="Bluesky Logo"
          width={25}
          height={25}
        />
        On Bluesky
      </a>
    </div>
  );
}

export default function MsPost() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <h1 className="text-3xl sm:text-4xl text-center sm:text-center">Where do you like to post this content?</h1>
        <Suspense fallback={<div className="text-sm font-semibold">Loading...</div>}>
          <PostOptions />
        </Suspense>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2"
          href="https://t.me/melodyscoutbot/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="hover:underline hover:underline-offset-4">Go to MelodyScout →</div>
        </a>
      </footer>
    </div>
  );
}