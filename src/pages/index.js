import * as React from "react"
import { Link, graphql } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { auth, useAuth, SocialLogins } from "gatsby-theme-firebase";
import { navigate } from "gatsby";
//https://31navi.com/gatsby-react-social-login

const IndexPage = ({data}) => {
  const { isLoggedIn } = useAuth();
console.log(data)
  return (
<Layout>
      <SEO title="Home" />

      <p>これはテストページです。</p>
      <p>lambdaから取得したgraphql data:{data.test.hello}</p>
      

      {!isLoggedIn && (
        <SocialLogins
          onSuccess={(user) => {
            console.log(user);
            navigate(`/user/${user.user.uid}`);
          }}
        />
      )}
      
      {isLoggedIn && <button onClick={() => auth.signOut()}>ログアウト</button>}
    </Layout>
  )
}

export const query = graphql`
{
  test {
    hello 
  }
}
`

export default IndexPage
