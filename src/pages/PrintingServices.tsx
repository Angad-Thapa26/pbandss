import React from 'react';
import { Upload, Printer, FileText, Book } from 'lucide-react';

const PrintingServices: React.FC = () => {
  const services = [
    { name: 'Document Printing', icon: FileText, price: '5 per page' },
    { name: 'Photo Printing', icon: Printer, price: '20 per photo' },
    { name: 'Binding', icon: Book, price: '100 per book' },
    { name: 'Lamination', icon: FileText, price: '50 per sheet' },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Printing Services</h1>

      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
              <service.icon size={36} className="text-blue-500" />
              <div>
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="text-gray-600">Starting from NPR {service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-100 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Upload Your Files</h2>
        <div className="bg-white rounded-lg p-6 text-center">
          <Upload size={48} className="mx-auto text-blue-500 mb-4" />
          <p className="text-gray-600 mb-4">Drag and drop your files here or click to browse</p>
          <input type="file" className="hidden" id="file-upload" multiple />
          <label htmlFor="file-upload" className="bg-blue-500 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">
            Select Files
          </label>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Upload size={32} className="text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">1. Upload Files</h3>
            <p className="text-gray-600">Upload your documents or photos for printing</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Printer size={32} className="text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">2. Choose Options</h3>
            <p className="text-gray-600">Select printing options and quantity</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FileText size={32} className="text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2">3. Collect Prints</h3>
            <p className="text-gray-600">Pick up your prints at our store</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrintingServices;