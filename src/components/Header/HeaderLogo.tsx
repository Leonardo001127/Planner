import React from "react";
import Brand from "../Brand";
import Logo from "../Logo";
type HeaderLogoProps = {
    expand: boolean
}

const HeaderLogo = HeaderLogoProps => {
    return HeaderLogoProps.expand ? (<Brand />) : (<Logo height={26} style={{ marginTop: 6, marginLeft: 14 }} />);
}
export default HeaderLogo;