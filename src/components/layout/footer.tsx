import Link from 'next/link';
import { ShieldCheck, Twitter, Facebook, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">RecoverEase</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in fund recovery and scam prevention.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/claim" className="text-sm text-muted-foreground hover:text-foreground">Start a Claim</Link></li>
              <li><Link href="#services" className="text-sm text-muted-foreground hover:text-foreground">Our Services</Link></li>
              <li><Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Twitter size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Facebook size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground"><Linkedin size={20} /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} RecoverEase. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
