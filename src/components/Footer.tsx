export default function Footer() {
  return (
    <footer className="bg-sky-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Halaman Website Sementara</h3>
            <p>Under Construction.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}