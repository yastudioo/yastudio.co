import React from 'react'
import {graphql} from 'gatsby'
import Head from '../components/Head'
import Layout from '../components/Layout'
import Stars from '../components/Stars'
import Content from '../components/Content'
import About from '../components/About Yastudio'
import {TitlePageQueryData} from '../types'

interface AboutPageProps {
  readonly data: TitlePageQueryData
}

const AboutPage: React.FC<AboutPageProps> = ({data}) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <Head
        title="AboutPage"
        image="/images/yass.jpg"
        keywords={[
          `Yastudio`,
          `Web Design`,
          `Programing`,
          `javascript`,
          `Kerman`,
          `react`
        ]}
      />
      <Stars
        normalVelocity={0.0001}
        containerOpacity={0.3}
        addEventListeners={false}
      />

      <Content>
        <About />
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...SiteTitle
    }
  }
`

export default AboutPage
