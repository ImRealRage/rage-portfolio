import { FC, ReactNode } from "react";
import Header from "./featured/header";
import Video from "./featured/video";

interface FeaturedCardProps {
  logo?: ReactNode;
  title: string;
  tag: string;
  video: string;
  active: boolean;
  link: string;
}

const FeaturedCard: FC<FeaturedCardProps> = ({
  logo,
  title,
  tag,
  video,
  active,
  link,
}) => {
  return (
    <div className="link w-full h-full bg-secondary-background border border-border shadow-lg rounded-3xl cursor-pointer flex flex-col gap-2 flex-nowrap p-2">
      {/* Header */}
      <Header title={title} tag={tag} />
      {/* Body */}
      <div className="relative flex flex-none flex-nowrap p-6 w-full items-center justify-between h-[550px] border border-border rounded-3xl">
        {/* Video */}
        <Video video={video} active={active} />
      </div>
      {/* Link */}
      <div className="">
        <a
          href={link}
          target="_blank"
          className="flex cursor-pointer items-center w-auto justify-center gap-2 px-4 py-2 text-primary-foreground font-medium rounded-3xl hover:bg-white/[0.1] transition-colors duration-100"
        >
          See Demo
        </a>
      </div>
    </div>
  );
};

export default FeaturedCard;
