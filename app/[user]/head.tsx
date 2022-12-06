export default function Head({ params }:{
  params: { user: string }
}) {
  return (
    <>
        <title>{'Linkai.Me - ' + params.user}</title>
        <meta name="description" content='Welcome to Linkai.Me' />
    </>
  )
}