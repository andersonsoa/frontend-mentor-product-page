import Head from "next/head";
import styles from "./styles.module.scss";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      <section className={styles.layout}>{children}</section>
    </>
  );
};
