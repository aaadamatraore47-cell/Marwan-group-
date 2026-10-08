import Link from "next/link";
import { notFound } from "next/navigation";

const categories = {
  "make-up": {
    name: "Make Up",
    description:
      "Wholesale makeup products for beauty retailers, stores and businesses across Egypt.",
  },
  cosmetics: {
    name: "Cosmetics",
    description:
      "Wholesale cosmetics selected for retailers and beauty businesses across Egypt.",
  },
  nails: {
    name: "Nails",
    description:
      "Wholesale nail products for salons, retailers and beauty businesses across Egypt.",
  },
  "hair-cosmetics": {
    name: "Hair Cosmetics",
    description:
      "Wholesale hair cosmetics for retailers, salons and beauty businesses across Egypt.",
  },
} as const;

const products = [
  {
    name: "Neers Pro Lash Plumping Mascara",
    slug: "neers-pro-lash-plumping-mascara",
    category: "make-up",
    price: 55,
    unit: "piece",
    minimum: "Minimum 12 pieces",
    image:
      "https://images.unsplash.com/photo-1631214524020-7e18db9e5f98?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Neers Pro Hyper Black Waterproof Mascara",
    slug: "neers-pro-hyper-black-waterproof-mascara",
    category: "make-up",
    price: 55,
    unit: "piece",
    minimum: "Minimum 12 pieces",
    image:
      "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Neers Pro Thick Mascara",
    slug: "neers-pro-thick-mascara",
    category: "make-up",
    price: 55,
    unit: "piece",
    minimum: "Minimum 12 pieces",
    image:
      "https://images.unsplash.com/photo-1590156206657-aec2a6c5b5b6?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Rose Gold Fat Lip Gloss",
    slug: "rose-gold-fat-lip-gloss",
    category: "make-up",
    price: 960,
    unit: "entire stand",
    minimum: "Minimum 1 stand",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
  },
];

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const category =
    categories[slug as keyof typeof categories];

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter(
    (product) => product.category === slug
  );

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link
            href="/"
            className="text-xl font-semibold uppercase tracking-[0.18em]"
          >
            Marwan Group
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            <Link
              href="/category/make-up"
              className="text-xs font-medium uppercase tracking-[0.14em] hover:opacity-50"
            >
              Make Up
            </Link>

            <Link
              href="/category/cosmetics"
              className="text-xs font-medium uppercase tracking-[0.14em] hover:opacity-50"
            >
              Cosmetics
            </Link>

            <Link
              href="/category/nails"
              className="text-xs font-medium uppercase tracking-[0.14em] hover:opacity-50"
            >
              Nails
            </Link>

            <Link
              href="/category/hair-cosmetics"
              className="text-xs font-medium uppercase tracking-[0.14em] hover:opacity-50"
            >
              Hair Cosmetics
            </Link>
          </nav>

          <Link
            href="/cart"
            className="text-xs font-semibold uppercase tracking-[0.14em]"
          >
            Cart
          </Link>
        </div>
      </header>

      <section className="border-b border-neutral-200 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500">
            Wholesale collection
          </p>

          <h1 className="text-4xl font-light tracking-[-0.04em] sm:text-5xl">
            {category.name}
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-500">
            {category.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="mb-10 flex items-center justify-between border-b border-neutral-200 pb-6">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-500">
            {categoryProducts.length} products
          </p>

          <Link
            href="/products"
            className="text-[10px] font-semibold uppercase tracking-[0.16em] underline underline-offset-4"
          >
            View all
          </Link>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="py-24 text-center">
            <h2 className="text-2xl font-light">
              More products coming soon
            </h2>

            <p className="mt-3 text-sm text-neutral-500">
              We are adding more wholesale products to this collection.
            </p>

            <Link
              href="/products"
              className="mt-7 inline-block bg-neutral-950 px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white"
            >
              Browse all products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {categoryProducts.map((product) => (
              <article key={product.slug} className="group">
                <Link
                  href={`/products/${product.slug}`}
                  className="block"
                >
                  <div className="relative aspect-[0.85] overflow-hidden bg-neutral-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="pt-4">
                    <p className="mb-1 text-[9px] font-medium uppercase tracking-[0.16em] text-neutral-500">
                      {category.name}
                    </p>

                    <h2 className="min-h-[42px] text-sm font-medium leading-5">
                      {product.name}
                    </h2>

                    <p className="mt-2 text-sm font-semibold">
                      EGP {product.price.toLocaleString()}
                      <span className="ml-1 text-[10px] font-normal text-neutral-500">
                        / {product.unit}
                      </span>
                    </p>

                    <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.13em] text-neutral-500">
                      Wholesale · {product.minimum}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="border-t border-neutral-200 px-5 py-8 text-center text-[9px] uppercase tracking-[0.16em] text-neutral-400">
        © {new Date().getFullYear()} Marwan Group. All rights reserved.
      </footer>
    </main>
  );
}
