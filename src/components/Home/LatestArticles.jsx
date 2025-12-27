import React from "react";
import ArticlesCard from "../Data/Home/LatestArticles/ArticlesCard";
import articlesData from "../Data/Home/LatestArticles/ArticlesData";
import Image from "next/image";

export default function LatestArticles() {

  const [title, subTitle] = [
    "آخرین مقالات",
    "در مورد این دسته بندی توضیح کوتاهی داریم"
  ];

  return (
    <section className="flex flex-col w-full items-center">
      <div className="flex flex-col items-center mb-5 md:my-20">
        <h2 className="text-xl md:text-4xl font-extrabold mb-4 md:mt-10 font-modam">
          {title}
        </h2>

        <p className="text-[10px] md:text-base text-gray-600 mb-4">
          {subTitle}
        </p>
      </div>

      <div className="flex items-center gap-8 flex-col md:flex-row w-full px-4 md:px-6">
        <div className="flex flex-col gap-8 w-full">
          <ArticlesCard article={articlesData[0]} />
          <ArticlesCard article={articlesData[1]} />
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="relative w-full h-[648px] min-w-[300px] hidden lg:flex">
            <Image
              src="/images/ArticlesBanner.png"
              alt="ArticlesBanner"
              fill
              className="object-cover rounded-3xl "
            />
          </div>
          <ArticlesCard article={articlesData[1]} />
        </div>

        <div className="flex flex-col gap-8 w-full">
          <ArticlesCard article={articlesData[1]} />
          <ArticlesCard article={articlesData[1]} />
        </div>
      </div>
    </section>
  );
}
