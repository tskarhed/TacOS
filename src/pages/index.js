import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { TAC } from "../components/tac";

const IndexPage = () => (
  <Layout>
    <SEO title="TacOS - A refreshing new operating system" />
    <h2>TacOS - Inpired by <TAC/>, nothing else</h2>
    <p>We have been working day and night to provide you with a fresh operating system with features from other operating systems you know and love.</p>
    <ul>
      <li><b>Personalized ads</b> Never again will you have to see an ad... that is not relevant to you!</li>
      <li><b>Network Troubleshooting</b> that previosuly only was avialable on Windows. Can't find the solution locally? We will troubleshoot your internet connection online!</li>
      <li><b>Safely stored personal information</b>. We have a huge vault that pretty much looks like Fort Knox where we store everything on tape. Only Sarah has the key. And possibly the locksmith, but we have dirt on him, so no need to worry.</li>
      <li><b>Gaming</b>. By leveraging your computers hardware to the maximum you can have the ultimate gaming experience. The amount of compatible games is almost on par with Ubuntu!</li>
      <li><b>Integrated app store</b>. We have a single app store from where you can install all your apps. They all have to go through a rigorous process to ensure the greatest security. They also come in as cheap as $30! What a bargain!</li>
    </ul>
    <h2>Assistants from the great days of operating systems!</h2>
    <p>You might remember Microsoft's legendary Clippy, the paperclip. Clippy would be with you through the sunny days and on the stormy oceans - always there for you to provide support. In times when technology can be confuing we think this is needed.</p>
    <h2>Introducing Tac</h2>
    <p>We have come a long way since then. We want to honor Clippy's heritage. Therefore we introduce to you Clippy's decendant Tac!</p>
    <p>Tac is a nacho. Only because nachos are delicious, no other reason. We have yet to trace back Tac's family tree to Clippy, but the similarities are striking. We are currently investing a lot in genetic research to figure out how a paperclip could end up producing a nacho.</p>
  </Layout>
)

export default IndexPage
