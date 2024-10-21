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
              src="https://scontent.fktm21-2.fna.fbcdn.net/v/t39.30808-1/345583253_956702718685851_8257316030479311428_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=DYLjDurLxIEQ7kNvgGmmxHE&_nc_zt=24&_nc_ht=scontent.fktm21-2.fna&_nc_gid=AgA3WzGONX_tZ5UEN9n7Md7&oh=00_AYCYEUNOHoio8ksqtgrb9YC5vm7RXJJaXB5kxVRY7eB6qw&oe=671C1B37"
              alt="Pratap"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">Pratap Singh Adhikari</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <img
              src="https://scontent.fktm21-1.fna.fbcdn.net/v/t1.6435-9/122871877_364344134782417_2792496364266094264_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=dIqSMJ9xyFkQ7kNvgEN9A5N&_nc_zt=23&_nc_ht=scontent.fktm21-1.fna&_nc_gid=AMHHFUiS4FrpLUXyusPD4EV&oh=00_AYCE-O5l57Ordy-RrFZnZeDlcDqdQIP1bbuhM6z1uPYJkg&oe=673DB2D3"
              alt="bimala"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">Bimala Adhikari</h3>
            <p className="text-gray-600">Manager</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <img
              src="https://scontent.fktm21-2.fna.fbcdn.net/v/t39.30808-6/463037994_538849352072686_7190897010657431502_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kix4R60KbHkQ7kNvgH0GReS&_nc_zt=23&_nc_ht=scontent.fktm21-2.fna&_nc_gid=ADOjbP9BRJLxYi5KOQrgfdm&oh=00_AYDwO9yTl_bGc28t3RSfpG10wua3kciuuYrn5M4xW-b-dQ&oe=671C3195"
              alt="bilakshya"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">Bilakshyan Adhikari</h3>
            <p className="text-gray-600">Executive</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
