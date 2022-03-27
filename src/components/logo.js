/** @jsx jsx */
import { jsx, Image } from "theme-ui";
import { Link } from "components/link";
import NowTrailerLogo from "assets/clearLogo.png";

export default function Logo() {
  return (
    <Link
      path="/"
      sx={{
        variant: "links.logo",
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        width: "230px",
      }}
    >
      <Image src={NowTrailerLogo} alt="startup landing logo" />
    </Link>
  );
}
