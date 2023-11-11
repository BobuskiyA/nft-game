import { ScrollContext } from "@/helpers/scrollContext";
import { FC, ReactNode, useContext } from "react";

type Props = {
  toSection: string;
  children: ReactNode;
  customClass: string;
};

const AnchorLink: FC<Props> = ({ toSection, children, customClass }) => {
  const scrollTo = useContext(ScrollContext);

  return (
    <a
      href={toSection}
      onClick={(event) => scrollTo(event,toSection)}
      className={customClass}
    >
      {children}
    </a>
  );
};

export default AnchorLink;
