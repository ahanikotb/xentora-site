import React from "react";

function BlogCard({ post }: any) {
  return (
    <div>
      {" "}
      <article className="transition-all duration-300 ease-in  mb-10 border border-black rounded-lg sm:flex hover:shadow-xl">
        <div className=" sm:block sm:rotate-180 p-2 sm:[writing-mode:_vertical-lr]">
          <time
            // datetime="2022-10-10"
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-black"
          >
            <span>{post.year}</span>
            <span className="w-px flex-1 bg-white"></span>
            <span>{post.monthDay}</span>
          </time>
        </div>
        <div className="sm:hidden">
          <img
            alt={post.imageAlt}
            src={post.image}
            className="aspect-video h-full w-full object-cover"
          />
        </div>
        <div className="hidden sm:block sm:basis-96">
          <img
            alt={post.imageAlt}
            src={post.image}
            className="aspect-video h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            <a href={post.postSlug + "." + post.id}>
              <h3 className="text-black font-bold uppercase text-2xl sm:text-4xl ">
                {post.title}
              </h3>
            </a>

            <p className="mt-2 sm:text-xl line-clamp-3 text-sm/relaxed text-black">
              {post.description}
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <a
              href={post.postSlug + "." + post.id}
              className="block  px-5 py-3 text-center text-xs font-bold uppercase rounded-b-lg rounded-l-none  text-black transition duration-600"
            >
              Read More
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogCard;
