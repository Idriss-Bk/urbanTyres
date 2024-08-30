import React from "react";
import { Vidaloka } from "next/font/google";
import { getCategories } from "@/apis/graphql/categories";
import Link from "next/link";
import Image from "next/image";

const vidaloka = Vidaloka({ subsets: ["latin"], weight: "400" });

const FeaturedCategories = async () => {
  const categories = await getCategories();

  return (
    <section className="" aria-labelledby="featured-categories">
      <div className="w-full">
        {categories.length > 0 ? (
          <div className="grid grid-cols-3 gap-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/${category.slug}`}
                className={`text-white hover:text-orange-300 transition-all`}
              >
                <article className="bg-white border-2 rounded border-slate-200 h-32 flex justify-center items-center flex-col">
                  <Image
                    src={`${category.featuredImage}`}
                    alt={category.name}
                    width={500}
                    height={500}
                    className="w-12 mb-3"
                    quality={100}
                  />
                  <p className="text-black font-semibold text-md md:text-lg">
                    {category.name}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <p>No categories available</p>
        )}
      </div>
    </section>
  );
};

export default FeaturedCategories;
