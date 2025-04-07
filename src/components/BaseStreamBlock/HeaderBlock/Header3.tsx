import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export const Header3 = () => {
  return (
    <section className="relative py-16 md:py-28  overflow-hidden">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
        style={{
          backgroundImage: `url('images/placeholder.svg')`,
        }}
      />
      <div className="absolute bg-black inset-0 bg-cover bg-center opacity-50 z-1" />
      {/* Content */}
      <div className="container px-5 md:px-16 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-4">
            <p className="text-sm font-medium text-white mb-3 md:mb-4">
              Tagline
            </p>
            <h1 className="text-4xl font-bold tracking-tighter text-white mb-5 md:mb-6">
              Short heading here
            </h1>
            <p className="text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-6 md:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>

            <form className="mb-4">
              <div className="flex flex-col sm:flex-row sm:gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 rounded-none bg-transparent border-white/70 text-white placeholder:text-white/70 flex-grow"
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="bg-white text-primary">
                  Sign up
                </Button>
              </div>
            </form>
            <p className="mt-2 text-xs text-white/80">
              By clicking Sign Up you&apos;re confirming that you agree with our{' '}
              <Link href="#" className="underline underline-offset-2">
                Terms and Conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
