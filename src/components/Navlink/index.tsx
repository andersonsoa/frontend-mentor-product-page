import NextLink from "next/link";
import classnames from "classnames";

import styles from "./styles.module.scss";

interface NavlinkProps {
  children: React.ReactNode;
  href: string;
  active?: boolean;
}

export const Navlink = ({ children, href, active }: NavlinkProps) => {
  const className = classnames({
    [styles.navlink__active]: active,
    [styles.navlink]: true,
  });

  return (
    <li className={className}>
      <NextLink href={href}>{children}</NextLink>
    </li>
  );
};
