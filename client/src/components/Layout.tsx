import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { label: "トップページ", href: "/" },
    { label: "学校案内", href: "/about" },
    { label: "学校生活", href: "/life" },
    { label: "進路情報", href: "/career" },
    { label: "中学生のみなさんへ", href: "/admission" },
    { label: "アクセス", href: "/access" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="p-1 rounded-sm group-hover:opacity-90 transition-opacity">
              <img 
                src="/images/logo_full.png" 
                alt="岩手県立大東高等学校ロゴ" 
                className="h-14 w-14 object-contain rounded-sm"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-serif tracking-widest text-muted-foreground">創立100周年</span>
              <span className="text-lg font-serif font-bold tracking-tight text-primary">岩手県立大東高等学校</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "font-serif text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5",
                    location === item.href && "text-primary bg-primary/5 font-bold"
                  )}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="default" className="ml-2 font-serif bg-primary text-primary-foreground hover:bg-primary/90">
                お問い合わせ
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 md:hidden animate-in slide-in-from-top-5 fade-in duration-200">
          <nav className="container flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-lg font-serif py-6",
                    location === item.href && "bg-primary/5 text-primary font-bold"
                  )}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full font-serif py-6 mt-4 bg-primary text-primary-foreground">
                お問い合わせ
              </Button>
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 mt-auto">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/images/logo_full.png" 
                alt="岩手県立大東高等学校ロゴ" 
                className="h-8 w-8 object-contain rounded-sm bg-white/10 p-1"
              />
              <span className="text-xl font-serif font-bold">岩手県立大東高等学校</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              〒029-0523<br />
              岩手県一関市大東町摺沢字堀河ノ沢34番4号<br />
              TEL: 0191-75-3116（事務室）<br />
              TEL: 0191-75-3369（職員室）
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-accent">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent transition-colors">学校案内</Link></li>
              <li><Link href="/life" className="hover:text-accent transition-colors">学校生活</Link></li>
              <li><Link href="/career" className="hover:text-accent transition-colors">進路情報</Link></li>
              <li><Link href="/access" className="hover:text-accent transition-colors">アクセス</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-accent">Information</h3>
            <p className="text-sm text-primary-foreground/80">
              令和7年度に創立100周年を迎えます。<br />
              伝統を受け継ぎ、新たな未来へ。
            </p>
            <div className="pt-4 border-t border-primary-foreground/20">
              <p className="text-xs text-primary-foreground/60">
                &copy; {new Date().getFullYear()} Iwate Prefectural Daito High School. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
