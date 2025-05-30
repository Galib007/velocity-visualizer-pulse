
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions about our speed test tool? Need technical support? We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">General Inquiries</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    For general questions about our service, features, or feedback.
                  </p>
                  <Button variant="outline" className="mt-2">
                    <Mail className="h-4 w-4 mr-2" />
                    hello@speedtest.com
                  </Button>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Support</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Having trouble with the speed test? Our technical team can help.
                  </p>
                  <Button variant="outline" className="mt-2">
                    <Mail className="h-4 w-4 mr-2" />
                    support@speedtest.com
                  </Button>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Business Partnerships</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Interested in partnering with us or integrating our technology?
                  </p>
                  <Button variant="outline" className="mt-2">
                    <Mail className="h-4 w-4 mr-2" />
                    business@speedtest.com
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    How accurate is the speed test?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Our speed test uses advanced algorithms to provide highly accurate measurements of your internet connection.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    Is my data stored or tracked?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    No, we prioritize your privacy. All test data is stored locally on your device and never transmitted to our servers.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    Can I use this on mobile devices?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Yes! Our speed test is fully responsive and works perfectly on smartphones, tablets, and desktop computers.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    Why do results vary between tests?
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Internet speeds can fluctuate due to network congestion, server load, and other factors. Multiple tests give a better average.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
