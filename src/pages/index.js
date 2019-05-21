import React from "react"
import { Link } from "gatsby"

import DefaultLayout from "../layouts/default"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <DefaultLayout>
    <SEO title="Home" />
    Hello World!
  </DefaultLayout>
)

export default IndexPage
