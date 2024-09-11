import { NextRequest } from "next/server"

export const maxDuration = 60;
export const dynamic = 'force-dynamic';

export async function GET(
  _request: NextRequest,
  { params }: { params: { subdomain: string } }
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const linkaimeHandlePromise = fetch(`https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${params.subdomain}`, { signal: controller.signal });
    const bskyHandlePromise = fetch(`https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${params.subdomain.replace('.linkai.me', '.bsky.social')}`, { signal: controller.signal });
    const [linkaimeHandle, bskyHandle] = await Promise.all([linkaimeHandlePromise, bskyHandlePromise]);
    clearTimeout(timeoutId);

    const linkaimeUserPromise = linkaimeHandle.json();
    const bskyUserPromise = bskyHandle.json();
    const [linkaimeUser, bskyUser] = await Promise.all([linkaimeUserPromise, bskyUserPromise]);

    if (linkaimeUser.did !== undefined) {
      return new Response(linkaimeUser.did);
    }
    if (bskyUser.did !== undefined) {
      if (linkaimeHandle.status !== 400 || linkaimeUser.message !== "Unable to resolve handle") {
        return new Response('Unable to certify user');
      }
      return new Response(bskyUser.did);
    }
    return new Response('User not found');
  } catch (error) {
    if (error.name === 'AbortError') {
      return new Response('Bluesky request timed out', { status: 408 });
    }
    return new Response('An error occurred', { status: 500 });
  }
}