import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CONFIG } from '@/constants/config';
import Image from 'next/image';
import Link from 'next/link';

export const Hero5 = () => {
  return (
    <main className="w-full h-[100vh]  flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-28  px-5 md:px-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="mb-6 md:mb-8">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-5 md:mb-6">
                Medium length hero heading goes here
              </h1>
              <p className="mx-auto max-w-[700px] text-primary md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col sm:flex-row gap-4 mb-4">
                <Input
                  className="h-12 rounded-none bg-transparent border-primary text-primary placeholder:text-primary/70 flex-grow"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <Button variant="primary" type="submit">
                  Sign up
                </Button>
              </form>
              <p className="text-xs text-primary">
                By clicking Sign Up you&apos;re confirming that you agree with
                our{' '}
                <Link className="underline underline-offset-2" href="#">
                  Terms and Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TODO Video Section */}
      <Image
        src={CONFIG.placeholderImage}
        alt="Hero image"
        width={1312}
        height={768}
        className="w-full h-auto object-cover"
      />
    </main>
  );
};
