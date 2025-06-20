import React from 'react';
import ScrollFadeIn from '../components/ScrollFadeIn';

const Privacy = () => {
  return (
    <div>
      <ScrollFadeIn>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-50 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Privacy <span className="text-yellow-600">Policy</span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
      <ScrollFadeIn>
        {/* Privacy Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none text-gray-800">
              <p className="text-gray-600 mb-8">
                <strong>Last updated:</strong> January 1, 2025
              </p>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                  <p className="text-gray-600 mb-4">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Fill out contact forms on our website</li>
                    <li>Request quotes or consultations</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Communicate with us via email or phone</li>
                    <li>Engage our services</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    This information may include your name, email address, phone number, company information, and project details.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-600 mb-4">
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Respond to your inquiries and provide customer support</li>
                    <li>Deliver our services and fulfill contracts</li>
                    <li>Send you updates about our services and company news</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                    <li>Protect our rights and prevent fraud</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                  <p className="text-gray-600 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties except:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To trusted service providers who assist in our operations</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transfer or merger</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                  <p className="text-gray-600 mb-4">
                    We implement appropriate security measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure servers and databases</li>
                    <li>Regular security audits and updates</li>
                    <li>Limited access to personal information</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking</h2>
                  <p className="text-gray-600 mb-4">
                    Our website uses cookies to enhance your experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand website usage</li>
                    <li>Preference cookies to remember your settings</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    You can control cookie settings through your browser preferences.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                  <p className="text-gray-600 mb-4">
                    We retain your personal information only as long as necessary to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Provide our services</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes</li>
                    <li>Enforce our agreements</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
                  <p className="text-gray-600 mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Object to processing of your information</li>
                    <li>Request data portability</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
                  <p className="text-gray-600 mb-4">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                  <p className="text-gray-600 mb-4">
                    Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will delete the information immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
                  <p className="text-gray-600 mb-4">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information during such transfers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Policy</h2>
                  <p className="text-gray-600 mb-4">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on our website and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                  <p className="text-gray-600 mb-4">
                    If you have questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>DevBee Inc.</strong><br />
                      29A RS PLAZA<br />
                     Kuniamuthur, Coimbatore -  641008<br />
                      Email: support@dev-bee.com<br />
                      Phone: +91 90030 95635
                    </p>
                  </div>DevBee Inc. ,
 
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollFadeIn>
    </div>
  );
};

export default Privacy;