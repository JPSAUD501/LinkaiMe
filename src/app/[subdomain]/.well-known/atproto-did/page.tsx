'use client';
import "../../.well-known/atproto-did/style.css"
import { useRouter } from 'next/navigation'

export default function Home({ params }: { params: { subdomain: string } }) {
  const router = useRouter()
  if (!params.subdomain.endsWith(process.env.NEXT_PUBLIC_ROOT_DOMAIN ?? "")) {
    router.replace("/")
    return
  }
  if (params.subdomain === 'jpsaud.linkai.me') {
    return <div>did:plc:wjq7gzqnchhb5eo2vlzvph5j</div>
  }
  return <div>TODO</div>
}