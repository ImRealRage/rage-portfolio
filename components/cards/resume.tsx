import Image from "next/image";
import Card from "../ui/card";
import SignatureImg from "@/public/assets/images/me/signature.png";
import Button from "../ui/button";
import { FaDownload } from "react-icons/fa";
import Socials from "../ui/socials";

export default function ResumeCard() {
  return (
    <Card className="md:h-full">
      <p className="text-lg xl:text-2xl font-medium text-primary-foreground">
        I am a software engineering student skilled in C++, Java, Python, and
        Kotlin. At Walmart Global Tech, I increased product handling efficiency
        by 14% and cut costs by 8%. Currently, I am pursuing a Computer Science
        degree at Chandigarh University and working on several self-led
        projects, including developing Android applications and creating web
        applications using the MERN stack. Proficient in AI/ML, AWS, and various
        programming tools, I am a proactive team player with a keen eye for
        detail, eager to apply my academic knowledge to real-world software
        development challenges.
      </p>
      {/* Signature */}
      <div>
        <Image src={SignatureImg} alt="Signature by Kanishk" />
      </div>
      {/* Socials and Resume downloads */}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/* Socials */}
        <Socials />
        <a href="https://raw.githubusercontent.com/ImRealRage/my-portfolio/main/My_Resume.pdf">
          <Button>
            <FaDownload />
            Download Resume
          </Button>
        </a>
      </div>
    </Card>
  );
}
