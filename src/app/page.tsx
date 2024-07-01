import Slideshow from '@/components/Slideshow'

export default function Home() {
  return (
    <>
      <Slideshow />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">RS Bunda Pengharapan</h1>
        <p className="text-xl mb-4">Kasih yang Menyembuhkan</p>
        <p className="mb-4">
          RS Bunda Pengharapan berkomitmen untuk memberikan layanan kesehatan berkualitas tinggi dengan kasih sayang dan kepedulian.
          Fasilitas kami yang canggih dan profesional medis berpengalaman memastikan Anda menerima perawatan terbaik.
        </p>
        <a href="/services" className="bg-blue-600 text-white px-4 py-2 rounded">
          Layanan
        </a>
      </div>
    </>
  )
}