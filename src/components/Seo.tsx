import Head from "next/head"

type SeoProps = {
  title?: string
  description?: string
}

export default function Seo({ title, description }: SeoProps): React.ReactElement {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title ?? "Welcome"}</title>
    </Head>
  )
}
