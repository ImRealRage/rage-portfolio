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

export default function Home() {
  return (
    <WaterWaveWrapper
      imageUrl=""
      dropRadius="3"
      perturbance="3"
      resolution="2048"
    >
      {() => (
        <div className="h-screen p-10">
          <div className="max-w-2xl mx-auto">
            <Card title="Ui Components">
              <div className="grid grid-cols-4">
                <Button>Basic Button</Button>
                <Button>
                  <GoHomeFill />
                  Basic Button
                </Button>
                <Button isIcon>
                  <FaUser />
                </Button>
                <Button link="https://www.google.com">Google</Button>
              </div>
              <Input type="text" placeholder="Full Name" />
              <Input type="text" placeholder="Full Name" icon={<FaUser />} />
              <TextArea placeholder="Name" icon={<FaUser />} />
              <Profile />
              <MagneticWrapper className="w-[350px]">
                <Fancybutton text="Contact Me" icon={<FaArrowRight />} />
              </MagneticWrapper>
              <LiveClock timezone="Asia/Kolkata" />
              <MagneticWrapper className="">
                <ScrollDown />
              </MagneticWrapper>
            </Card>
          </div>
        </div>
      )}
    </WaterWaveWrapper>
  );
}
