export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-black/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">NovaTech</h3>
        <p className="text-gray-400 mb-4">
          Sustainable solutions for the web industry
        </p>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} NovaTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}