import { NextRequest } from "next/server"

export const maxDuration = 30;
export const dynamic = 'force-dynamic';

export async function GET(
  _request: NextRequest,
  { params }: { params: { subdomain: string } }
) {
  const bskyHandle = params.subdomain.replace('.linkai.me', '.bsky.social')
  const bskyUser = await fetch(`https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=${bskyHandle}`)
  const bskyUserInfo = await bskyUser.json()
  if (bskyUserInfo.did !== undefined) {
    return new Response(bskyUserInfo.did)
  }
  return new Response(`User ${bskyHandle} not found`, { status: 404 })
}