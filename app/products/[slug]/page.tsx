import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

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

          <Link
            href="/cart"
            className="text-xs font-semibold uppercase tracking-[0.14em]"
          >
            Cart
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-24">
        <div className="aspect-square bg-neutral-100" />

        <div className="flex flex-col justify-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
            Wholesale Product
          </p>

          <h1 className="mt-4 text-4xl font-light tracking-[-0.04em] sm:text-5xl">
            Product Name
          </h1>

          <p className="mt-3 text-sm text-neutral-400">
            Product Arabic Name
          </p>

          <div className="mt-8 border-y border-neutral-200 py-6">
            <p className="text-2xl font-medium">
              EGP 0
              <span className="ml-2 text-xs font-normal text-neutral-500">
                / unit
              </span>
            </p>

            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
              Wholesale pricing
            </p>
          </div>

          <p className="mt-8 text-sm leading-7 text-neutral-600">
            Product description will appear here.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="border border-neutral-200 p-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                SKU
              </p>

              <p className="mt-2 text-sm font-medium">
                Product SKU
              </p>
            </div>

            <div className="border border-neutral-200 p-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                Minimum order
              </p>

              <p className="mt-2 text-sm font-medium">
                Wholesale minimum
              </p>
            </div>
          </div>

          <button
            type="button"
            className="mt-8 w-full bg-neutral-950 px-8 py-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white"
          >
            Add to wholesale cart
          </button>

          <p className="mt-4 text-center text-[9px] uppercase tracking-[0.14em] text-neutral-400">
            Delivery available across Egypt
          </p>

          <p className="mt-6 text-center text-[9px] text-neutral-400">
            Product: {slug}
          </p>
        </div>
      </section>

      <footer className="border-t border-neutral-200 px-5 py-8 text-center text-[9px] uppercase tracking-[0.16em] text-neutral-400">
        © {new Date().getFullYear()} Marwan Group. All rights reserved.
      </footer>
    </main>
  );
}
