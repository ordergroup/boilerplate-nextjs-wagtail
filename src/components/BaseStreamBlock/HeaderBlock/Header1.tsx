import { Button } from "@/components/ui/button"

export const Header1 = () => {
  return (
    <section className="py-16 md:py-28">
      <div className="container px-5 md:px-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <p className="text-sm font-medium">Tagline</p>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Short heading here</h1>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
              erat.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button className="rounded-none bg-black text-white hover:bg-black/90">Button</Button>
              <Button variant="outline" className="rounded-none border-black text-black hover:bg-black/5">
                Button
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
