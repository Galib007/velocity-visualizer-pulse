
import { useEffect } from 'react';
import { Wifi, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Update document meta tags for SEO
    document.title = 'Free Internet Speed Test - Check Download, Upload, Ping & Jitter';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Test your internet speed instantly. Measure download speed, upload speed, ping, and jitter. Track your connection history with our free, accurate speed test tool.');
    }

    // Add Open Graph meta tags
    const ogTags = [
      { property: 'og:title', content: 'Free Internet Speed Test - Check Your Connection Speed' },
      { property: 'og:description', content: 'Test your internet speed instantly. Measure download, upload, ping, and jitter speeds.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/speed-test-preview.png' },
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', tag.content);
    });

    // Add Schema.org structured data
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Internet Speed Test",
      "description": "Free internet speed test tool to measure download speed, upload speed, ping, and jitter",
      "applicationCategory": "Utility",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };

    let schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);
  }, []);

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Wifi className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">SpeedTest</span>
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
};
