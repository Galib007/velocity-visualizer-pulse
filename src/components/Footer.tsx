
import { Card } from '@/components/ui/card';
import { Heart, Shield, Zap } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="mt-16 py-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-0">
            <div className="flex items-center space-x-3 mb-3">
              <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Fast & Accurate</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Get precise measurements of your internet connection speed with our advanced testing technology.
            </p>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-0">
            <div className="flex items-center space-x-3 mb-3">
              <Shield className="h-6 w-6 text-green-600 dark:text-green-400" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Privacy First</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Your data stays on your device. We don't collect or store any personal information.
            </p>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-0">
            <div className="flex items-center space-x-3 mb-3">
              <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <h3 className="font-semibold text-gray-900 dark:text-white">Always Free</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Test your internet speed as many times as you want, completely free with no limitations.
            </p>
          </Card>
        </div>
        
        <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 SpeedTest App. Built with love for better internet experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};
