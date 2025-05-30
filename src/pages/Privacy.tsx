
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Last updated: January 1, 2024
            </p>
          </div>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Our Commitment to Privacy
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  At SpeedTest, we believe in complete transparency about how we handle your data. 
                  This privacy policy explains what information we collect, how we use it, and your rights regarding your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Speed Test Data
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      When you run a speed test, we collect technical data including download speed, upload speed, 
                      ping, and jitter measurements. This data is stored locally on your device and is not transmitted to our servers.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                      Device Information
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We may collect basic device information such as browser type, operating system, 
                      and screen resolution to optimize your experience. This information is anonymous and cannot be used to identify you personally.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>To provide accurate speed test measurements</li>
                  <li>To improve our service and user experience</li>
                  <li>To analyze usage patterns and optimize performance</li>
                  <li>To troubleshoot technical issues</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Data Storage and Security
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Your speed test history is stored locally in your browser's local storage. 
                  We do not have access to this data, and it remains on your device. 
                  You can clear this data at any time through your browser settings or by using our "Clear History" feature.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Third-Party Services
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our website may contain links to third-party websites or services. 
                  We are not responsible for the privacy practices of these external sites. 
                  We encourage you to read their privacy policies before providing any personal information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Your Rights
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Right to access your data (stored locally on your device)</li>
                  <li>Right to delete your data (clear browser storage)</li>
                  <li>Right to opt-out of analytics (use browser settings)</li>
                  <li>Right to contact us with privacy concerns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  If you have any questions about this privacy policy or our data practices, 
                  please contact us at privacy@speedtest.com.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
