import React from 'react';
import ScrollFadeIn from '../components/ScrollFadeIn';

const Terms = () => {
  return (
    <div>
      <ScrollFadeIn>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Terms & <span className="text-yellow-600">Conditions</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Please read these terms and conditions carefully before using our services.
              </p>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        {/* Terms Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">
                <strong>Last updated:</strong> January 1, 2024
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 mb-4">
                    By accessing and using DevBee Inc.'s website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
                  <p className="text-gray-600 mb-4">
                    DevBee Inc. provides software development services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Web application development</li>
                    <li>Mobile application development</li>
                    <li>AI and machine learning solutions</li>
                    <li>Cloud services and infrastructure</li>
                    <li>Software consulting and support</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Client Responsibilities</h2>
                  <p className="text-gray-600 mb-4">
                    Clients are responsible for:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Providing accurate and complete project requirements</li>
                    <li>Timely feedback and approval of deliverables</li>
                    <li>Payment of invoices according to agreed terms</li>
                    <li>Providing necessary access to systems and resources</li>
                    <li>Compliance with applicable laws and regulations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                  <p className="text-gray-600 mb-4">
                    Payment terms are established in individual project agreements. Generally:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Invoices are due within 30 days of receipt</li>
                    <li>Late payments may incur additional charges</li>
                    <li>Work may be suspended for overdue accounts</li>
                    <li>All prices are in USD unless otherwise specified</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                  <p className="text-gray-600 mb-4">
                    Upon full payment, clients receive ownership of custom-developed software. DevBee Inc. retains rights to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>General methodologies and know-how</li>
                    <li>Pre-existing intellectual property</li>
                    <li>Tools and frameworks developed independently</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
                  <p className="text-gray-600 mb-4">
                    DevBee Inc. agrees to maintain confidentiality of all client information and will not disclose any proprietary information to third parties without written consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
                  <p className="text-gray-600 mb-4">
                    DevBee Inc.'s liability is limited to the amount paid for services. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Warranty and Support</h2>
                  <p className="text-gray-600 mb-4">
                    We provide a 90-day warranty on delivered software for defects in workmanship. Support terms are defined in individual service agreements.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                  <p className="text-gray-600 mb-4">
                    Either party may terminate services with 30 days written notice. Clients are responsible for payment of all work completed up to the termination date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
                  <p className="text-gray-600 mb-4">
                    These terms are governed by the laws of California, United States. Any disputes will be resolved through binding arbitration in California.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                  <p className="text-gray-600 mb-4">
                    DevBee Inc. reserves the right to modify these terms at any time. Changes will be posted on our website and take effect immediately upon posting.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                  <p className="text-gray-600 mb-4">
                    For questions about these terms, please contact us at:
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>DevBee Inc.</strong><br />
                      123 Tech Street<br />
                      Silicon Valley, CA 94000<br />
                      Email: legal@devbee.com<br />
                      Phone: +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
    </div>
  );
};

export default Terms;