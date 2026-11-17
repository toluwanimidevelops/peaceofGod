import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { IoMdArrowBack } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import moment from "moment";
import data from "../assets/data";
import { BlogCard } from "../components/home/Blogs";

const SITE_NAME = "Peace of God Ministry";
const BLOG_LIST_ROUTE = "/blog"; // change to your blog listing route

const placeholderText =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero dicta sunt explicabo rem reprehenderit tenetur quas omnis, sapiente veritatis ab necessitatibus debitis! In, commodi corporis eaque nisi minima voluptatem reiciendis? ".repeat(
    10,
  );

const BlogDetails = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const relatedBlogs = [
    {
      id: 2,
      genre: "Press",
      image: data.Image18,
      title: "Bake Sale For Charity",
      description: placeholderText,
      publishedAt: new Date(),
      time: "5:00pm",
    },
    {
      id: 3,
      genre: "Press",
      image: data.Image18,
      title: "Bake Sale For Charity",
      description: placeholderText,
      publishedAt: new Date(),
      time: "5:00pm",
    },
  ];

  const blog = {
    id: 1,
    genre: "Press",
    image: data.Image18,
    title: "Bake Sale For Charity",
    description: placeholderText,
    publishedAt: new Date(),
    time: "5:00pm",
  };

  // ---------- Back button ----------
  const handleBack = () => {
    // If the visitor opened a shared link directly, there is no history to go back to
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate(BLOG_LIST_ROUTE);
    }
  };

  // ---------- Share data ----------
  const shareUrl = window.location.href;
  const shareDescription = blog.description.trim().slice(0, 160);
  // og:image must be an absolute URL
  const shareImage = /^https?:\/\//.test(blog.image)
    ? blog.image
    : `${window.location.origin}${blog.image}`;

  const handleShare = async () => {
    const shareData = {
      title: blog.title,
      text: shareDescription,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      // AbortError just means the user closed the share sheet
      if (err.name !== "AbortError") console.error(err);
    }
  };

  return (
    <div data-nav-theme={"light"} className="pt-20">
      <Helmet>
        <title>{`${blog.title} | ${SITE_NAME}`}</title>
        <meta name="description" content={shareDescription} />

        {/* Open Graph (Facebook, WhatsApp, LinkedIn, Telegram) */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={shareDescription} />
        <meta property="og:image" content={shareImage} />
        <meta property="og:url" content={shareUrl} />
        <meta
          property="article:published_time"
          content={new Date(blog.publishedAt).toISOString()}
        />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={shareDescription} />
        <meta name="twitter:image" content={shareImage} />
      </Helmet>

      <div className="w-full pt-30 pb-10 bg-[#1a699c] ">
        <div className="px-6 md:px-12 mx-auto ">
          <div>
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-white cursor-pointer mb-5 text-sm"
            >
              <IoMdArrowBack className="text-white" />
              Back to Insight
            </button>
            <p className="inline-flex w-fit mb-5 items-center justify-center rounded-full border border-[#c5d51a] bg-[#f0f5fc]/6 px-4 py-2 text-xs leading-none text-white">
              {blog?.genre}
            </p>
            <div className="flex max-md:flex-col gap-2 justify-between">
              <div>
                <h1 className="text-white mb-2 font-primary text-[48px] max-md:text-[30px] leading-[1.2] font-bold">
                  {blog?.title.length > 30
                    ? blog?.title.slice(0, 30) + "...."
                    : blog.title}
                </h1>
                <div className="flex gap-2 text-gray-50">
                  <p>{SITE_NAME}</p>.{" "}
                  <p>{moment(blog?.publishedAt).format("MMM Do YY")}</p>.{" "}
                  <p>4 min Read</p>
                </div>
              </div>
              <div className="max-w-full w-[700px] leading-loose font-secondary break-words text-white ">
                {blog?.description.slice(0, 400)}...
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-md:flex-col px-6 md:px-6 mt-10 gap-10 mx-auto flex-wrap">
        <div className="flex-1">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full max-h-120 rounded-2xl object-cover"
          />
          <div className="mx-auto max-md:px-2 mt-6">
            <h1 className="font-bold font-mulish text-[36px] max-lg:text-[30px] max-md:text-[30px] leading-15 capitalize ">
              {blog?.title}
            </h1>
            <div>
              <p className="w-full wrap-break-word break-all whitespace-normal overflow-hidden text-black text-[14px] leading-loose font-secondary mt-1">
                {blog?.description}
              </p>
            </div>

            {/* Mobile share card */}
            <div className="w-full md:hidden my-3 bg-blue-100 rounded-2xl border-2 border-[#101e6d]/10 p-5 ">
              <h3 className="text-xl text-black/80 font-semibold font-primary">
                Enjoyed This?
              </h3>
              <div className="mt-1">
                <p className="font-primary text-gray-700 text-sm">
                  Share it with someone who needs it.
                </p>
                <button
                  onClick={handleShare}
                  className="border-[#101e6d] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#101e6d] hover:text-white duration-700 border text-[#101e6d] mt-5 p-3 w-full"
                >
                  <IoShareSocialOutline /> {copied ? "Link copied!" : "Share"}
                </button>
              </div>
            </div>

            <h1 className="font-bold font-mulish mt-20 text-[36px] max-lg:text-[30px] max-md:text-[30px] leading-15 capitalize ">
              Related Articles
            </h1>
            {relatedBlogs.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {relatedBlogs.map((relatedBlog, index) => (
                  <BlogCard
                    data={relatedBlog}
                    index={index}
                    key={relatedBlog.id}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop sidebar */}
        <div className="w-[400px] max-md:hidden max-w-full">
          <div className="sticky flex gap-4 flex-col top-30">
            <div className="w-full rounded-2xl bg-white border-2 border-[#101e6d]/10 p-5 ">
              <h3 className="text-2xl text-black/80 font-semibold font-secondary">
                Content Details
              </h3>
              <div className="mt-3">
                <div className="flex border-b border-[#101e6d]/20 py-4 justify-between">
                  <p className="font-primary text-gray-700 text-sm">
                    Category:
                  </p>
                  <p className="text-sm">{blog?.genre}</p>
                </div>
                <div className="flex border-b border-[#101e6d]/20 py-4 justify-between">
                  <p className="font-primary text-gray-700 text-sm">
                    Read Time:
                  </p>
                  <p className="text-sm">4 min</p>
                </div>
                <div className="flex border-b border-[#101e6d]/20 py-4 justify-between">
                  <p className="font-primary text-gray-700 text-sm">
                    Date Published:
                  </p>
                  <p className="text-sm">
                    {moment(blog?.publishedAt).format("MMM Do YY")}
                  </p>
                </div>
                <button
                  onClick={handleBack}
                  className="border-[#101e6d] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#101e6d] hover:text-white duration-700 border text-[#101e6d] mt-5 p-3 w-full"
                >
                  <IoMdArrowBack /> Back to Insight
                </button>
              </div>
            </div>

            <div className="w-full bg-blue-100 rounded-2xl border-2 border-[#101e6d]/10 p-5 ">
              <h3 className="text-xl text-black/80 font-secondary font-semibold">
                Enjoyed This?
              </h3>
              <div className="mt-1">
                <p className="font-primary text-gray-700 text-sm">
                  Share it with someone who needs it.
                </p>
                <button
                  onClick={handleShare}
                  className="border-[#101e6d] flex items-center justify-center gap-2 cursor-pointer hover:bg-[#101e6d] hover:text-white duration-700 border text-[#101e6d] mt-5 p-3 w-full"
                >
                  <IoShareSocialOutline /> {copied ? "Link copied!" : "Share"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
