import React from 'react';
import { BookOpen, Users, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">About Pratap Book and Stationary</h1>

      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          Pratap Book and Stationery has been serving the community of Tanahun,
          Nepal for a long decade facing all the good and bad Mr.Pratap singh
          Adhikari and Ms.Bimala Adhikari held it strong.Our shop started as a
          small bookstore and has since grown into a comprehensive stationery
          and book hub. We take pride in providing high-quality educational
          materials, office supplies, and printing services to students,
          professionals, and book lovers alike.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 rounded-lg p-6 text-center">
          <BookOpen size={48} className="mx-auto text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
          <p className="text-gray-700">
            Offering a vast array of books, stationery, and school supplies
          </p>
        </div>
        <div className="bg-blue-100 rounded-lg p-6 text-center">
          <Users size={48} className="mx-auto text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
          <p className="text-gray-700">
            Dedicated to providing excellent customer service and support
          </p>
        </div>
        <div className="bg-blue-100 rounded-lg p-6 text-center">
          <Award size={48} className="mx-auto text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
          <p className="text-gray-700">
            Committed to offering only the best quality products and services
          </p>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At Pratap Book and Stationary, our mission is to foster education and
          creativity in our community by providing access to a wide range of
          books, stationery, and educational materials. We strive to be more
          than just a store; we aim to be a resource center that supports
          learning, imagination, and personal growth for all our customers.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Pratap"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">Pratap Singh Adhikari</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="bimala"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">Bimala Adhikari</h3>
            <p className="text-gray-600">Manager</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <img
              src="https://scontent.fktm21-2.fna.fbcdn.net/v/t39.30808-6/443840459_925277519346024_2487850506978589770_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFpqWIA85lKWbXR5eQxa1GD-J35frL8J4f4nfl-svwnh7RFl-tK1zYvfE6xEl9Kua7lUwqVTEffKTqXhdnmqqK7&_nc_ohc=1VrVyVlQLhsQ7kNvgHswSAh&_nc_zt=23&_nc_ht=scontent.fktm21-2.fna&_nc_gid=AjLrq_45O4I87HdzK2yISPY&oh=00_AYAZ-XGt56BJNuuMLaa58P8FT2kB_NwsOijPcgNAFhSA6w&oe=6717D9E5"
              alt="bilakshya"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">Bilakshyan Adhikari</h3>
            <p className="text-gray-600">keeper</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
