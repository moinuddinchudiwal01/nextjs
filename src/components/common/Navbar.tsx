"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className='bg-background text-foreground px-6 py-3 sticky top-0 z-50 shadow-lg backdrop-blur-md'>
      {/* Desktop Navbar */}
      <div className='hidden md:flex justify-between items-center'>
        <div className='text-xl font-mono text-primary'>Clever</div>
        <ul className='flex gap-6'>
          <li>
            <a
              href='#home'
              className='font-medium hover:text-primary transition'
            >
              Home
            </a>
          </li>
          <li>
            <a
              href='#product'
              className='font-medium hover:text-primary transition'
            >
              Product
            </a>
          </li>
          <li>
            <a
              href='#features'
              className='font-medium hover:text-primary transition'
            >
              Features
            </a>
          </li>
          <li>
            <a
              href='#pricing'
              className='font-medium hover:text-primary transition'
            >
              Pricing
            </a>
          </li>
        </ul>

        {false ? (
          <div className='flex gap-3'>
            <Button variant='outline'>Sign In</Button>
            <Button>Sign Up</Button>
          </div>
        ) : (
          <div>
            <Image
              src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880'
              alt='Profile'
              width={40}
              height={40}
              className='rounded-full object-cover'
            />
          </div>
        )}
      </div>

      {/* Mobile Navbar */}
      <div className='flex items-center justify-between md:hidden'>
        <div className='text-xl font-mono text-primary'>Clever</div>
        {isMenuOpen ? (
          <X onClick={toggleMenu} className='cursor-pointer' />
        ) : (
          <Menu onClick={toggleMenu} className='cursor-pointer' />
        )}
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className='md:hidden mt-3 bg-background border-t border-border py-4'>
          <ul className='flex flex-col gap-4 text-center'>
            <li>
              <a
                href='#home'
                className='font-medium hover:text-primary transition'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#product'
                className='font-medium hover:text-primary transition'
              >
                Product
              </a>
            </li>
            <li>
              <a
                href='#features'
                className='font-medium hover:text-primary transition'
              >
                Features
              </a>
            </li>
            <li>
              <a
                href='#pricing'
                className='font-medium hover:text-primary transition'
              >
                Pricing
              </a>
            </li>
          </ul>

          <div className='flex flex-col gap-3 mt-4 items-center'>
            {true ? (
              <>
                <Button variant='outline' className='w-3/4'>
                  Sign In
                </Button>
                <Button className='w-3/4'>Sign Up</Button>
              </>
            ) : (
              <Image
                src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=880'
                alt='Profile'
                width={40}
                height={40}
                className='rounded-full object-cover'
              />
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
