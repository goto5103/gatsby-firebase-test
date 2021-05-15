import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { auth, useAuth, SocialLogins } from "gatsby-theme-firebase";
import { navigate } from "gatsby";
//https://31navi.com/gatsby-react-social-login
const IndexPage = () => {
  const { isLoggedIn } = useAuth();

  return (
<Layout>
      <SEO title="Home" />
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

export default IndexPage
