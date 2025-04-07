import { Button } from '@/components/ui/button';

export const Header2 = () => {
  return (
    <section className="py-16 md:py-28">
      <div className="w-full px-5 md:px-16">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <p className="text-sm font-medium mb-3 md:mb-4">Tagline</p>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-5 md:mb-8">
            Short heading here
          </h1>
          <p className="text-primary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-6 md:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button variant="primary">Button</Button>
            <Button variant="secondary">Button</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
