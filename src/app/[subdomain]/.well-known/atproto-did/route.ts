import { NextRequest } from "next/server"

export async function GET(
  request: NextRequest,
  { params }: { params: { subdomain: string } }
) {
  if (params.subdomain === 'jpsaud.linkai.me') {
    return new Response('did:plc:wjq7gzqnchhb5eo2vlzvph5j')
  }
}