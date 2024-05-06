import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";
import BloggerDetailsPagination from "../../components/BloggerDetailsPagination";
import Footer from "../../components/Footer";

export default function BloggerDetailsPage() {
  return (
    <>
      <Helmet>
        <title>BLOGSLY | blog</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex mb-72 flex-col items-center justify-start w-full bg-white-A700">

        <div className="flex flex-col items-center justify-start w-full mt-10 gap-[97px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-center w-full bg-gray-600_01">
                <div className="h-[525px] w-full relative">
                  <Img
                    src="images/img_mask_group.svg"
                    alt="image_one"
                    className="justify-center h-[525px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                  />
                  <div className="flex flex-row md:flex-col justify-between items-center w-[78%] top-[11%] right-0 left-0 m-auto md:gap-10 absolute">
                    <div className="flex flex-col items-start justify-start w-[58%] md:w-full gap-[25px]">
                      <div className="flex flex-row justify-start">
                        <Button color="white_A700_3f" size="sm" shape="round" className="w-full font-light">
                          Writer
                        </Button>
                      </div>
                      <Heading
                        size="xl"
                        as="h1"
                        className="!text-white-A700 tracking-[0.12px] !font-merriweather italic"
                      >
                        Eps 3 : How to write a book properly and correctly by paying attention to various parts to
                        support the story
                      </Heading>
                      <div className="flex flex-row justify-start items-center w-[37%] md:w-full gap-3.5">
                        <div className="flex flex-col items-center justify-start h-[60px] w-[60px]">
                          <Img
                            src="images/img_ellipse_5_60x60.png"
                            alt="circleimage"
                            className="h-[60px] w-[60px] md:h-auto rounded-[50%]"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[69%] gap-[3px]">
                          <Heading as="h2" className="!text-white-A700 tracking-[0.12px] text-center !font-semibold">
                            By Jhone Leonardo
                          </Heading>
                          <Text size="xs" as="p" className="!text-white-A700 text-center">
                            Podcaster & Blogger
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-center w-[32%] md:w-full p-8 sm:p-5 bg-white-A700_3f rounded-[5px]">
                      <div className="flex flex-col items-center justify-start w-full gap-6 my-[11px]">
                        <Heading size="lg" as="h3" className="!text-white-A700 tracking-[0.12px] !font-semibold">
                          Find and make it easy for yourself in listening to our podcasts on
                        </Heading>
                        <div className="flex flex-row justify-between w-full">
                          <Img
                            src="images/img_iconfinder_anch.svg"
                            alt="iconfinderanch"
                            className="h-[50px] w-[50px]"
                          />
                          <Img src="images/img_soundcloud_1.svg" alt="soundcloudone" className="h-[50px] w-[50px]" />
                          <Img src="images/img_spotify_1.svg" alt="spotifyone_one" className="h-[50px] w-[50px]" />
                          <Img src="images/img_podcast_1_1.svg" alt="podcast1one_one" className="h-[50px] w-[50px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-[-106px] p-[21px] md:px-5 sm:p-5 bg-white-A700 shadow-2xl max-w-[920px] rounded-[5px]">
                <div className="flex flex-row md:flex-col justify-start items-center w-full mt-2 ml-[5px] gap-[22px] md:gap-5">
                  <Img
                    src="images/img_rectangle_39.png"
                    alt="image_two"
                    className="w-[24%] md:w-full md:h-[215px] object-cover rounded-[5px]"
                  />
                  <div className="flex flex-col items-start justify-start w-[74%] md:w-full">
                    <div className="flex flex-row justify-between items-center w-full">
                      <Button color="gray_200" size="xs" shape="round" className="font-light min-w-[74px]">
                        Writer
                      </Button>
                      <Text size="xs" as="p">
                        25 August, 2020{" "}
                      </Text>
                    </div>
                    <Heading as="h4" className="mt-5 !text-gray-900 tracking-[0.12px] !font-merriweather italic">
                      Eps 3 : How to write a book properly and correctly by paying attention to various parts to support
                      the story
                    </Heading>
                    <Text size="xs" as="p" className="mt-2.5 leading-[25px]">
                      Did you come here for something in particular or just general Riker-bashing? And blowing into
                      maximum warp speed, you appeared for an instant to be in two places at once. We have a sabot...
                    </Text>
                    <div className="flex flex-row justify-start items-center mt-2.5 gap-5">
                      <Button
                        color="indigo_900_01"
                        size="lg"
                        shape="round"
                        leftIcon={<Img src="images/img_play.svg" alt="Group" />}
                        className="gap-2.5 !text-white-A700 font-light min-w-[132px]"
                      >
                        Play Now
                      </Button>
                      <Text size="xs" as="p">
                        Go to Spotify Now
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-full md:px-5 max-w-[1106px]">
            <div className="flex flex-row sm:flex-col justify-start items-center w-[40%] md:w-full gap-[18px] sm:gap-5">
              <Button color="gray_300_01" size="7xl" shape="circle" className="w-[76px]">
                <Img src="images/img_podcast_1.svg" />
              </Button>
              <div className="flex flex-col items-start justify-start w-[79%] sm:w-full gap-2">
                <Heading size="xl" as="h2" className="ml-0.5 md:ml-0 !font-merriweather text-center !font-black">
                  Latest Podcasts{" "}
                </Heading>
                <Text size="lg" as="p" className="tracking-[0.12px] text-center">
                  Get started on latest episodes
                </Text>
              </div>
            </div>
            <div className="w-full mt-[17px] gap-[22px] grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
              <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                <div className="h-[207px] w-full relative">
                  <Img
                    src="images/img_rectangle_9_3.png"
                    alt="image"
                    className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                  />
                  <Button shape="circle" className="w-[72px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img src="images/img_play.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full mb-2.5 gap-2.5">
                  <Heading size="s" as="h3" className="!font-merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs" as="p">
                    By LaosPodcast
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                <div className="h-[207px] w-full relative">
                  <Img
                    src="images/img_rectangle_9_4.png"
                    alt="image"
                    className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                  />
                  <Button shape="circle" className="w-[72px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img src="images/img_play.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full mb-2.5 gap-2.5">
                  <Heading size="s" as="h4" className="!font-merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs" as="p">
                    By LaosPodcast
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                <div className="h-[207px] w-full relative">
                  <Img
                    src="images/img_rectangle_9_5.png"
                    alt="image"
                    className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                  />
                  <Button shape="circle" className="w-[72px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img src="images/img_play.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full mb-2.5 gap-2.5">
                  <Heading size="s" as="h5" className="!font-merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs" as="p">
                    By LaosPodcast
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                <div className="h-[207px] w-full relative">
                  <Img
                    src="images/img_rectangle_9_6.png"
                    alt="image"
                    className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                  />
                  <Button shape="circle" className="w-[72px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img src="images/img_play.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full mb-2.5 gap-2.5">
                  <Heading size="s" as="h6" className="!font-merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs" as="p">
                    By LaosPodcast
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                <div className="h-[207px] w-full relative">
                  <Img
                    src="images/img_rectangle_9_7.png"
                    alt="image"
                    className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                  />
                  <Button shape="circle" className="w-[72px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img src="images/img_play.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full mb-2.5 gap-2.5">
                  <Heading size="s" as="h6" className="!font-merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs" as="p">
                    By LaosPodcast
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                <div className="h-[207px] w-full relative">
                  <Img
                    src="images/img_rectangle_9_8.png"
                    alt="image"
                    className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                  />
                  <Button shape="circle" className="w-[72px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img src="images/img_play.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full mb-2.5 gap-2.5">
                  <Heading size="s" as="h6" className="!font-merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs" as="p">
                    By LaosPodcast
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                <div className="h-[207px] w-full relative">
                  <Img
                    src="images/img_rectangle_9_9.png"
                    alt="image"
                    className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                  />
                  <Button shape="circle" className="w-[72px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img src="images/img_play.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full mb-2.5 gap-2.5">
                  <Heading size="s" as="h6" className="!font-merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs" as="p">
                    By LaosPodcast
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                <div className="h-[207px] w-full relative">
                  <Img
                    src="images/img_rectangle_9_10.png"
                    alt="image"
                    className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                  />
                  <Button shape="circle" className="w-[72px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img src="images/img_play.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full mb-2.5 gap-2.5">
                  <Heading size="s" as="h6" className="!font-merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs" as="p">
                    By LaosPodcast
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                <div className="h-[207px] w-full relative">
                  <Img
                    src="images/img_rectangle_9_11.png"
                    alt="image"
                    className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                  />
                  <Button shape="circle" className="w-[72px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img src="images/img_play.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full mb-2.5 gap-2.5">
                  <Heading size="s" as="h6" className="!font-merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs" as="p">
                    By LaosPodcast
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                <div className="h-[207px] w-full relative">
                  <Img
                    src="images/img_rectangle_9_12.png"
                    alt="image"
                    className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                  />
                  <Button shape="circle" className="w-[72px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img src="images/img_play.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full mb-2.5 gap-2.5">
                  <Heading size="s" as="h6" className="!font-merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs" as="p">
                    By LaosPodcast
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                <div className="h-[207px] w-full relative">
                  <Img
                    src="images/img_rectangle_9_4.png"
                    alt="image"
                    className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                  />
                  <Button shape="circle" className="w-[72px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img src="images/img_play.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full mb-2.5 gap-2.5">
                  <Heading size="s" as="h6" className="!font-merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs" as="p">
                    By LaosPodcast
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[15px] p-[13px] bg-white-A700 shadow-md rounded-[5px]">
                <div className="h-[207px] w-full relative">
                  <Img
                    src="images/img_rectangle_9_13.png"
                    alt="image"
                    className="justify-center h-[207px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-[5px]"
                  />
                  <Button shape="circle" className="w-[72px] left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Img src="images/img_play.svg" />
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-full mb-2.5 gap-2.5">
                  <Heading size="s" as="h6" className="!font-merriweather">
                    The secrets of writing a good book
                  </Heading>
                  <Text size="xs" as="p">
                    By LaosPodcast
                  </Text>
                </div>
              </div>
            </div>
            <BloggerDetailsPagination className="flex flex-row justify-start sm:w-full mt-[50px]" />
          </div>
        </div>

      </div>
    </>
  );
}
