import React from "react";
import { Helmet } from "react-helmet";
import { Button, TextArea, Input, Text, Img, Heading } from "../../components";
import Footer from "../../components/Footer";

export default function ContactUsPage() {
  return (
    <>
      <Helmet>
        <title>blog | Contact</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex  items-center justify-center w-full mb-48  bg-white-A700">
        <div className="flex  flex-row justify-center w-full md:px-5 max-w-[1103px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="lg:ml-32">
                <Heading size="xl" as="h1" className="!text-blue_gray-600">
                  Contact us
                </Heading>
                <Text as="p" className="mt-[5px]">
                  Complete the form to contact us
                </Text>
              </div>
              <div className="flex flex-row items-center md:flex-col justify-start  w-full mt-[39px] gap-[29px] md:gap-5">
                <div className="flex flex-col items-center justify-center w-[29%] md:w-full gap-[19px]">
                  <Heading size="xl" as="h2" className="!text-blue_gray-600">
                    Info
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-[18px]">
                    <div className="flex flex-row justify-start items-center gap-2.5">
                      <Img
                        src="images/img_vector_blue_gray_600.svg"
                        alt="vector_one"
                        className="h-[20px] w-[20px]"
                      />
                      <Text as="p">01234567890</Text>
                    </div>
                    <div className="flex flex-row justify-start items-center ml-[3px] gap-2.5 md:ml-0">
                      <Img
                        src="images/img_mail_1.svg"
                        alt="mailone_one"
                        className="h-[20px] w-[20px]"
                      />
                      <Text as="p">hello@gmail.com</Text>
                    </div>
                    <div className="flex flex-row justify-start items-start ml-[3px] gap-[9px] md:ml-0">
                      <Img
                        src="images/img_pin_1.svg"
                        alt="pinone_one"
                        className="h-[20px] mt-[5px]"
                      />
                      <Text as="p" className="w-[92%] leading-[30px]">
                        Massachusetts Ave NW, Washington, DC 20036
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-center w-[69%] md:w-full mt-2 p-[26px] md:mt-0 sm:p-5 bg-white-A700 shadow-xl rounded-[10px]">
                  <div className="flex flex-col items-start justify-start w-full gap-[30px] my-[17px]">
                    <div className="flex flex-row md:flex-col justify-start sm:w-full gap-[25px] md:gap-5">
                      <Input
                        shape="round"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-[49%] md:w-full font-light"
                      />
                      <Input
                        shape="round"
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-[49%] md:w-full font-light"
                      />
                    </div>
                    <Input
                      shape="round"
                      name="your_subject"
                      placeholder="Your Subject"
                      className="w-full sm:w-full font-light"
                    />
                    <TextArea
                      shape="round"
                      name="description"
                      placeholder="Description"
                      className="w-full sm:pb-5 sm:px-5 text-gray-400 font-light"
                    />
                    <Button
                      color="indigo_900_01"
                      size="5xl"
                      shape="round"
                      className="sm:px-5 !text-white-A700 min-w-[190px] sm:min-w-full"
                    >
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
