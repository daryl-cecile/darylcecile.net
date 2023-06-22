"use client";

import { usePathname } from "next/navigation";
import styles from "../styles/layout.module.scss";
import utilStyles from "../styles/utils.module.scss";
import Anchor from "./Anchor";

export default function HomeHeader({ name }) {
  let show = usePathname() === "/";

  if (!show) return;

  return (
    <>
      <header className={styles.hero}>
        <img
          src="/images/core/profile_180.png"
          width={"135px"}
          height={"135px"}
          className={styles.heroImage}
          alt="Daryl's vector profile image"
        />
        <h1 className={styles.heroTitle}>{name}</h1>
        <p className={utilStyles.paragraph}>
          I'm currently a Software developer at CapitalOne, often found working
          in the Nottingham 🎓 and London 🏡 offices. I graduated with a BSc in
          Computer Science at NTU in 2020 🦠. <br /> When I'm not exploring new
          countries, I spend my time{" "}
          <Anchor href="/projects">making things</Anchor> on the tippy tapper.
          ⌨️
        </p>
        <p className={utilStyles.paragraph}>
          Check out <Anchor href="/cv">my milestones</Anchor>, and take a copy
          of{" "}
          <Anchor isExternal href="/CV/CV-2023.pdf">
            my CV
          </Anchor>
          . <br /> My Career updates are on{" "}
          <Anchor href="https://linkedin.com/in/darylcecile">LinkedIn</Anchor>
        </p>
      </header>
      <hr className={utilStyles.push} />
    </>
  );
}
