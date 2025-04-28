import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-8 py-2 border-b border-muted bg-background/95 
    backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto container flex h-14 max-w-screen-2xl items-center">
        {/* Left side: Logo + Name */}
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src="/logo.svg" alt="Logo" width={24} height={24} className="h-6 w-6 text-foreground" />
            <span className="font-bold text-foreground">
              Vibe Product
            </span>
          </Link>
        </div>

        {/* Right side: Navigation/Actions (Currently Empty) */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Navigation links or user actions can go here later */}
          <Button
            asChild
            variant="ghost"
            size="icon"
          >
            <Link href="https://github.com/vibe-product" className="flex items-center space-x-2">
              <Image
                src="/icons/github.svg"
                alt="Github"
                width={24}
                height={24}
                className="size-6 text-foreground"
              />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
} 