import Link from 'next/link';

export const Footer2 = () => {
  return (
    <footer className="border-t py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Left Section - Logo, Address, Contact, Social */}
          <div className="space-y-6 md:col-span-4">
            <Link href="/" className="inline-block font-medium text-2xl italic">
              Logo
            </Link>

            <div className="space-y-1">
              <p className="text-sm font-medium">Address:</p>
              <p className="text-sm text-gray-500">
                Level 1, 12 Sample St, Sydney NSW 2000
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium">Contact:</p>
              <p className="text-sm text-gray-500">
                <Link href="tel:1800123456" className="hover:underline">
                  1800 123 4567
                </Link>
              </p>
              <p className="text-sm text-gray-500">
                <Link href="mailto:info@relume.io" className="hover:underline">
                  info@relume.io
                </Link>
              </p>
            </div>

            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                {/*<Facebook size={20} />*/}
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                {/*<Instagram size={20} />*/}
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
                {/*<Linkedin size={20} />*/}
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-900">
                {/*<Youtube size={20} />*/}
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Right Section - Two columns of links */}
          <div className="md:col-span-8 md:col-start-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Column */}
              <div className="flex flex-col space-y-3">
                <Link
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900">
                  Link One
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900">
                  Link Two
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900">
                  Link Three
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900">
                  Link Four
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900">
                  Link Five
                </Link>
              </div>

              {/* Second Column */}
              <div className="flex flex-col space-y-3">
                <Link
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900">
                  Link Six
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900">
                  Link Seven
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900">
                  Link Eight
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900">
                  Link Nine
                </Link>
                <Link
                  href="#"
                  className="block text-sm text-gray-500 hover:text-gray-900">
                  Link Ten
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col space-y-3 md:hidden w-full">
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

            <p className="text-sm text-gray-500 order-last md:order-first">
              © 2024 Relume. All rights reserved.
            </p>

            <div className="hidden md:flex gap-6">
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
          </div>
        </div>
      </div>
    </footer>
  );
};
