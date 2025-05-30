
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Internet Speed: Download vs Upload",
      excerpt: "Learn the difference between download and upload speeds and why they matter for your daily internet activities.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Education"
    },
    {
      id: 2,
      title: "What Is Ping and Why Does It Matter?",
      excerpt: "Discover how ping affects your online gaming, video calls, and general browsing experience.",
      date: "2024-01-10",
      readTime: "4 min read",
      category: "Technology"
    },
    {
      id: 3,
      title: "5 Tips to Improve Your Internet Speed",
      excerpt: "Simple steps you can take to optimize your internet connection and get better speeds.",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "Tips"
    },
    {
      id: 4,
      title: "The Future of Internet Speed Testing",
      excerpt: "How speed testing technology is evolving and what to expect in the coming years.",
      date: "2023-12-28",
      readTime: "6 min read",
      category: "Technology"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              SpeedTest Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Stay informed about internet technology, speed optimization tips, and the latest in connectivity trends.
            </p>
          </div>

          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-200 cursor-pointer">
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl md:text-2xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
