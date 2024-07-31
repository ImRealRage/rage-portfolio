import Card from "../ui/card";

export default function BackgroundCard() {
  return (
    <Card className="md:h-full" title="My Background">
      <div>
        <p className="leading-[160%] font-normal text-white/[0.4] text-[16px]">
          Growing up in a &nbsp;
          <span className="text-white underline">bustling city in India</span>
          , my childhood was filled with curiosity and a love for learning.
          Surrounded by the vibrant energy of urban life, I was exposed to a
          diverse range of experiences and cultures. <br />
          <br />
          <span className="text-white underline">
            It was during my teenage years
          </span>
          &nbsp; that my interest in &nbsp;
          <span className="text-white underline">computers</span>&nbsp; began to
          take shape. I spent countless hours exploring &nbsp;
          <span className="text-white underline">software and hardware</span>
          &nbsp; , laying the foundation for my future endeavors in
          <span className="text-white underline">
            &nbsp;technology and programming&nbsp;
          </span>
          . <br />
          <br />
          As I pursued my passion, I immersed myself in various technological
          domains, from
          <span className="text-white">&nbsp;machine learning&nbsp;</span>
          to <span className="text-white">&nbsp;data science&nbsp;</span>. This
          journey naturally led me to
          <span className="text-white">&nbsp;software engineering&nbsp;</span>,
          where I honed my skills and expanded my knowledge, then I delved into
          <span className="text-white">&nbsp;full-stack development&nbsp;</span>
          , mastering the art of building comprehensive web applications. <br />
          <br /> Alongside my technical pursuits, I&apos;ve taken on the role of
          a&nbsp;
          <span className="text-white underline">mentor</span>&nbsp;, guiding
          aspiring developers and sharing my insights through workshops and
          tutorials. <br />
          <br />
          <span className="text-white italic">
            Driven by a belief in the transformative power of technology, I
            strive to develop solutions that not only address practical needs
            but also inspire and empower users, turning everyday interactions
            into meaningful and memorable experiences.
          </span>
        </p>
      </div>
    </Card>
  );
}
