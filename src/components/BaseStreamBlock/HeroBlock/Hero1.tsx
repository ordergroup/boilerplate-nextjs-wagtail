import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Hero1 = () => {
  return (
    <section className="py-16 md:py-28">
      <div className="container px-5 md:px-16">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Medium length hero headline goes here
            </h1>
            <div className="mt-5 md:mt-6">
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
                erat.
              </p>
            </div>
            <div className="mt-6 md:mt-8 flex flex-wrap gap-4">
              <Button className="rounded-none bg-black text-white hover:bg-black/90">Button</Button>
              <Button variant="outline" className="rounded-none border-black text-black hover:bg-black/5">
                Button
              </Button>
            </div>
          </div>
          <div className="mx-auto aspect-video overflow-hidden rounded-none bg-gray-200 lg:order-last">
            <div className="flex h-full w-full items-center justify-center">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Placeholder"
                width={48}
                height={48}
                className="opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

