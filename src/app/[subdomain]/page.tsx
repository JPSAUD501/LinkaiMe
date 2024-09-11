import { redirect } from 'next/navigation'

export default function bskyRedirect({ params }: { params: { subdomain: string } }) {
  redirect(`https://bsky.app/profile/${params.subdomain}`)
}