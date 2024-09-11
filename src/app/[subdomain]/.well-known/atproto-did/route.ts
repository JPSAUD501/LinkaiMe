import { NextRequest } from "next/server"

export async function GET(
  _request: NextRequest,
  { params }: { params: { subdomain: string } }
) {
  const linkaimeHandlePromise = fetch(`https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${params.subdomain}`)
  const bskyHandlePromise = fetch(`https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${params.subdomain.replace('.linkai.me', '.bsky.social')}`)
  const [linkaimeHandle, bskyHandle] = await Promise.all([linkaimeHandlePromise, bskyHandlePromise])
  const linkaimeUserPromise = linkaimeHandle.json()
  const bskyUserPromise = bskyHandle.json()
  const [linkaimeUser, bskyUser] = await Promise.all([linkaimeUserPromise, bskyUserPromise])
  if (linkaimeUser.did !== undefined) {
    return new Response(linkaimeUser.did)
  }
  if (bskyUser.did !== undefined) {
    if (linkaimeHandle.status !== 400 || linkaimeUser.message !== "Unable to resolve handle") {
      return new Response('Unable to certify user')
    }
    return new Response(bskyUser.did)
  }
  return new Response('User not found')
}