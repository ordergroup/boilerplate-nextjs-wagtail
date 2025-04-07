import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export const Features6 = () => {
  // Steps data
  const steps = [
    {
      id: '01',
      tagline: 'Tagline',
      title: 'Medium length section heading goes here',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    },
    {
      id: '02',
      tagline: 'Tagline',
      title: 'Medium length section heading goes here',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    },
    {
      id: '03',
      tagline: 'Tagline',
      title: 'Medium length section heading goes here',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    },
    {
      id: '04',
      tagline: 'Tagline',
      title: 'Medium length section heading goes here',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    },
  ];

  return (
    <div className="py-16 md:py-28 px-5 md:px-16 w-full relative">
      <div className="space-y-12 md:space-y-28">
        {steps.map(step => (
          <div key={step.id}>
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-20">
              {/* Number */}
              <span className="text-[96px] md:text-[224px] font-bold">
                {step.id}
              </span>

              {/* Content */}
              <div className="flex-1">
                <div className="flex mb-8">
                  <Separator className="bg-primary !w-[32px]" />
                  <Separator className="bg-primary opacity-10 w-[32px]" />
                </div>
                <p className="text-sm mb-3 md:mb-4">{step.tagline}</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-5 md:mb-6">
                  {step.title}
                </h2>
                <p className="mb-6 md:mb-8">{step.description}</p>
                <div className="flex gap-6 md:mb-15">
                  <Button variant="secondary">Button</Button>
                  <Button variant="link">
                    Button
                    {/*<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />*/}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
