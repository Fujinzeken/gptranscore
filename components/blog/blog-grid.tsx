"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "@phosphor-icons/react/dist/ssr";
import { PUBLICATIONS, CATEGORIES, type Publication, type Category } from "./blog-data";
import { cx, label } from "@/components/ui";
// Link import reserved for future article routing

// ─── BlogCard ────────────────────────────────────────────────────────────────

function BlogCard({ post, featured }: { post: Publication; featured?: boolean }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article
      className={cx(
        "group flex flex-col rounded-2xl overflow-hidden border border-rule bg-surface",
        "transition-all duration-300 hover:-translate-y-1 hover:border-azure hover:shadow-xl hover:shadow-azure/10",
        featured && "md:col-span-2 md:flex-row"
      )}
    >
      {/* Image */}
      <div
        className={cx(
          "relative overflow-hidden shrink-0",
          featured ? "md:w-1/2 aspect-[4/3] md:aspect-auto" : "aspect-[16/10]"
        )}
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category overlay */}
        <div className="absolute top-4 left-4">
          <span className={cx(label, "bg-azure/90 text-white px-3 py-1 rounded-full backdrop-blur-sm text-[10px]")}>
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className={cx("flex flex-col gap-3 p-6", featured && "md:justify-center md:p-10")}>
        {/* Meta */}
        <div className="flex items-center gap-3 text-mute">
          <time className="text-xs">{formattedDate}</time>
          <span className="text-border-rule">·</span>
          <span className="flex items-center gap-1 text-xs">
            <Clock size={12} weight="bold" />
            {post.readTime} min read
          </span>
        </div>

        {/* Title */}
        <h3
          className={cx(
            "font-semibold text-ink-text leading-snug transition-colors duration-200 group-hover:text-azure",
            featured ? "text-2xl md:text-3xl" : "text-lg"
          )}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p
          className={cx(
            "text-body-text leading-relaxed",
            featured ? "text-base line-clamp-3" : "text-sm line-clamp-2"
          )}
        >
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-rule">
          <span className="text-xs text-mute">{post.author.name}</span>
          <span className="flex items-center gap-1 text-xs font-semibold text-azure opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Read article <ArrowRight size={12} weight="bold" />
          </span>
        </div>
      </div>
    </article>
  );
}

// ─── Category Filter ──────────────────────────────────────────────────────────

function CategoryFilter({
  active,
  onChange,
}: {
  active: Category;
  onChange: (c: Category) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2 justify-center" role="tablist" aria-label="Filter by category">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          role="tab"
          aria-selected={active === cat}
          onClick={() => onChange(cat)}
          className={cx(
            "px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200",
            active === cat
              ? "bg-azure text-white border-azure shadow-md shadow-azure/20"
              : "bg-surface text-body-text border-rule hover:border-azure hover:text-azure"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

// ─── BlogGrid ─────────────────────────────────────────────────────────────────

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? PUBLICATIONS
      : PUBLICATIONS.filter((p) => p.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <section id="articles" className="py-20 bg-page">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Section header */}
        <div className="text-center mb-12 space-y-4">
          <p className={cx(label, "text-azure")}>GP Transco Insights</p>
          <h2 className="text-4xl md:text-5xl font-bold text-ink-text tracking-tight">
            Stories from the Road
          </h2>
          <p className="text-body-text max-w-xl mx-auto">
            Industry perspectives, driver stories, and technology deep-dives from the GP Transco team.
          </p>
        </div>

        {/* Category filter */}
        <div className="mb-12">
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-mute">No articles in this category yet.</div>
        ) : (
          <div className="space-y-6">
            {/* Featured row — top card spans 2 cols */}
            {featured && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <BlogCard post={featured} featured />
                {rest[0] && (
                  <div className="flex flex-col gap-6">
                    {rest.slice(0, 2).map((p) => (
                      <BlogCard key={p.id} post={p} />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Remaining articles — 3-col grid */}
            {rest.length > 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.slice(2).map((p) => (
                  <BlogCard key={p.id} post={p} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Load more placeholder */}
        <div className="mt-16 text-center">
          <button
            className="px-8 py-3 rounded-full border border-rule text-body-text font-semibold hover:border-azure hover:text-azure transition-colors duration-200"
            disabled
          >
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
}
