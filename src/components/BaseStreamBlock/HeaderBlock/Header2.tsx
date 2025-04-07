import { Button } from "@/components/ui/button"

export const Header2 = () => {
  return (
    <section className="py-16 md:py-28">
      <div className="container px-5 md:px-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium mb-4">Tagline</p>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Short heading here</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
            tristique.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="rounded-none bg-black text-white hover:bg-black/90">Button</Button>
            <Button variant="outline" className="rounded-none border-black text-black hover:bg-black/5">
              Button
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

