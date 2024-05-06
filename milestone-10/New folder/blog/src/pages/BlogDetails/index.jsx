import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";
import Footer from "../../components/Footer";

export default function BlogDetailsPage() {
  return (
    <>
      <Helmet>
        <title>blog</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700 mb-48">
        <div className="flex flex-col items-center justify-start w-full mt-10 gap-[150px] md:px-5 max-w-[1356px]">
          <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[46px]">
              <div className="flex flex-row justify-center w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    src="images/img_rectangle_20.png"
                    alt="image_one"
                    className="w-full md:h-auto sm:w-full object-cover rounded-[25px]"
                  />
                  <div className="flex flex-col items-start justify-center w-[84%] md:w-full mt-[-132px] p-12 md:p-5 bg-white-A700 shadow-lg rounded-[25px]">
                    <Text
                      size="lg"
                      as="p"
                      className="flex mt-1 ml-4 md:ml-0 !text-black-900 !font-light"
                    >
                      <span className="text-blue_gray-600">Category</span>
                      <span className="text-black-900"></span>
                      <span className="text-pink-300 tracking-[0.12px] font-merriweather font-bold">
                        Writing
                      </span>
                    </Text>
                    <Heading
                      size="2xl"
                      as="h1"
                      className="w-[97%] mt-[25px] ml-4 md:ml-0 tracking-[0.12px] !font-merriweather italic"
                    >
                      How to write a book properly and correctly by paying
                      attention to various parts to support the story
                    </Heading>
                    <div className="flex flex-row sm:flex-col justify-between items-center w-[97%] md:w-full mt-12 ml-4 md:ml-0 sm:gap-10">
                      <div className="flex flex-row justify-start items-center w-[31%] sm:w-full gap-3.5">
                        <Img
                          src="images/img_ellipse_5.png"
                          alt="circleimage"
                          className="h-[70px] w-[70px] md:h-auto rounded-[50%]"
                        />
                        <div className="flex flex-col items-start justify-start w-[72%] gap-0.5">
                          <Heading
                            size="lg"
                            as="h2"
                            className="!text-blue_gray-600 text-center !font-semibold"
                          >
                            By Jhone Leonardo
                          </Heading>
                          <Text size="xs" as="p" className="text-center">
                            12 September, 2020
                          </Text>
                        </div>
                      </div>
                      <Button
                        color="white_A700"
                        size="3xl"
                        shape="round"
                        leftIcon={
                          <Img
                            src="images/img_share_1_1.svg"
                            alt="share (1) 1"
                          />
                        }
                        className="gap-2.5 sm:px-5 font-medium border-pink-300 border border-solid min-w-[191px]"
                      >
                        Share Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[74%] md:w-full">
                <Text as="p" className="leading-[35px]">
                  Did you come here for something in particular or just general
                  Riker-bashing? And blowing into maximum warp speed, you
                  appeared for an instant to be in two places at once. We have a
                  saboteur aboard. We know you’re dealing in stolen ore. But I
                  wanna talk about the assassination attempt on Lieutenant Worf.
                  Could someone survive inside a transporter buffer for 75
                  years? Fate. It protects fools, little children, and ships
                  named “Enterprise.”
                </Text>
                <div className="flex flex-row md:flex-col justify-start items-start w-[97%] md:w-full mt-[50px] gap-5">
                  <Img
                    src="images/img_right_quotation_sign.svg"
                    alt="rightquotation"
                    className="h-[40px] w-[40px]"
                  />
                  <div className="flex flex-col items-start justify-start w-[94%] md:w-full gap-3.5">
                    <Heading
                      size="xl"
                      as="h3"
                      className="!text-blue_gray-600 !font-merriweather italic"
                    >
                      There is a way out of every box, a solution to every
                      puzzle; it’s just a matter of finding it.
                    </Heading>
                    <Text as="p">JEAN-LUC PICARD</Text>
                  </div>
                </div>
                <Text as="p" className="flex mt-[49px] leading-[35px]">
                  <span className="text-blue_gray-600">
                    The game’s not big enough unless it scares you a little.
                    Wait a minute – you’ve been declared dead. You can’t give{" "}
                  </span>
                  <span className="text-blue_gray-600 font-bold">
                    orders around
                  </span>
                  <span className="text-blue_gray-600">
                    here. I’ll alert the crew. What? We’re not at all alike!
                    Flair is what marks the difference between artistry and mere
                    competence.
                  </span>
                </Text>
                <Text as="p" className="mt-2.5 leading-[35px]">
                  Did you come here for something in particular or just general
                  Riker-bashing? And blowing into maximum warp speed, you
                  appeared for an instant to be in two places at once. We have a
                  saboteur aboard.
                </Text>
                <Text as="p" className="mt-2.5 leading-[35px]">
                  Could someone survive inside a transporter buffer for 75
                  years? Fate. It protects fools, little children, and ships
                  named “Enterprise.”
                </Text>
                <Heading
                  size="lg"
                  as="h4"
                  className="mt-[45px] !text-blue_gray-600 !font-merriweather"
                >
                  Lorem Ipsum Dolor Sit Amet
                </Heading>
                <Text as="p" className="mt-5 leading-[35px]">
                  Did you come here for something in particular or just general
                  Riker-bashing? And blowing into maximum warp speed, you
                  appeared for an instant to be in two places at once. We have a
                  saboteur aboard. We know you’re dealing in stolen ore. But I
                  wanna talk about the assassination attempt on Lieutenant Worf.
                  Could someone survive inside a transporter buffer for 75
                  years? Fate. It protects fools, little children, and ships
                  named “Enterprise.”
                </Text>
                <div className="flex flex-row md:flex-col mt-[50px] gap-[29px]">
                  <Img
                    src="images/img_rectangle_23.png"
                    alt="rectangle"
                    className="w-[49%] md:w-full md:h-[334px] object-cover rounded-[15px]"
                  />
                  <Img
                    src="images/img_rectangle_24.png"
                    alt="rectangle"
                    className="w-[49%] md:w-full md:h-[334px] object-cover rounded-[15px]"
                  />
                </div>
                <Text as="p" className="mt-[50px] leading-[35px]">
                  What’s a knock-out like you doing in a computer-generated gin
                  joint like this? But the probability of making a six is no
                  greater than that of rolling a seven. I guess it’s better to
                  be lucky than good.
                </Text>
                <Text as="p" className="mt-2.5 leading-[35px]">
                  Damage report! I’ve had twelve years to think about it. And if
                  I had it to do over again, I would have grabbed the phaser and
                  pointed it at you instead of them. Some days you get the bear,
                  and some days the bear gets you. Ensign Babyface! I’m afraid I
                  still don’t understand, sir. Mr. Crusher, ready a collision
                  course with the Borg ship. Yesterday I did not know how to eat
                  gagh. You’re going to be an interesting companion.
                </Text>
                <div className="flex flex-col items-start justify-start w-[43%] md:w-full mt-[27px] ml-[30px] gap-3.5 md:ml-0 sm:ml-5">
                  <div className="flex flex-row justify-start items-start w-[61%] md:w-full gap-[15px]">
                    <div className="h-[10px] w-[10px] mt-[5px] bg-blue_gray-600 rounded-[50%]" />
                    <Text as="p">Lorem ipsum dolor sit amet.</Text>
                  </div>
                  <div className="flex flex-row justify-start items-center w-[82%] md:w-full gap-[15px]">
                    <div className="h-[10px] w-[10px] bg-blue_gray-600 rounded-[50%]" />
                    <Text as="p">At vero eos et accusamus et iusto odio.</Text>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-start items-start w-full gap-[15px] sm:gap-5">
                    <div className="h-[10px] w-[10px] mt-[5px] sm:mt-0 bg-blue_gray-600 rounded-[50%]" />
                    <Text as="p">
                      Excepteur sint occaecat cupidatat non proident.
                    </Text>
                  </div>
                </div>
                <Text as="p" className="mt-[26px] leading-[35px]">
                  Could someone survive inside a transporter buffer for 75
                  years? Fate. It protects fools, little children, and ships
                  named “Enterprise.”
                </Text>
                <Text size="lg" as="p" className="mt-[51px] !font-medium">
                  Tags
                </Text>
                <div className="flex flex-row sm:flex-col justify-start mt-3 gap-[15px] sm:gap-5">
                  <Button
                    color="gray_200"
                    size="md"
                    shape="round"
                    className="font-thin min-w-[96px]"
                  >
                    Writing
                  </Button>
                  <Button
                    color="gray_200"
                    size="md"
                    shape="round"
                    className="font-thin min-w-[97px]"
                  >
                    Tutorial
                  </Button>
                  <Button
                    color="gray_200"
                    size="md"
                    shape="round"
                    className="font-thin min-w-[93px]"
                  >
                    How to
                  </Button>
                  <Button
                    color="gray_200"
                    size="md"
                    shape="round"
                    className="font-thin min-w-[77px]"
                  >
                    Book
                  </Button>
                  <Button
                    color="gray_200"
                    size="md"
                    shape="round"
                    className="font-thin min-w-[77px]"
                  >
                    2020
                  </Button>
                </div>
                <div className="flex flex-row justify-start w-[64%] md:w-full mt-[57px] ml-[153px] md:ml-5">
                  <div className="flex flex-col items-end justify-start w-full gap-[30px]">
                    <div className="h-[163px] w-full relative">
                      <Img
                        src="images/img_right_quotation_sign_blue_50_01.svg"
                        alt="rightquotation"
                        className="h-[103px] w-[103px] -ml-14 left-0 top-0 m-auto absolute"
                      />
                      <Text
                        size="lg"
                        as="p"
                        className="w-[92%] bottom-0 right-0 m-auto text-center !font-light leading-10 absolute"
                      >
                        Increase your knowledge by reading new things and I will
                        share whatever I know for you, as long as I enjoy it
                      </Text>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start items-center w-[38%] md:w-full mr-[168px] gap-[15px] md:mr-5 sm:gap-5">
                      <div className="flex flex-col items-center justify-start h-[60px] w-[60px]">
                        <Img
                          src="images/img_ellipse_5_60x60.png"
                          alt="circleimage_one"
                          className="h-[60px] w-[60px] md:h-auto rounded-[50%]"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[3px]">
                        <Heading
                          as="h5"
                          className="!text-blue_gray-600 text-center !font-semibold"
                        >
                          By Jhone Leonardo
                        </Heading>
                        <Text size="xs" as="p" className="text-center">
                          Podcaster & Blogger
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col w-full gap-[27px]">
            <div className="h-[273px] w-[32%] md:w-full relative">
              <Img
                src="images/img_rectangle_25.png"
                alt="image"
                className="justify-center h-[273px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
              />
              <div className="flex flex-col items-start justify-start w-[73%] gap-[23px] bottom-[11%] left-[6%] m-auto absolute">
                <Heading
                  size="lg"
                  as="h2"
                  className="ml-px md:ml-0 !text-white-A700 !font-merriweather italic"
                >
                  Consistent way of working to train yourself
                </Heading>
                <Text as="p" className="!text-white-A700">
                  5 minutes ago
                </Text>
              </div>
            </div>
            <div className="h-[273px] w-[32%] md:w-full relative">
              <Img
                src="images/img_rectangle_26.png"
                alt="image"
                className="justify-center h-[273px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
              />
              <div className="flex flex-col items-start justify-start w-[73%] gap-[23px] bottom-[11%] left-[6%] m-auto absolute">
                <Heading
                  size="lg"
                  as="h3"
                  className="!text-white-A700 !font-merriweather italic"
                >
                  Consistent way of working to train yourself
                </Heading>
                <Text as="p" className="!text-white-A700">
                  5 minutes ago
                </Text>
              </div>
            </div>
            <div className="h-[273px] w-[32%] md:w-full relative">
              <Img
                src="images/img_rectangle_26_273x433.png"
                alt="image"
                className="justify-center h-[273px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
              />
              <div className="flex flex-col items-start justify-start w-[73%] gap-[23px] bottom-[11%] left-[6%] m-auto absolute">
                <Heading
                  size="lg"
                  as="h4"
                  className="!text-white-A700 !font-merriweather italic"
                >
                  Consistent way of working to train yourself
                </Heading>
                <Text as="p" className="!text-white-A700">
                  5 minutes ago
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
