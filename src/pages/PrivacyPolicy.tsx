import React from 'react';
import { Shield } from 'lucide-react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-primary text-white page-transition">
      {/* Hero Section */}
      <section className="bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000"
            alt="Privacy Policy Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 py-24 relative">
          <div className="flex items-center justify-center mb-8">
            <Shield className="h-16 w-16 text-accent" />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-center">Privacy Policy</h1>
          <p className="text-xl text-gray-300 text-center">
            Last Updated: February 19, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 mb-8">
              TW Solutions Inc. ("Company," "we," "us," or "our") respects your privacy and is committed to protecting it through this Privacy Policy. This policy explains how we collect, use, disclose, and safeguard your information when you visit our website twsolutions.com (the "Site").
            </p>

            <div className="bg-secondary rounded-lg p-8 mb-12">
              <p className="text-accent font-semibold mb-4">Important Notice</p>
              <p className="text-gray-300">
                By accessing or using our Site, you agree to the collection and use of information as described in this policy. If you do not agree, please do not use our services.
              </p>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">1. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mb-4">1.1. Personal Information</h3>
                <p className="text-gray-300 mb-4">
                  When you interact with our Site, we may collect personally identifiable information, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-300 space-y-2">
                  <li>Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Company Name</li>
                  <li>Billing and Payment Information (if applicable)</li>
                  <li>Any other information you voluntarily provide through forms, emails, or direct communication</li>
                </ul>

                <h3 className="text-xl font-semibold mb-4">1.2. Non-Personal Information</h3>
                <p className="text-gray-300 mb-4">
                  We may also collect non-personal data, including:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-300 space-y-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referral source</li>
                  <li>Browsing behavior on our Site</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">2. How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">We use the collected information to:</p>
                <ul className="list-disc pl-6 mb-8 text-gray-300 space-y-2">
                  <li>Provide, operate, and improve our services</li>
                  <li>Respond to inquiries and customer service requests</li>
                  <li>Send administrative information such as confirmations, updates, and security alerts</li>
                  <li>Personalize user experience and improve our website</li>
                  <li>Prevent fraudulent activities and protect website security</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">3. Sharing Your Information</h2>
                <p className="text-gray-300 mb-4">
                  We do not sell, rent, or trade your personal information. However, we may share your information in the following cases:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-300 space-y-2">
                  <li>
                    <span className="font-semibold">Service Providers:</span> We may share data with third-party vendors who help us operate our website and business, such as hosting providers, analytics services, and email delivery services.
                  </li>
                  <li>
                    <span className="font-semibold">Legal Compliance:</span> We may disclose your information if required by law or in response to legal processes, such as court orders or subpoenas.
                  </li>
                  <li>
                    <span className="font-semibold">Business Transfers:</span> If TW Solutions Inc. is involved in a merger, acquisition, or asset sale, your information may be transferred.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">4. Cookies and Tracking Technologies</h2>
                <p className="text-gray-300 mb-4">
                  Our Site may use cookies and similar tracking technologies to enhance your experience. These may collect browsing data such as:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-300 space-y-2">
                  <li>Session information</li>
                  <li>Preferences and settings</li>
                  <li>Website traffic analysis</li>
                </ul>
                <p className="text-gray-300">
                  You can manage cookie settings through your browser, but disabling cookies may impact website functionality.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">5. Data Security</h2>
                <p className="text-gray-300">
                  We take reasonable security measures to protect your personal data from unauthorized access, disclosure, or destruction. However, no data transmission over the internet is 100% secure. We encourage users to take precautions when sharing sensitive information online.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">6. Third-Party Links</h2>
                <p className="text-gray-300">
                  Our Site may contain links to third-party websites. We are not responsible for the privacy policies or practices of these external sites. We recommend reviewing their privacy policies before providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">7. Your Rights and Choices</h2>
                <p className="text-gray-300 mb-4">
                  Depending on your jurisdiction, you may have the right to:
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-300 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
                <p className="text-gray-300">
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">8. Changes to This Privacy Policy</h2>
                <p className="text-gray-300">
                  We may update this Privacy Policy periodically. Any changes will be posted on this page with the revised "Effective Date." Continued use of our Site after changes constitutes acceptance of the updated policy.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">9. Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy or how we handle your information, please contact us at:
                </p>
                <div className="bg-secondary rounded-lg p-8">
                  <p className="text-white font-semibold mb-2">TW Solutions Inc.</p>
                  <p className="text-gray-300">📧 contact@twsolutions.com</p>
                  <p className="text-gray-300">📞 (514) 555-0123</p>
                  <p className="text-gray-300">📍 212-353 Rue Querbes, Vaudreuil-Dorion, QC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;