"use client";
import { usePathname } from 'next/navigation'
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet';
import Image from 'next/image';
import { sidebarLinks } from '@/constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const MobileNav = () => {
  const pathname = usePathname();

  return (
   <section className='w-full max-w-[264px]'>
     <Sheet>
        <SheetTrigger>
           <Image
              src='/icons/hamburger.svg'
              width={36}
              height={36}
              alt="hamburger icon"
              className='cursor-pointer sm:hidden'
            />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-dark-1">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              width={32}
              height={32}
              alt="yoom logo"
            />
            <p className="text-[26px] font-extrabold text-white">YOOM</p>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <section className=" flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route;

                  return (
                    <SheetClose asChild key={item.route}>
                     <Link
                        href={item.route}
                        key={item.label}
                        className={cn(
                          'flex gap-4 items-center p-4 rounded-lg w-full max-w-60',
                          {
                            'bg-blue-1': isActive,
                          }
                        )}
                      >
                        <Image
                          src={item.imgurl}
                          alt={item.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold">{item.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
     </Sheet>
   </section>
  )
}

export default MobileNav
