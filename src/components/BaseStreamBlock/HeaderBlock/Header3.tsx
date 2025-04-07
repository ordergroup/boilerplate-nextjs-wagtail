import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"

export const Header3 = () => {
  return (
    <section className="relative py-16 md:py-28 bg-[#707070] overflow-hidden">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
        style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
      />

      {/* Content */}
      <div className="container px-5 md:px-16 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-4">
            <p className="text-sm font-medium text-white">Tagline</p>
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl md:text-6xl">
              Short heading here
            </h1>
            <p className="text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
              tristique.
            </p>
            <div className="pt-4">
              <form>
                <div className="flex flex-col sm:flex-row sm:gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 rounded-none bg-transparent border-white/70 text-white placeholder:text-white/70 flex-grow"
                    required
                  />
                  <Button
                    type="submit"
                    className="h-12 rounded-none bg-white text-[#707070] hover:bg-white/90 mt-4 sm:mt-0"
                  >
                    Sign up
                  </Button>
                </div>
              </form>
              <p className="mt-2 text-xs text-white/80">
                By clicking Sign Up you&apos;re confirming that you agree with our{" "}
                <Link href="#" className="underline underline-offset-2">
                  Terms and Conditions
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 bg-[#606060] rounded-lg flex items-center justify-center">
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