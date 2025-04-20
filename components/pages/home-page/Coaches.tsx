import Image from "next/image";
import React from "react";
import { coaches } from "@/data/mock.json";
import Section from "@/components/layouts/section";
import Container from "@/components/layouts/container";
import Button from "@/components/elements/button";
const Coaches = () => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col xl:flex-row mb-12 justify-between items-center">
          <h2 className="text-section font-coolvetica">
            Meet the Coaches Behind elysian
          </h2>
          <Button>Explore Academy</Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-24">
          {coaches.map((coach, index) => {
            return (
              <div className="" key={index}>
                <div className="relative h-[450px] shadow-2xl mb-12 rounded-3xl overflow-hidden">
                  <Image
                    src={coach.image}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <p>{coach.location}</p>
                  <h3 className="text-features font-coolvetica">
                    {coach.name}
                  </h3>
                  <p className="font-satoshi font-light">{coach.description}</p>
                  <button className="px-6 py-3 mt-3 w-fit uppercase bg-highlight-green rounded-full">
                    Subscribe
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Coaches;
