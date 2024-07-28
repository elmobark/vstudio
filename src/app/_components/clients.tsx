import Image from "next/image";

import { InfiniteMovingCards } from "~/components/ui/infinite-moving-cards";

export const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative flex h-[50vh] flex-col items-center justify-center  overflow-hidden rounded-md antialiased md:h-[30rem]">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
              <Image
                height={29}
                width={43}
                src={img}
                alt={`${name}'s logo`}
                className="w-5 md:w-10"
              />

              <Image
                height={28}
                width={131}
                src={nameImg}
                alt={name}
                className="w-20 md:w-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
const testimonials = [
    {
      quote: `Collaborating with  was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. 's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand,  is the ideal partner.`,
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote: `Collaborating with  was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. 's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand,  is the ideal partner.`,
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote: `Collaborating with  was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. 's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand,  is the ideal partner.`,
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote: `Collaborating with  was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. 's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand,  is the ideal partner.`,
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote: `Collaborating with  was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. 's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand,  is the ideal partner.`,
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
   const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ] as const;