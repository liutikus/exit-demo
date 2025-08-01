import PaddingContainer from "../PaddingContainer";
import ArrowIcon from "../../assets/icons/arrow-icon.svg?react";
import { useEffect, useState } from "react";
import NavCardsContainer from "./NavCardsContainer";
import { fetchCategories, fetchProductsData } from "../../api/strapi";
import type { Category, Product } from "../../types/types";
import { Link } from "react-router-dom";
import { allowedSubNavCategories } from "../../data/data";
import { useDebounce } from "../../data/useDebounce";

const SubNav = () => {
  const [hoveredCategory, setHoveredCategory] = useState("");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [categories, setCategories] = useState<Category[] | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const debouncedSlug = useDebounce(hoveredSlug, 400);

  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!debouncedSlug) {
      setProducts([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    let canceled = false;

    fetchProductsData(1, 8, { minPrice: 0, maxPrice: 999999 }, undefined, "title:asc", debouncedSlug)
      .then(({ products }) => {
        if (!canceled) setProducts(products);
      })
      .catch((err) => {
        if (!canceled) console.error(err);
      })
      .finally(() => {
        if (!canceled) setLoading(false);
      });

    return () => {
      canceled = true;
    };
  }, [debouncedSlug]);

  const handleMouseEnterCategory = (slug: string, title: string) => {
    setHoveredCategory(title);
    setHoveredSlug(slug);
    setIsDropdownOpen(true);
  };


  return (
    <div className="hidden md:block relative py-6 dark:text-white text-[var(--color-black)] border-b border-[rgba(var(--color-gray-rgb),0.17)]">
      <PaddingContainer>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            {categories
              ?.filter(({ slug }) => allowedSubNavCategories.includes(slug))
              .sort(
                (a, b) =>
                  allowedSubNavCategories.indexOf(a.slug) -
                  allowedSubNavCategories.indexOf(b.slug)
              )
              .map(({ title, slug, id }) => (
                <Link key={id} to={`/shop?category=${slug}`}>
                  <div
                    onMouseEnter={() => handleMouseEnterCategory(slug, title)}
                    className="flex items-baseline gap-2 cursor-pointer"
                  >
                    <h3 className="font-bold">{title}</h3>
                    <div className="text-[var(--color-gray)]">
                      <ArrowIcon
                        className={`transition-transform duration-300 ${
                          hoveredCategory === title ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div className="hidden xl:flex items-center gap-2">
            <Link
            to={"/trade-in"}
            >
        <button
                className="border dark:bg-[rgba(var(--color-gray-rgb),0.26)] border-[rgba(var(--color-gray-rgb),0.46)] cursor-pointer py-2 px-4 rounded-md bg-[var(--color-light-gray)]"
              >
                Trade-In
              </button>
            </Link>
            <Link
            to={"/e-bronique"}
            >
              <button
                className="border dark:bg-[rgba(var(--color-gray-rgb),0.26)] border-[rgba(var(--color-gray-rgb),0.46)] cursor-pointer py-2 px-4 rounded-md bg-[var(--color-light-gray)]"
              >
                E-Bronique
              </button>
            </Link>
              <button
                className="border dark:bg-[rgba(var(--color-gray-rgb),0.26)] border-[rgba(var(--color-gray-rgb),0.46)] cursor-pointer py-2 px-4 rounded-md bg-[var(--color-light-gray)]"
              >
                Service Centru
              </button>
              <button
                className="border dark:bg-[rgba(var(--color-gray-rgb),0.26)] border-[rgba(var(--color-gray-rgb),0.46)] cursor-pointer py-2 px-4 rounded-md bg-[var(--color-light-gray)]"
              >
                Despre Noi
              </button>
          </div>
        </div>

      </PaddingContainer>
        <NavCardsContainer
          products={products}
          isHovered={isDropdownOpen}
          setIsHovered={setIsDropdownOpen}
          loading={loading}
        />
    </div>
  );
};

export default SubNav;
