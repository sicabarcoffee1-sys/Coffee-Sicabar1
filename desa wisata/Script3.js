
  
  
  return (
    <div className="bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Ensure this image path is correct relative to your public directory */}
              <Image
                src="/images/logo-ciderum.png"
                alt="Logo Desa Wisata Ciderum dengan gambar rumah, daun hijau, dan tulisan Desa Wisata Ciderum"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <a href="#" className="ml-3 text-xl font-bold text-green-700">
                Ciderum<span className="text-yellow-500">Wisata</span>
              </a>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-green-700 hover:text-yellow-500">
                Beranda
              </a>
              <a href="#destinasi" className="text-gray-700 hover:text-yellow-500">
                Destinasi
              </a>
              <a href="#aktivitas" className="text-gray-700 hover:text-yellow-500">
                Aktivitas
              </a>
              <a href="#testimoni" className="text-gray-700 hover:text-yellow-500">
                Testimoni
              </a>
              <a href="#kontak" className="text-gray-700 hover:text-yellow-500">
                Kontak
              </a>
            </div>
            <button className="md:hidden focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4">
              <a href="#home" className="block py-2 text-gray-700 hover:text-yellow-500">
                Beranda
              </a>
              <a href="#destinasi" className="block py-2 text-gray-700 hover:text-yellow-500">
                Destinasi
              </a>
              <a href="#aktivitas" className="block py-2 text-gray-700 hover:text-yellow-500">
                Aktivitas
              </a>
              <a href="#testimoni" className="block py-2 text-gray-700 hover:text-yellow-500">
                Testimoni
              </a>
              <a href="#kontak" className="block py-2 text-gray-700 hover:text-yellow-500">
                Kontak
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="h-screen flex items-center justify-center text-white relative bg-cover bg-center bg-no-repeat"
        style={{
          // Ensure this placeholder image exists or replace it with your actual image path
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/placeholder.svg?height=1080&width=1920')`,
        }}
        id="home"
      >
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Selamat Datang di <span className="text-yellow-400">Desa Wisata Ciderum</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Temukan pesona alam yang menakjubkan dan pengalaman budaya yang autentik
          </p>
          <a
            href="#destinasi"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full inline-block transition duration-300 transform hover:scale-105 animate-bounce"
          >
            Jelajahi Sekarang
          </a>
        </div>
      </section>

      {/* Informasi Desa */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Mengenal Desa Ciderum</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
              {/* Ensure this placeholder image exists or replace it with your actual image path */}
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Panorama desa Ciderum dengan pemandangan sawah berundak, pepohonan rindang, dan beberapa rumah tradisional di kejauhan"
                width={600}
                height={400}
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-gray-700 mb-6 text-lg">
                Desa Ciderum terletak di antara perbukitan yang hijau dengan udara sejuk dan alam yang asri. Desa ini
                menyimpan potensi wisata yang luar biasa dengan panorama alam yang memukau, budaya yang kaya, dan
                keramahan warganya.
              </p>
              <p className="text-gray-700 mb-6 text-lg">
                Dengan hamparan sawah berundak, perkebunan teh yang luas, air terjun tersembunyi, dan berbagai aktivitas
                budaya, Ciderum menawarkan pengalaman wisata desa yang tak terlupakan.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700 text-sm font-semibold">LUAS WILAYAH</p>
                  <p className="text-xl font-bold">12,5 km²</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700 text-sm font-semibold">JUMLAH PENDUDUK</p>
                  <p className="text-xl font-bold">3.200 Jiwa</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700 text-sm font-semibold">KETINGGIAN</p>
                  <p className="text-xl font-bold">800 mdpl</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700 text-sm font-semibold">SUHU RATA-RATA</p>
                  <p className="text-xl font-bold">22°C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinasi Wisata */}
      <section className="py-20 bg-gray-50" id="destinasi">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Destinasi Wisata Unggulan</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Temukan berbagai destinasi menarik yang wajib Anda kunjungi saat berada di Desa Ciderum
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Destinasi 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              {/* Ensure this placeholder image exists or replace it with your actual image path */}
              <Image
                src="/placeholder.svg?height=224&width=400"
                alt="Sawah berundak di Desa Ciderum dengan warna hijau yang mencolok dan kontur lahan yang indah"
                width={400}
                height={224}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Sawah Berundak Ciderum</h3>
                <p className="text-gray-600 mb-4">
                  Nikmati keindahan sawah berundak dengan sistem irigasi tradisional yang telah berusia ratusan tahun.
                </p>
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2">Alam</div>
                  <div className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Foto</div>
                </div>
              </div>
            </div>

            {/* Destinasi 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              {/* Ensure this placeholder image exists or replace it with your actual image path */}
              <Image
                src="/placeholder.svg?height=224&width=400"
                alt="Air Terjun Ciseupan dengan aliran air jernih yang jatuh dari ketinggian sekitar 15 meter dikelilingi tebing dan pepohonan rindang"
                width={400}
                height={224}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Air Terjun Ciseupan</h3>
                <p className="text-gray-600 mb-4">
                  Terdapat air terjun setinggi 15 meter dengan kolam alami yang cocok untuk berenang dan bermain air.
                </p>
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2">Alam</div>
                  <div className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Petualangan</div>
                </div>
              </div>
            </div>

            {/* Destinasi 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md transition duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
              {/* Ensure this placeholder image exists or replace it with your actual image path */}
              <Image
                src="/placeholder.svg?height=224&width=400"
                alt="Perkebunan teh Ciderum dengan barisan tanaman teh yang rapi membentuk gelombang hijau di lereng bukit"
                width={400}
                height={224}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Perkebunan Teh Tradisional</h3>
                <p className="text-gray-600 mb-4">
                  Pelajari proses pembuatan teh tradisional dari petik daun sampai menjadi minuman siap saji.
                </p>
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full mr-2">Edukasi</div>
                  <div className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Kuliner</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full inline-block transition duration-300 transform hover:scale-105"
            >
              Lihat Lebih Banyak
            </button>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section
        className="py-32 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          // Ensure this placeholder image exists or replace it with your actual image path
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/placeholder.svg?height=1080&width=1920')`,
        }}
      >
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nikmati Pengalaman Wisata yang Berbeda</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Temukan keindahan alam, budaya, dan keramahan masyarakat Desa Ciderum dalam setiap kunjungan Anda
          </p>
          <a
            href="#kontak"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full inline-block transition duration-300"
          >
            Hubungi Kami
          </a>
        </div>
      </section>

      {/* Aktivitas Wisata */}
      <section className="py-20 bg-white" id="aktivitas">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Aktivitas Menarik</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Berbagai kegiatan seru yang bisa Anda lakukan selama berada di Desa Ciderum
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="bg-yellow-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Paket Wisata</h3>
              <p className="text-gray-600">
                Pilihan paket wisata lengkap dengan pemandu lokal berpengalaman dan fasilitas memadai.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="bg-yellow-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Homestay</h3>
              <p className="text-gray-600">
                Menginap di rumah penduduk untuk merasakan kehidupan sehari-hari masyarakat desa.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <div className="bg-yellow-100 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Workshop Budaya</h3>
              <p className="text-gray-600">
                Belajar membuat kerajinan tangan, menari tradisional, atau memasak kuliner khas desa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section className="py-20 bg-white" id="kontak">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Hubungi Kami</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Untuk informasi lebih lanjut atau pemesanan kunjungan, silahkan menghubungi kami
          </p>

          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <form className="bg-gray-50 p-8 rounded-lg" onSubmit={handleFormSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-gray-50 p-8 rounded-lg h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
                <div className="mb-6">
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                      <MapPin className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Alamat</h4>
                      <p className="text-gray-600">Desa Ciderum, Kecamatan Caringin, Kabupaten Bogor, Jawa Barat</p>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                      <Phone className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Telepon</h4>
                      <p className="text-gray-600">+62 858-8078-7067</p>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex items-start">
                    <div className="bg-yellow-100 p-3 rounded-full mr-4">
                      <Mail className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Email</h4>
                      <p className="text-gray-600">info@wisataciderum.com</p>
                      <p className="text-gray-600">pengelola@wisataciderum.com</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-bold text-gray-800 mb-4">Ikuti Kami di Media Sosial</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-gray-200 hover:bg-yellow-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center text-gray-700 transition duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/desawisataciderum/"
                      className="bg-gray-200 hover:bg-yellow-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center text-gray-700 transition duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 3.907.058h.355c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-3.907v-.355c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-gray-200 hover:bg-yellow-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center text-gray-700 transition duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-gray-200 hover:bg-yellow-500 hover:text-white w-10 h-10 rounded-full flex items-center justify-center text-gray-700 transition duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                {/* Ensure this image path is correct relative to your public directory */}
                <Image
                  src="/images/logo-ciderum.png"
                  alt="Logo Desa Wisata Ciderum dengan gambar rumah, daun hijau, dan tulisan Desa Wisata Ciderum"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
                <a href="#" className="ml-3 text-xl font-bold text-white">
                  Ciderum<span className="text-yellow-400">Wisata</span>
                </a>
              </div>
              <p className="max-w-xs">
                Menjadi destinasi wisata desa unggulan dengan mengangkat potensi lokal dan kearifan budaya masyarakat.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">Tautan Cepat</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#home" className="hover:text-yellow-400">
                      Beranda
                    </a>
                  </li>
                  <li>
                    <a href="#destinasi" className="hover:text-yellow-400">
                      Destinasi
                    </a>
                  </li>
                  <li>
                    <a href="#aktivitas" className="hover:text-yellow-400">
                      Aktivitas
                    </a>
                  </li>
                  <li>
                    <a href="#testimoni" className="hover:text-yellow-400">
                      Testimoni
                    </a>
                  </li>
                  <li>
                    <a href="#kontak" className="hover:text-yellow-400">
                      Kontak
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Kebijakan</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-yellow-400">
                      Syarat & Ketentuan
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-400">
                      Kebijakan Privasi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-400">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">Kontak</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    +62 858-8078-7067
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    info@wisataciderum.com
                  </li>
                  <li className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Wisata Desa Ciderum, Bogor
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-sm text-center">
            <p>© 2020 Wisata Desa Ciderum. Seluruh hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      {/* Remember to replace the placeholder phone number with a real one */}
      <a
        href="https://wa.me/6281234567890"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300 z-50"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-600 transition duration-300 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
