// "use client";
import AOS from "aos";
import "aos/dist/aos.css";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook, FaTwitter } from "react-icons/fa";

export const SideBarCard = () => {
  useEffect(() => {
    AOS.init({ disable: "mobile" });
  }, []);

  return (
    <div className="space-y-5 mb-10">
      <Card
        className="border"
        data-aos="flip-left"
        data-aos-duration="2000"
        data-aos-easing
      >
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-auto px-2 rounded-3xl"
        >
          <img
            src="https://i.ibb.co/gRp9JYy/agent1.webp"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center space-y-2">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Lily Bicharm
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Realtor
          </Typography>
          <Typography
            color="blue-gray"
            variant="small"
            className=""
            textGradient
          >
            Whether it is working with a first-time home buyer, a home listing...
          </Typography>
          <div className="divider"></div>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <FaFacebook className="text-blue-500 cursor-pointer" />
          <FaTwitter className="text-light-blue-500 cursor-pointer" />
          <IoLogoInstagram className="text-purple-500 text-xl cursor-pointer" />
        </CardFooter>
      </Card>

      <Card
        data-aos="flip-left"
        data-aos-duration="2000"
        data-aos-easing
        className="border"
      >
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-auto px-2 rounded-3xl"
        >
          <img
            src="https://i.ibb.co/kBCVnnb/agent2.jpg"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center space-y-2">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Jack London
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Commercial Broker
          </Typography>
          <Typography
            color="blue-gray"
            variant="small"
            className=""
            textGradient
          >
            As an award-winning Realtor ® and CEO of The Egypt Sherrod Real
            Estate Group, Egypt’s dail ...
          </Typography>
          <div className="divider"></div>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <FaFacebook className="text-blue-500 cursor-pointer" />
          <FaTwitter className="text-light-blue-500 cursor-pointer" />
          <IoLogoInstagram className="text-purple-500 text-xl cursor-pointer" />
        </CardFooter>
      </Card>

      <Card
        data-aos="flip-left"
        data-aos-duration="2000"
        data-aos-easing
        className="border"
      >
        <CardHeader
          floated={false}
          shadow={false}
          className="mx-auto px-2 rounded-3xl"
        >
          <img
            src="https://i.ibb.co/wMNTzsw/agent3.webp"
            alt="profile-picture"
          />
        </CardHeader>
        <CardBody className="text-center space-y-2">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Dennis Albo
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Salesperson
          </Typography>
          <Typography
            color="blue-gray"
            variant="small"
            className=""
            textGradient
          >
            Whether it is working with a first-time home buyer, a home listing...
          </Typography>
          <div className="divider"></div>
        </CardBody>
        <CardFooter className="flex justify-center gap-7 pt-2">
          <FaFacebook className="text-blue-500 cursor-pointer" />
          <FaTwitter className="text-light-blue-500 cursor-pointer" />
          <IoLogoInstagram className="text-purple-500 text-xl cursor-pointer" />
        </CardFooter>
      </Card>
    </div>
  );
};

const Sidebar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="mx-3">
      <div className="hidden lg:block">
        <div className="shadow-lg p-3 border  rounded-xl bg-base-100 mb-2">
          <h2 className="text-center text-2xl font-bold text-[#0073e1]">
            Agents
          </h2>
        </div>
        <SideBarCard />
      </div>

      <IconButton
        variant="text"
        color="blue-gray"
        className="lg:hidden"
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <XMarkIcon className="h-6 w-6" strokeWidth={2} />
        ) : (
          <Bars3Icon className="h-6 w-6" strokeWidth={2} />
        )}
      </IconButton>

      <Collapse open={openNav}>
        <div>
          <div className="shadow-lg p-3 border  rounded-xl bg-base-100 mb-2">
            <h2 className="text-center text-2xl font-bold text-[#0073e1]">
              Agents
            </h2>
          </div>
        </div>
        <SideBarCard />
      </Collapse>
    </div>
  );
};

export default Sidebar;
