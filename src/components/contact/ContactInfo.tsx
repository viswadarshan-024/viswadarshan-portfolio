
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg p-6 shadow-md dark:shadow-gray-800/20 border border-gray-200 dark:border-gray-800">
      <h3 className="text-xl font-display font-medium mb-6">Contact Information</h3>
      
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
            <a href="mailto:viswadarshanrramiya@gmail.com" className="text-black dark:text-white hover:underline">
              viswadarshanrramiya@gmail.com
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
            <Phone className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h4>
            <a href="tel:+916380403325" className="text-black dark:text-white hover:underline">
              +91 63804 03325
            </a>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h4>
            <p className="text-black dark:text-white">
              Madurai, Tamil Nadu
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
          Availability
        </h4>
        <p className="text-black dark:text-white text-sm">
          Currently based in Madurai, open to collaborations globally!
        </p>
      </div>
    </div>
  );
}
