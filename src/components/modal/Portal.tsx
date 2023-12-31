import { PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps extends PropsWithChildren {}

const Portal = ({ children }: PortalProps) => {
  const mount = document.getElementById("portal");
  const el = document.createElement("div");
  el.className =
    "bg-white/50 w-screen h-screen flex justify-center items-center fixed top-0 left-0";

  useEffect(() => {
    if (mount) {
      mount.appendChild(el);
    }
    return () => {
      if (mount) mount.removeChild(el);
    };
  }, [el, mount]);

  return createPortal(children, el);
};

export default Portal;
