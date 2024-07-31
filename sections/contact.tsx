import ContactCard from "@/components/cards/contact";
import Heading from "@/components/heading/heading";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import SelectInput from "@/components/ui/select-input";
import TextArea from "@/components/ui/text-area";
import { FormEvent, useRef, useState, useEffect } from "react";
import { FaPhoneVolume, FaUser } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { MdEmail, MdSubject } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import emailjs from "@emailjs/browser";
import { toast } from "sonner"; // Import toast from sonner
import { TbRobotOff } from "react-icons/tb";

// Math CAPTCHA generation
function generateMathCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  return {
    question: `${num1} + ${num2}`,
    answer: num1 + num2,
  };
}

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [services, setServices] = useState<string[]>([]);
  const [ratings, setRatings] = useState<string[]>([]);
  const [captcha, setCaptcha] = useState(generateMathCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");

  useEffect(() => {
    setCaptcha(generateMathCaptcha());
  }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const form = formRef.current;

    if (!form) {
      toast.error("Form is not available.");
      return;
    }

    const formElements = form.elements as typeof form.elements & {
      name: HTMLInputElement;
      email: HTMLInputElement;
      subject: HTMLInputElement;
      message: HTMLTextAreaElement;
      captchaInput: HTMLInputElement;
    };

    if (
      !formElements.name.value ||
      !formElements.email.value ||
      !formElements.subject.value ||
      !formElements.message.value ||
      !formElements.captchaInput.value
    ) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (parseInt(formElements.captchaInput.value) !== captcha.answer) {
      toast.error("Incorrect CAPTCHA answer. Please try again.");
      setCaptcha(generateMathCaptcha()); // Reset CAPTCHA
      return;
    }

    emailjs
      .sendForm(
        "service_5xzzklr",
        "template_s59a3na",
        form,
        "GvFgF1Rqb1Re7cSFR"
      )
      .then(
        (res) => {
          toast.success("Gotcha! I will reply you soon...");
        },
        (error) => {
          toast.error("Failed to send email. Please try again.", error.text);
        }
      );
  };

  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
          <div className="flex flex-col gap-8">
            {/* Contact Card */}
            <ContactCard
              title="Contact me at"
              icon={<FaPhoneVolume className="fill-[#333] text-lg" />}
              text="123-456-789"
              btnText="Call me"
            />
            <ContactCard
              title="Chat with me"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text="test@test.com"
              btnText="Email me"
            />
          </div>
          {/* Contact Form */}
          <form
            onSubmit={sendEmail}
            ref={formRef}
            id="contact"
            className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input
                name="name"
                type="text"
                placeholder="Full Name"
                icon={<FaUser />}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                icon={<MdEmail />}
              />
            </div>
            <div className="flex items-center justify-between mb-4 gap-8">
              <Input
                name="subject"
                type="text"
                placeholder="Subject"
                icon={<MdSubject />}
              />
            </div>
            {/* Multiple Selector */}
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">Services I can help with?</h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {/* Services */}
                  {servicesOptions.map((service) => (
                    <SelectInput
                      key={service.id}
                      type="checkbox"
                      id={service.id}
                      text={service.text}
                      selectedOptions={services}
                      setSelectedOptions={setServices}
                      allowMultiple
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Multiple Selector */}
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">
                  How was your experience on my Website?
                </h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8">
                  {/* Options */}
                  {ratingsOptions.map((rating) => (
                    <SelectInput
                      key={rating.id}
                      type="radio"
                      id={rating.id}
                      text={rating.text}
                      selectedOptions={ratings}
                      setSelectedOptions={setRatings}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* TextArea Message */}
            <TextArea
              name="message"
              placeholder="Your Message to me..."
              icon={<FaRegMessage />}
            />
            {/* CAPTCHA */}
            <div className="flex flex-col gap-4">
              <label htmlFor="captcha" className="text-lg">
                What is {captcha.question}?
              </label>
              <Input
                icon={<TbRobotOff />}
                name="captchaInput"
                type="text"
                placeholder="Please enter answer to prevent bots..."
                //@ts-ignore
                value={captchaInput}
                //@ts-ignore
                onChange={(e) => setCaptchaInput(e.target.value)}
              />
            </div>
            <div className="w-full flex justify-end">
              <div onClick={() => buttonRef.current?.click()}>
                <Button className="!w-44 !py-3 !text-xl">
                  Send <SiMinutemailer />
                </Button>
              </div>
              {/* Hidden data capture */}
              <div className="hidden">
                <input
                  type="text"
                  value={services.join(",")}
                  name="services"
                  hidden
                />
                <input
                  type="text"
                  value={ratings.join(",")}
                  name="rating"
                  hidden
                />
              </div>
              <button type="submit" hidden ref={buttonRef}>
                {/* Hidden Send Button */}
              </button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

const servicesOptions = [
  {
    id: "Web Design",
    text: "Web Design",
  },
  {
    id: "Web Development",
    text: "Web Development",
  },
  {
    id: "Full Website",
    text: "Full Website",
  },
  {
    id: "Logo Design",
    text: "Logo Design",
  },
  {
    id: "SEO",
    text: "SEO",
  },
  {
    id: "AI Integration",
    text: "AI Integration",
  },
];

const ratingsOptions = [
  {
    id: "worst design, ⭐",
    text: "⭐",
  },
  {
    id: "bad design, ⭐⭐",
    text: "⭐⭐",
  },
  {
    id: "average design, ⭐⭐⭐",
    text: "⭐⭐⭐",
  },
  {
    id: "nice design, ⭐⭐⭐⭐",
    text: "⭐⭐⭐⭐",
  },
  {
    id: "amazing design :), ⭐⭐⭐⭐⭐",
    text: "⭐⭐⭐⭐⭐",
  },
];
