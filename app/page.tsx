
import Link from "next/link";

const categories = [
  {
    name: "Make Up",
    description: "Colour, definition and everyday essentials.",
    href: "/category/make-up",
    number: "01",
  },
  {
    name: "Cosmetics",
    description: "Beauty and personal-care essentials.",
    href: "/category/cosmetics",
    number: "02",
  },
  {
    name: "Nails",
    description: "Colour, care and finishing touches.",
    href: "/category/nails",
    number: "03",
  },
  {
    name: "Hair Cosmetics",
    description: "Care and styling for every routine.",
    href: "/category/hair-cosmetics",
    number: "04",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#29231f]">
      <div className="bg-[#29231f] px-4 py-3 text-center text-[9px] font-medium uppercase tracking-[0.2em] text-white sm:text-[10px]">
        Wholesale beauty · Delivery across Egypt
      </div>

      <header className="border-b border-[#e8e0d8]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <Link href="/" className="block">
            <span className="block text-lg font-semibold uppercase tracking-[0.16em] sm:text-2xl">
              Marwan Group
            </span>
            <span className="mt-1 block text-[8px] uppercase tracking-[0.25em] text-[#8e7b6d]">
              Beauty · Cosmetics · Wholesale
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-[10px] font-medium uppercase tracking-[0.13em] md:flex">
            <Link href="/" className="hover:text-[#a17b64]">Home</Link>
            <Link href="/products" className="hover:text-[#a17b64]">Catalogue</Link>
            <Link href="/category/make-up" className="hover:text-[#a17b64]">Make Up</Link>
            <Link href="/category/nails" className="hover:text-[#a17b64]">Nails</Link>
          </nav>

          <Link
            href="/products"
            className="shrink-0 bg-[#29231f] px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-[#756052] sm:px-6"
          >
            Explore Catalogue ↗
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-24">
        <div>
          <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#a17b64]">
            Your wholesale beauty destination
          </p>

          <h1 className="max-w-xl text-5xl font-normal leading-[1.08] tracking-[-0.055em] sm:text-7xl">
            Beauty made
            <br />
            <span className="font-serif italic text-[#a17b64]">
              for business.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-[#746960] sm:text-base">
            Discover makeup, cosmetics, nail essentials and hair products
            for retailers and beauty businesses across Egypt.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="bg-[#29231f] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#756052]"
            >
              Browse Catalogue ↗
            </Link>
            <Link
              href="/category/make-up"
              className="border border-[#d7cbc0] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] transition hover:border-[#29231f]"
            >
              Explore Make Up
            </Link>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 border-t border-[#e5dcd3] pt-5">
            <div className="pr-3">
              <p className="text-sm font-semibold">Wholesale</p>
              <p className="mt-1 text-[9px] leading-4 text-[#8b7d72]">Business-focused</p>
            </div>
            <div className="border-l border-[#e5dcd3] px-3">
              <p className="text-sm font-semibold">Flexible</p>
              <p className="mt-1 text-[9px] leading-4 text-[#8b7d72]">Clear unit pricing</p>
            </div>
            <div className="border-l border-[#e5dcd3] pl-3">
              <p className="text-sm font-semibold">Egypt-wide</p>
              <p className="mt-1 text-[9px] leading-4 text-[#8b7d72]">Delivery coverage</p>
            </div>
          </div>
        </div>

        <div className="relative grid min-h-[350px] grid-cols-2 gap-3 sm:min-h-[480px]">
          <div className="flex flex-col justify-between bg-[#e8dcd0] p-5 sm:p-7">
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#796453]">
              The beauty edit
            </span>
            <div>
              <span className="font-serif text-5xl italic text-[#8e6b54] sm:text-7xl">
                MG.
              </span>
              <p className="mt-3 max-w-[180px] text-xs leading-5 text-[#665348]">
                A considered destination for beauty retailers.
              </p>
            </div>
          </div>

          <div className="grid grid-rows-2 gap-3">
            <Link
              href="/category/make-up"
              className="group flex flex-col justify-end bg-[#d6c0ad] p-5 transition hover:bg-[#ccb29d] sm:p-7"
            >
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#715644]">
                Collection 01
              </span>
              <span className="mt-2 font-serif text-2xl italic sm:text-3xl">
                Make Up ↗
              </span>
            </Link>
            <Link
              href="/category/cosmetics"
              className="group flex flex-col justify-end bg-[#eee6df] p-5 transition hover:bg-[#e6d9ce] sm:p-7"
            >
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#8e7868]">
                Collection 02
              </span>
              <span className="mt-2 font-serif text-2xl italic sm:text-3xl">
                Cosmetics ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8e0d8] bg-white px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.23em] text-[#a17b64]">
                Find your category
              </p>
              <h2 className="mt-3 text-3xl tracking-[-0.04em] sm:text-4xl">
                Explore the collections.
              </h2>
            </div>
            <p className="max-w-xs text-xs leading-6 text-[#82766d]">
              Four dedicated categories to help you find the right products
              for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.number}
                href={category.href}
                className="group flex min-h-48 flex-col justify-between border border-[#e8e0d8] bg-[#faf8f5] p-5 transition duration-300 hover:border-[#b49a85] hover:bg-[#f2ebe4] sm:min-h-56 sm:p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] tracking-[0.15em] text-[#a17b64]">
                    {category.number}
                  </span>
                  <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                    ↗
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                    {category.name}
                  </h3>
                  <p className="mt-2 max-w-[220px] text-xs leading-5 text-[#82766d]">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 bg-[#eae0d7] p-7 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8b6855]">
              Your business. Your stock.
            </p>
            <h2 className="mt-4 text-3xl leading-tight tracking-[-0.04em] sm:text-5xl">
              Find the essentials.
              <br />
              Build your collection.
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#706158]">
              Explore our wholesale catalogue and discover products for
              your shelves.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex w-fit shrink-0 items-center gap-5 bg-[#29231f] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#756052]"
          >
            Explore Catalogue <span>↗</span>
          </Link>
        </div>
      </section>

      <footer className="bg-[#29231f] px-5 py-10 text-white sm:px-8 sm:py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-xl font-semibold uppercase tracking-[0.16em]"
            >
              Marwan Group
            </Link>
            <p className="mt-3 max-w-sm text-xs leading-6 text-white/60">
              Wholesale beauty and cosmetics for businesses across Egypt.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[9px] uppercase tracking-[0.13em] text-white/75">
            <Link href="/products">Catalogue</Link>
            <Link href="/category/make-up">Make Up</Link>
            <Link href="/category/cosmetics">Cosmetics</Link>
            <Link href="/category/nails">Nails</Link>
            <Link href="/category/hair-cosmetics">Hair Cosmetics</Link>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/15 pt-5 text-[9px] text-white/45">
          © {new Date().getFullYear()} Marwan Group. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
