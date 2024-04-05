import  { useEffect, useState } from 'react'
import Header from '../Shared/Header/Header'
import Navbar from '../Shared/Navbar/Navbar'
import RightSideNav from '../Shared/RightSideNav/RightSideNav'
import { useLoaderData, useParams } from 'react-router'
import { FaRegEye } from 'react-icons/fa'
import { Rating } from '@material-tailwind/react'
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from 'react-router-dom'

const News = () => {
    const [singleNewsData,setSingleNewsData] = useState({})
    const {id} = useParams();
    const news = useLoaderData();

    useEffect(()=>{
        const singleNews = news.find(data => data._id === id);
        setSingleNewsData(singleNews)
    },[news,id])

    const { thumbnail_url, details, author, rating, title, _id, total_view } =
      singleNewsData || {};
    const date = new Date(author?.published_date);
    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <h2 className="text-[#403F3F] text-xl font-semibold">Dragon News</h2>
          {/* details news card start here */}
          <div className="lg:col-span-2  space-y-6">
            <section className="p-5">
              <Link className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50 space-y-6">
                <div className="flex justify-between items-center bg-[#F3F3F3] p-5">
                  <div className="flex items-center gap-3">
                    <img
                      className="w-10 rounded-full"
                      src={author?.img}
                      alt=""
                    />
                    <div>
                      <h3>{author?.name}</h3>
                      <span className="text-xs dark:text-gray-600">
                        {formattedDate}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiBookmark />
                    <CiShare2 />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {title}
                </h3>
                <figure className="object-cover w-full  rounded h-96">
                  <img
                    role="presentation"
                    className="w-full h-full"
                    src={thumbnail_url}
                  />
                </figure>
                <div className="p-6 space-y-2">

                    <p>{details}</p>


                  <div className="border-b-2 "></div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Rating value={5} />
                      <span>{rating?.number}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaRegEye />
                      <p>{total_view}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </section>
          </div>
          {/* details news card end here */}
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}

News.propTypes = {}

export default News