import Layout from '@/components/layouts/BaseLayout'
import { AppProps } from 'next/app'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Layout>
            <Head>
                <title />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <Component {...pageProps} />
        </Layout>
    </>
)

export default App