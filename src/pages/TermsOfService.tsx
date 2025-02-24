import React from 'react';
import { Scale } from 'lucide-react';

function TermsOfService() {
  return (
    <div className="min-h-screen bg-primary text-white page-transition">
      {/* Hero Section */}
      <section className="bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000"
            alt="Terms of Service Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 py-24 relative">
          <div className="flex items-center justify-center mb-8">
            <Scale className="h-16 w-16 text-accent" />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-center">Terms of Service</h1>
          <p className="text-xl text-gray-300 text-center">
            Effective Date: February 19, 2025<br />
            Last Updated: February 19, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 mb-8">
              Welcome to TW Solutions Inc. ("Company," "we," "us," or "our"). These Terms of Service ("Terms") govern your access and use of our website twsolutions.com (the "Site") and services. By using our Site, you agree to be bound by these Terms. If you do not agree, please do not use our services.
            </p>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-300">
                  By accessing and using our Site or services, you acknowledge that you have read, understood, and agree to comply with these Terms. If you are using our services on behalf of a company, you represent that you have the authority to bind the company to these Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Services Provided</h2>
                <p className="text-gray-300">
                  TW Solutions Inc. provides digital marketing solutions, SEO optimization, and advertising services. We reserve the right to modify or discontinue any service at any time without prior notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
                <p className="text-gray-300 mb-4">By using our Site and services, you agree to:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Provide accurate and truthful information</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not engage in fraudulent, abusive, or malicious activity</li>
                  <li>Not attempt to hack, disrupt, or exploit the Site</li>
                  <li>Respect intellectual property rights, including copyrights and trademarks</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  We reserve the right to terminate any user who violates these conditions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                <p className="text-gray-300">
                  All content on our Site, including text, graphics, logos, and software, is the property of TW Solutions Inc. and is protected by copyright, trademark, and other laws. You may not copy, distribute, or use any content without prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Payment and Billing</h2>
                <p className="text-gray-300 mb-4">If you purchase services from us:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>You agree to pay all applicable fees as outlined in the agreement</li>
                  <li>Payments are non-refundable, unless otherwise stated</li>
                  <li>We reserve the right to change prices at any time, with notice to existing clients</li>
                  <li>Failure to make payments may result in service suspension or termination</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Third-Party Links & Services</h2>
                <p className="text-gray-300">
                  Our Site may include links to third-party websites or services. We do not endorse or take responsibility for these external sites. You acknowledge that interacting with third-party content is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                <p className="text-gray-300 mb-4">To the maximum extent permitted by law, TW Solutions Inc. is not liable for:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>Any direct, indirect, incidental, or consequential damages resulting from your use of our services</li>
                  <li>Any loss of data, revenue, or profits from service interruptions</li>
                  <li>Any security breaches caused by third-party attacks</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Our total liability is limited to the amount paid (if any) for the services provided.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Disclaimer of Warranties</h2>
                <p className="text-gray-300 mb-4">Our services are provided "as is" and "as available." We do not guarantee that:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>The Site will always be available or error-free</li>
                  <li>The services will meet your specific requirements</li>
                  <li>Any content is free from viruses or harmful elements</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  We disclaim all warranties, including implied warranties of merchantability and fitness for a particular purpose.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">9. Termination of Services</h2>
                <p className="text-gray-300 mb-4">We reserve the right to suspend or terminate your access if:</p>
                <ul className="list-disc pl-6 text-gray-300 space-y-2">
                  <li>You violate any Terms of Service</li>
                  <li>You fail to make payments (if applicable)</li>
                  <li>We determine that your use poses a security or legal risk</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  Termination may occur without prior notice in severe cases.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">10. Privacy Policy</h2>
                <p className="text-gray-300">
                  Your use of our Site is also governed by our Privacy Policy. Please review it to understand how we collect, use, and protect your personal data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">11. Changes to These Terms</h2>
                <p className="text-gray-300">
                  We may update these Terms of Service at any time. Changes will be posted on this page with an updated Effective Date. Continued use of our services after changes constitutes acceptance of the new Terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">12. Governing Law</h2>
                <p className="text-gray-300">
                  These Terms are governed by the laws of Quebec, Canada. Any disputes will be handled in the courts of Montreal, Quebec.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have any questions regarding these Terms, please contact us at:
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

export default TermsOfService;