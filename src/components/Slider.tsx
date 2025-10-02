"use client";

import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRouter } from "next/navigation";

import dayjs from "dayjs";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { RECENT_POSTS_QUERYResult } from "@/sanity/types";

export default function Slider({ posts = [] as RECENT_POSTS_QUERYResult }) {
  const router = useRouter();

  if (!posts?.length) return null;

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
      effect={"fade"}
      slidesPerView={1}
      loop={true}
      navigation={false}
      pagination={{ clickable: true, dynamicBullets: true }}
      autoplay={{
        delay: 9000,
        disableOnInteraction: false
      }}
      className="!pb-6"
    >
      {posts.slice(0, 3).map((blog) => (
        <SwiperSlide key={blog._id}>
          <article
            className="flex flex-col h-full rounded-3xl md:rounded-3xl bg-white p-5 cursor-grab"
            key={blog._id}
          >
            <div className="mb-5">
              <div className="flex items-center gap-x-4 text-xs">
                <time className="font-semibold text-gray-900">
                  {dayjs(blog.publishedAt).format("D MMMM YYYY")}
                </time>
                <div className="flex flex-wrap gap-2">
                  {blog.categories?.map((cat) => (
                    <span
                      key={cat._id}
                      className="relative z-10 rounded-full px-5 py-2 text-gray-50"
                      style={{ backgroundColor: cat.color || "#334155" }}
                    >
                      {cat.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="py-1 md:py-5">
                <h2
                  className="text-pretty line-clamp-3 text-sm
                 md:text-lg font-semibold italic leading-6 text-gray-900"
                >
                  {blog.title}
                </h2>
              </div>
            </div>
            <div className="mt-auto flex justify-end">
              <button
                className="flex items-center text-sm rounded-full px-5 py-2 bg-gray-300 hover:bg-gray-400 text-gray-900 hover:text-gray-50"
                onClick={() =>
                  router.push(`/posts/${blog.slug?.current || ""}`)
                }
              >
                <span className="mr-1">Detaljnije</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
