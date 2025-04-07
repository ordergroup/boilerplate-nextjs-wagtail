import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Footer3 = () => {
  return (
    <footer className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Medium length footer heading goes here
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className="flex gap-4">
            <Button className="rounded-none bg-black text-white hover:bg-black/90">
              Button
            </Button>
            <Button
              variant="outline"
              className="rounded-none border-black text-black hover:bg-black/5">
              Button
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          {/* Middle Section - Link Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {/* Column One */}
            <div className="space-y-4">
              <h3 className="font-medium">Column One</h3>
              <nav className="flex flex-col space-y-2">
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
              <nav className="flex flex-col space-y-2">
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

            {/* Column Three */}
            <div className="space-y-4">
              <h3 className="font-medium">Column Three</h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Eleven
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Twelve
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Thirteen
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Fourteen
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Fifteen
                </Link>
              </nav>
            </div>

            {/* Column Four */}
            <div className="space-y-4">
              <h3 className="font-medium">Column Four</h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Sixteen
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Seventeen
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Eighteen
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Nineteen
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Twenty
                </Link>
              </nav>
            </div>

            {/* Column Five */}
            <div className="space-y-4">
              <h3 className="font-medium">Column Five</h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Twenty One
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Twenty Two
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Twenty Three
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Twenty Four
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Twenty Five
                </Link>
              </nav>
            </div>

            {/* Column Six */}
            <div className="space-y-4">
              <h3 className="font-medium">Column Six</h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Twenty Six
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Twenty Seven
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Twenty Eight
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Twenty Nine
                </Link>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-900">
                  Link Thirty
                </Link>
              </nav>
            </div>
          </div>

          {/* Logo and Contact Icons */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t border-b">
            <Link href="/" className="inline-block font-medium text-2xl italic">
              Logo
            </Link>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="bg-gray-200 p-2 rounded-full text-gray-500 hover:text-gray-900">
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-200 p-2 rounded-full text-gray-500 hover:text-gray-900">
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-200 p-2 rounded-full text-gray-500 hover:text-gray-900">
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-200 p-2 rounded-full text-gray-500 hover:text-gray-900">
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="bg-gray-200 p-2 rounded-full text-gray-500 hover:text-gray-900">
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
            <p className="text-sm text-gray-500">
              © 2024 Relume. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
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
                <span className="sr-only">X</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
