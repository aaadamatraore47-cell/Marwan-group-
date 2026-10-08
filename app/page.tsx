import Link from "next/link";

const categories = [
  {
    name: "Make Up",
    slug: "make-up",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Cosmetics",
    slug: "cosmetics",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Nails",
    slug: "nails",
    image:
      "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Hair Cosmetics",
    slug: "hair-cosmetics",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
  },
];

const featuredProducts = [
  {
    name: "Neers Pro Lash Plumping Mascara",
    category: "Make Up",
    price: "EGP 55",
    unit: "/ piece",
    image:
      "https://images.unsplash.com/photo-1631214524020-7e18db9e5f98?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Neers Pro Hyper Black Waterproof Mascara",
    category: "Make Up",
    price: "EGP 55",
    unit: "/ piece",
    image:
      "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Neers Pro Thick Mascara",
    category: "Make Up",
    price: "EGP 55",
    unit: "/ piece",
    image:
      "https://images.unsplash.com/photo-1590156206657-aec2a6c5b5b6?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Rose Gold Fat Lip Gloss",
    category: "Make Up",
    price: "EGP 960",
    unit: "/ entire stand",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=85",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Announcement bar */}
      <div className="bg-neutral-950 px-4 py-2.5 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-white">
        Wholesale cosmetics · Egypt only
      </div>

      {/* Header */}
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <button
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center lg:hidden"
          >
            <span className="text-xl">☰</span>
          </button>

          <Link
            href="/"
            className="text-xl font-semibold uppercase tracking-[0.18em]"
          >
            Marwan Group
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/category/make-up"
              className="text-xs font-medium uppercase tracking-[0.14em] transition hover:opacity-50"
            >
              Make Up
            </Link>
            <Link
              href="/category/cosmetics"
              className="text-xs font-medium uppercase tracking-[0.14em] transition hover:opacity-50"
            >
              Cosmetics
            </Link>
            <Link
              href="/category/nails"
              className="text-xs font-medium uppercase tracking-[0.14em] transition hover:opacity-50"
            >
              Nails
            </Link>
            <Link
              href="/category/hair-cosmetics"
              className="text-xs font-medium uppercase tracking-[0.14em] transition hover:opacity-50"
            >
              Hair Cosmetics
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center text-lg"
            >
              ⌕
            </button>

            <Link
              href="/cart"
              aria-label="Cart"
              className="flex h-10 w-10 items-center justify-center text-lg"
            >
              ♡
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[620px] overflow-hidden bg-neutral-100">
        <img
          src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=2200&q=90"
          alt="Marwan Group beauty collection"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-end px-5 pb-16 lg:px-8 lg:pb-20">
          <div className="max-w-xl text-white">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.3em]">
              Marwan Group
            </p>

            <h1 className="text-5xl font-light leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Beauty,
              <br />
              wholesale.
            </h1>

            <p className="mt-6 max-w-md text-sm leading-6 text-white/90">
              Discover premium makeup, cosmetics, nail and hair products
              available exclusively for wholesale.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/category/make-up"
                className="bg-white px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-neutral-950 transition hover:bg-neutral-200"
              >
                Shop Make Up
              </Link>

              <Link
                href="/category/cosmetics"
                className="border border-white/80 px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-white hover:text-neutral-950"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category section */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
              Explore
            </p>
            <h2 className="text-3xl font-light tracking-[-0.03em] sm:text-4xl">
              Shop by category
            </h2>
          </div>

          <Link
            href="/products"
            className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] underline underline-offset-4 sm:block"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group relative aspect-[0.78] overflow-hidden bg-neutral-100"
            >
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/15 transition group-hover:bg-black/30" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-white lg:p-6">
                <h3 className="text-lg font-medium tracking-tight">
                  {category.name}
                </h3>
                <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.18em] opacity-80">
                  Shop collection →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="border-y border-neutral-200 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="mb-10 text-center">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
              Wholesale favourites
            </p>

            <h2 className="text-3xl font-light tracking-[-0.03em] sm:text-4xl">
              Featured products
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {featuredProducts.map((product) => (
              <article key={product.name} className="group">
                <Link
                  href={`/products/${product.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")
                    .replace(/(^-|-$)/g, "")}`}
                  className="block"
                >
                  <div className="relative aspect-[0.85] overflow-hidden bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="pt-4">
                    <p className="mb-1 text-[9px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                      {product.category}
                    </p>

                    <h3 className="min-h-[42px] text-sm font-medium leading-5">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-sm font-semibold">
                      {product.price}
                      <span className="ml-1 text-[10px] font-normal text-neutral-500">
                        {product.unit}
                      </span>
                    </p>

                    <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.13em] text-neutral-500">
                      Wholesale · minimum 12 pieces
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Wholesale banner */}
      <section className="bg-neutral-950 px-5 py-20 text-white lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
            Built for retailers
          </p>

          <h2 className="text-4xl font-light leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Your beauty business,
            <br />
            supplied better.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/60">
            Shop wholesale beauty products with clear pricing, flexible
            product selections and delivery across Egypt.
          </p>

          <Link
            href="/products"
            className="mt-9 inline-block bg-white px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-950 transition hover:bg-neutral-200"
          >
            Shop wholesale
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div className="sm:col-span-2">
            <h3 className="text-lg font-semibold uppercase tracking-[0.16em]">
              Marwan Group
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-500">
              Premium wholesale makeup, cosmetics, nails and hair products
              serving businesses across Egypt.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Shop
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm text-neutral-500">
              <Link href="/category/make-up">Make Up</Link>
              <Link href="/category/cosmetics">Cosmetics</Link>
              <Link href="/category/nails">Nails</Link>
              <Link href="/category/hair-cosmetics">Hair Cosmetics</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em]">
              Marwan Group
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm text-neutral-500">
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/shipping">Shipping</Link>
              <Link href="/terms">Terms & Conditions</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 px-5 py-6 text-center text-[9px] uppercase tracking-[0.16em] text-neutral-400">
          © {new Date().getFullYear()} Marwan Group. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
