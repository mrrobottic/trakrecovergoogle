import Link from 'next/link';
import { ShieldCheck, Twitter, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">TRAKMINT</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner in fund recovery and scam prevention.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/claim" className="text-sm text-muted-foreground hover:text-foreground">Start a Claim</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground">Our Services</Link></li>
              <li><Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
              <li><Link href="/about-us" className="text-sm text-muted-foreground hover:text-foreground">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-muted-foreground" />
                <a href="mailto:support@trakmint.org" className="text-sm text-muted-foreground hover:text-foreground">
                  support@trakmint.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-muted-foreground" />
                <a href="mailto:help@trakmint.org" className="text-sm text-muted-foreground hover:text-foreground">
                  Help@trakmint.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-muted-foreground" />
                <span className="text-sm text-muted-foreground">+1 (928) 380-0840</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          © 2022 - {new Date().getFullYear()} TRAKMINT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
