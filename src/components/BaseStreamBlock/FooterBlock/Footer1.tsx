import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export const Footer1 = () => {
  return (
    <footer className="border-t py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Newsletter */}
          <div className="space-y-4">
            <Link href="/" className="inline-block font-medium text-2xl italic">
              Logo
            </Link>
            <p className="text-sm text-gray-500">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <div className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 border-gray-300"
              />
              <Button className="h-12 w-full md:w-auto">Subscribe</Button>
            </div>
            <p className="text-xs text-gray-500">
              By subscribing you agree to with our{' '}
              <Link href="/privacy" className="underline underline-offset-2">
                Privacy Policy
              </Link>{' '}
              and provide consent to receive updates from our company.
            </p>
          </div>

          {/* Column One */}
          <div className="space-y-4">
            <h3 className="font-medium">Column One</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900">
                Link One
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900">
                Link Two
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900">
                Link Three
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900">
                Link Four
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900">
                Link Five
              </Link>
            </nav>
          </div>

          {/* Column Two */}
          <div className="space-y-4">
            <h3 className="font-medium">Column Two</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900">
                Link Six
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900">
                Link Seven
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900">
                Link Eight
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900">
                Link Nine
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-500 hover:text-gray-900">
                Link Ten
              </Link>
            </nav>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="font-medium">Follow Us</h3>
            <nav className="flex flex-col space-y-3">
              <Link
                href="#"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
                Facebook
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
                Instagram
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 2H16C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16V8C2 4.68629 4.68629 2 8 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C13.3807 17 14.6307 16.4604 15.5355 15.5355"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                X
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
                LinkedIn
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900">
                Youtube
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <Link
                href="/privacy"
                className="text-sm text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:text-gray-900">
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-gray-500 hover:text-gray-900">
                Cookies Settings
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              © 2024 Relume. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
