'use client';

import type React from 'react';
import { useState } from 'react';
// import { ChevronRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

export const Contact2 = () => {
  const [formData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    topic: '',
    description: '',
    message: '',
    acceptTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="py-16 w-full md:py-28 px-5 md:px-16">
      <div className="mb-8 md:mb-12">
        <div className="text-sm mb-3 md:mb-4">Tagline</div>
        <h1 className="text-4xl font-bold mb-5 md:mb-6">Contact us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 md:gap-20">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName">First name</Label>
              <Input
                id="firstName"
                className="border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last name</Label>
              <Input
                id="lastName"
                className="border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 gap-6">
            <div className="space-y-2 mb-6 md:mb-0">
              <Label htmlFor="firstName">Email</Label>
              <Input
                id="email"
                className="border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Phone number</Label>
              <Input
                id="lastName"
                className="border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="topic">Choose a topic</Label>
            <Select>
              <SelectTrigger className="border-black rounded-none focus:ring-0 focus-visible:ring-offset-0 w-full">
                <SelectValue placeholder="Select one..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="support">Support</SelectItem>
                <SelectItem value="feedback">Feedback</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3 py-4">
            <Label>Which best describes you?</Label>
            <RadioGroup defaultValue="first">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="first" id="first" />
                    <Label htmlFor="first" className="font-normal">
                      First choice
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="third" id="third" />
                    <Label htmlFor="third" className="font-normal">
                      Third choice
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fifth" id="fifth" />
                    <Label htmlFor="fifth" className="font-normal">
                      Fifth choice
                    </Label>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="second" id="second" />
                    <Label htmlFor="second" className="font-normal">
                      Second choice
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fourth" id="fourth" />
                    <Label htmlFor="fourth" className="font-normal">
                      Fourth choice
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other" className="font-normal">
                      Other
                    </Label>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[120px] border-black rounded-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="text-sm font-normal">
              I accept the{' '}
              <Link href="#" className="underline">
                Terms
              </Link>
            </Label>
          </div>

          <Button
            type="submit"
            className="bg-black text-white hover:bg-black/90 rounded-none px-8">
            Submit
          </Button>
        </form>

        {/* Contact Information - Hidden on mobile, shown at bottom */}
        <div className="flex flex-wrap">
          <div className="md:w-1/2 mb-10">
            <div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="mb-2">Lorem ipsum dolor sit amet.</p>
              <a href="mailto:hello@relume.io" className="underline">
                hello@relume.io
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mb-10">
            <div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="mb-2">Lorem ipsum dolor sit amet.</p>
              <a href="mailto:hello@relume.io" className="underline">
                hello@relume.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
