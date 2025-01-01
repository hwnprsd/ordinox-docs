import React from "react";
import { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Introduction"
          >
            Explore the Docs - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  useEffect(() => {
    window.location = "/docs/Introduction";
  });
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ODX is a Layer 1 blockchain built on the Cosmos SDK, designed to unify liquidity across different blockchains. By tracking the state of all supported blockchains, ODX provides a chain-abstracted user experience. Users can manage their balances and perform decentralized finance (DeFi) actions across multiple chains using a single ODX account, without the need to switch wallets, networks, or applications."
    >
      Redirecting
    </Layout>
  );
}
