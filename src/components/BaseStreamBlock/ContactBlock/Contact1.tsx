'use client';

import type React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CONFIG } from '@/constants/config';
import Image from 'next/image';
import Link from 'next/link';

export const Contact1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="py-16 w-full md:h-[100vh] md:py-28 px-5 md:px-16 flex flex-col md:flex-row gap-12 md:gap-20">
      {/* Image section */}
      <div className="w-full md:w-1/2 bg-[#d9d9d9] aspect-square md:aspect-auto">
        <Image
          src={CONFIG.placeholderImage}
          alt="Hero image"
          width={1312}
          height={768}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Form section */}
      <div className="w-full md:w-1/2">
        <div>
          <p className="text-sm mb-3 md:mb-4">Tagline</p>
          <h1 className="text-4xl font-bold mb-5 md:mb-6">Contact us</h1>
          <p className="mb-6 md:mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={e =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="border-black rounded-none h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={e =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="border-black rounded-none h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={e =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="border-black rounded-none min-h-[160px]"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={checked =>
                  setFormData({
                    ...formData,
                    acceptTerms: checked as boolean,
                  })
                }
                className="rounded-none border-black data-[state=checked]:bg-black data-[state=checked]:text-white"
              />
              <Label htmlFor="terms" className="text-sm font-normal">
                I accept the{' '}
                <Link href="#" className="underline">
                  Terms
                </Link>
              </Label>
            </div>

            <Button
              type="submit"
              className="bg-black text-white hover:bg-black/90 rounded-none px-8 py-2 h-auto">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
