import Fancybutton from "@/components/ui/fancy-button";
import Profile from "@/components/ui/profile";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import { FaArrowRight } from "react-icons/fa";
import FullScreenMenu from "./full-screen-menu/full-screen-menu";
import { useEffect, useState } from "react";
import ToggleButton from "./full-screen-menu/toggle-button";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [showToggle, setShowToggle] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowToggle(true);
      } else {
        setShowToggle(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center md:justify-between">
      <Profile />
      <div className="hidden md:inline">
        <MagneticWrapper>
          <Fancybutton text="Let's Talk" icon={<FaArrowRight />} />
        </MagneticWrapper>
      </div>
      {/* ToggleButton */}
      {showToggle && <ToggleButton open={open} setOpen={setOpen} />}
      {/* Full Screen menu */}
      <AnimatePresence mode="wait">
        {open && <FullScreenMenu />}
      </AnimatePresence>
    </div>
  );
}
