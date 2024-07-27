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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, eligendi
        sequi? Voluptatem facere laudantium ex quos dicta adipisci voluptatum,
        aspernatur explicabo sint modi dolorem quidem ad tempora, officiis
        blanditiis. Molestias. Doloribus dignissimos culpa ullam tempore
        eligendi fuga aspernatur exercitationem beatae, magnam maiores
        perspiciatis possimus! Blanditiis nisi
      </p>
      {/* Signature */}
      <div>
        <Image src={SignatureImg} alt="Signature by Kanishk" />
      </div>
      {/* Socials and Resume downloads */}
      <div className="flex items-center justify-between md:absolute md:bottom-6 md:left-6 md:w-[calc(100%-48px)]">
        {/* Socials */}
        <Socials />
        <Button>
          <FaDownload />
          Download Resume
        </Button>
      </div>
    </Card>
  );
}
