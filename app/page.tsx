"use client";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import WaterWaveWrapper from "@/components/visualEffects/watter-wave-wrapper";
import { GoHomeFill } from "react-icons/go";
import { FaArrowRight, FaUser } from "react-icons/fa";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/text-area";
import Profile from "@/components/ui/profile";
import Fancybutton from "@/components/ui/fancy-button";
import LiveClock from "@/components/ui/live-clock";
import MagneticWrapper from "@/components/visualEffects/magnetic-wrapper";
import ScrollDown from "@/components/ui/scroll-down";
import LandingSection from "@/sections/landing";
import FeaturedSection from "@/sections/featured";
import AboutSection from "@/sections/about";
import ContactSection from "@/sections/contact";

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="pb-8">
          {/* <LandingSection />
          <FeaturedSection />
          <AboutSection /> */}
          <ContactSection />
        </div>
      )}
    </WaterWaveWrapper>
  );
}
