import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAINTINGS } from "@/assets/paintings-cdn";
import { PENCIL_SKETCHES } from "@/assets/pencil-sketch-cdn";

const IMAGES_PER_PAGE = 9;

const Gallery = () => {
  const [tab, setTab] = useState("paintings");
  const [page, setPage] = useState(1);
  const [preview, setPreview] = useState<string | null>(null);

  const images = tab === "paintings" ? PAINTINGS : PENCIL_SKETCHES;
  const totalPages = Math.ceil(images.length / IMAGES_PER_PAGE) || 1;
  const pagedImages = images.slice((page - 1) * IMAGES_PER_PAGE, page * IMAGES_PER_PAGE);

  const handleTab = (tab: string) => {
    setTab(tab);
    setPage(1);
    setPreview(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">Gallery</h1>
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 rounded-l-2xl border border-primary font-semibold transition-colors ${tab === "paintings" ? "bg-primary text-primary-foreground" : "bg-white text-primary hover:bg-primary/10"}`}
            onClick={() => handleTab("paintings")}
          >
            Paintings
          </button>
          <button
            className={`px-6 py-2 rounded-r-2xl border-t border-b border-r border-primary font-semibold transition-colors ${tab === "pencil" ? "bg-primary text-primary-foreground" : "bg-white text-primary hover:bg-primary/10"}`}
            onClick={() => handleTab("pencil")}
          >
            Pencil Sketch
          </button>
        </div>
        {images.length === 0 ? (
          <div className="text-center text-lg text-muted-foreground py-20">No images to display.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {pagedImages.map((url, idx) => (
              <div key={url} className="relative group rounded-2xl overflow-hidden shadow-lg bg-white cursor-pointer" onClick={() => setPreview(url)}>
                <img
                  src={url}
                  alt="Artwork"
                  className="w-full h-64 object-cover select-none pointer-events-none"
                  draggable="false"
                  onContextMenu={e => e.preventDefault()}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
              </div>
            ))}
          </div>
        )}
        {/* Pagination */}
        {images.length > 0 && (
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-lg shadow-sm border border-border overflow-hidden">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 text-lg font-medium transition-colors ${page === i + 1 ? "bg-primary text-primary-foreground" : "bg-white text-primary hover:bg-primary/10"}`}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </nav>
          </div>
        )}
        {/* Preview Modal */}
        {preview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setPreview(null)}>
            <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-3xl w-full relative" onClick={e => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-primary" onClick={() => setPreview(null)}>&times;</button>
              <img
                src={preview}
                alt="Preview"
                className="w-full max-h-[70vh] object-contain select-none pointer-events-none rounded-xl"
                draggable="false"
                onContextMenu={e => e.preventDefault()}
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
