function Footer() {
  return (
    <footer className="bg-gray-100 mt-8">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-600">
            &copy; 2023 MobileFixNow. All rights reserved.
          </p>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
