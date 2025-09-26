import React from 'react';
import { Shield, Target, Users, Lightbulb, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About HealthWatch NE
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              A pioneering initiative by the Ministry of Development of North Eastern Region (MoDoNER) 
              in collaboration with the Ministry of Health & Family Welfare to revolutionize healthcare 
              monitoring and disease prevention in rural Northeast India.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge We Address</h2>
              <p className="text-gray-700 mb-4">
                Water-borne diseases such as diarrhea, cholera, typhoid, and hepatitis A are prevalent 
                in many rural areas and tribal belts of the Northeastern Region (NER), especially during 
                the monsoon season.
              </p>
              <p className="text-gray-700 mb-6">
                These outbreaks are often linked to contaminated water sources, poor sanitation infrastructure, 
                and delayed medical response. The terrain and remoteness of many villages make it difficult 
                for health workers to monitor and respond to emerging health threats in time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Seasonal disease outbreaks during monsoons</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Remote terrain limiting healthcare access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span className="text-gray-700">Delayed response to health emergencies</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6749826/pexels-photo-6749826.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare challenges in rural areas"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To develop and deploy a comprehensive digital health platform that empowers rural 
                communities in Northeast India with early warning systems, real-time health monitoring, 
                and AI-powered outbreak prediction to prevent water-borne diseases and save lives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To create a disease-free Northeast India where every community has access to 
                intelligent health surveillance systems, ensuring rapid response to health threats 
                and promoting overall community wellness through technology-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Comprehensive Solution</h2>
            <p className="text-gray-600">Advanced features designed for rural healthcare challenges</p>
          </div>
          
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI-Powered Health Surveillance</h3>
                <p className="text-gray-700 mb-6">
                  Our advanced machine learning models analyze health patterns, environmental data, 
                  and seasonal trends to predict potential disease outbreaks before they happen. 
                  This proactive approach allows health authorities to take preventive measures 
                  and allocate resources effectively.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span>Real-time pattern recognition</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span>Predictive analytics for outbreaks</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-green-500" />
                    <span>Seasonal trend analysis</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="h-24 w-24 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 bg-teal-100 rounded-full flex items-center justify-center">
                  <Users className="h-24 w-24 text-teal-600" />
                </div>
              </div>
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Community-Centric Design</h3>
                <p className="text-gray-700 mb-6">
                  Built specifically for Northeast India's diverse communities, our platform supports 
                  multiple tribal languages and works offline to accommodate areas with limited 
                  connectivity. ASHA workers and community volunteers can easily contribute data 
                  through simple mobile interfaces.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-green-500" />
                    <span>Multi-language support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-green-500" />
                    <span>Offline functionality</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-green-500" />
                    <span>Community health education</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-gray-600">Collaborative effort across government departments</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ministry of DoNER</h3>
              <p className="text-gray-600 text-sm">
                Lead organization driving digital transformation in Northeast India
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ministry of Health & Family Welfare</h3>
              <p className="text-gray-600 text-sm">
                Healthcare policy and implementation expertise
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ministry of Jal Shakti</h3>
              <p className="text-gray-600 text-sm">
                Water quality monitoring and sanitation expertise
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;