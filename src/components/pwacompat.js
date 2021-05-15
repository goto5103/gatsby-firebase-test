import React from "react"
import Helmet from "react-helmet"

const PwaCompat = () => {
  return (
    <Helmet>
      <script async src="https://cdn.jsdelivr.net/npm/pwacompat" crossorigin="anonymous"></script>
    </Helmet>
  )
}
export default PwaCompat