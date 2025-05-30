
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Last updated: January 1, 2024
            </p>
          </div>

          <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  By accessing and using the SpeedTest service, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, 
                  please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Use License
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                  Permission is granted to temporarily use SpeedTest for personal, non-commercial transitory viewing only. 
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Service Availability
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We strive to provide a reliable service, but we cannot guarantee that the service will be 
                  available at all times. We may experience hardware, software, or other problems or need to 
                  perform maintenance related to the service, resulting in interruptions, delays, or errors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Accuracy of Results
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  While we strive to provide accurate speed test results, various factors can affect measurements 
                  including network congestion, device performance, and other technical variables. 
                  Results should be considered estimates and may vary between tests.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Prohibited Uses
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                  You may not use our service:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Disclaimer
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The information on this website is provided on an 'as is' basis. To the fullest extent permitted by law, 
                  this Company excludes all representations, warranties, conditions and terms which, 
                  but for this legal notice, might have effect in relation to this website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Limitations
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  In no event shall SpeedTest or its suppliers be liable for any damages (including, without limitation, 
                  damages for loss of data or profit, or due to business interruption) arising out of the use or 
                  inability to use the materials on SpeedTest's website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Revisions and Errata
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  The materials appearing on SpeedTest's website could include technical, typographical, or photographic errors. 
                  SpeedTest does not warrant that any of the materials on its website are accurate, complete, or current.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at legal@speedtest.com.
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

export default Terms;
