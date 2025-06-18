"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/Carousel";

const HeroSection = () => {
  return (
    <section className="relative pt-20 px-6 text-center ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-semibold text-gray-800 mb-4 animate-fade-in">
          PAUD CAHYA INDRIA
        </h1>
        <p className="text-xl text-gray-600 animate-fade-in animation-delay-200">
          Cerdas, Cermat, Ceria!
        </p>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 animate-fade-in">
            <p className="text-gray-700 leading-relaxed">
              PAUD CAHYA INDRIA adalah lembaga Pendidikan Anak Usia Dini (PAUD)
              yang berdiri sejak 2018. Berstatus sebagai sekolah Swasta, lembaga
              ini telah memberikan kontribusi signifikan dalam pengembangan
              pendidikan anak usia dini di wilayah Kec. Demak.
            </p>
            <p className="text-gray-700 leading-relaxed">
              PAUD CAHYA INDRIA didukung oleh tenaga pendidik profesional yang
              memiliki kompetensi di bidang pendidikan anak usia dini. Fasilitas
              pendukung yang aman, bersih, dan ramah anak juga menjadi bagian
              penting dalam menciptakan lingkungan belajar yang positif. Hingga
              kini, PAUD CAHYA INDRIA terus tumbuh sebagai pilihan utama
              masyarakat di wilayah Kec. Demak, dalam memberikan pendidikan awal
              terbaik bagi buah hati mereka.
            </p>
          </div>
          <div className="flex justify-center animate-fade-in animation-delay-300">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="PAUD Classroom"
                width={400}
                height={300}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 max-w-md w-full"
              />
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full "></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const VisionMissionSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-header to-blue-300">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <h2 className="text-3xl font-medium text-center text-gray-800 mb-6 tracking-widest">
              VISI
            </h2>
            <p className="text-black text-center font-normal px-4 leading-7 text-lg">
              Menyiapkan calon generasi yang bertaqwa, sehat, cerdas, dan
              berbudi luhur
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in animation-delay-200">
            <h2 className="text-3xl font-medium text-center text-gray-800 mb-6 tracking-widest">
              MISI
            </h2>
            <ul className="text-left leading-7 text-lg text-black font-normal list-disc ml-4">
              <li>Mempraktikkan dasar-dasar keimanan</li>
              <li>Melatih kebersamaan</li>
              <li>Bermain dengan pengetahuan</li>
              <li>Mencintai budaya dan lingkungan</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center ">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <h2 className="text-3xl font-medium text-center text-gray-800 mb-6 tracking-wide">
              TUJUAN
            </h2>
            <ul className="text-left leading-7 text-lg text-black font-normal list-disc ml-4">
              <li>Mewujudkan anak yang bertaqwa dan berakhlaqul karimah</li>
              <li>
                Mendidik anak agar menjadi generasi yang berkualitas berguna
                bagi agama,nusa,dan bangsa
              </li>
              <li>
                Mengembangkan kreatifitas ketrampilan anak didik untuk
                mengekspresikan diri dalam berkarya seni
              </li>
              <li>
                Mengembangkan bakat minat dan kemampuan sehingga anak berkembang
                secara optimal dan mampu beraktualisasi diri
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

interface InfiniteCarouselItem {
  id: string | number;
  title: string;
  name?: string;
  description?: string;
  imageUrl?: string;
  color?: string;
}

interface InfiniteCarouselProps {
  items: InfiniteCarouselItem[];
  type: "organizational" | string;
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ items, type }) => {
  return (
    <div className="w-full max-w-6xl mx-auto overflow-visible px-6">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full overflow-visible"
      >
        <CarouselContent className="-ml-2 md:-ml-4 overflow-visible">
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3 relative overflow-visible"
            >
              <div className="p-3 overflow-visible">
                {type === "organizational" ? (
                  <div className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-md transition-all duration-300 hover:scale-105 hover:z-30 overflow-hidden h-72 relative">
                    {item.imageUrl && (
                      <div className="h-1/2 flex-shrink-0">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-t-2xl"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://placehold.co/600x400/CCCCCC/333333?text=No+Image";
                          }}
                        />
                      </div>
                    )}
                    <div
                      className={`p-4 flex flex-col justify-center text-center ${
                        item.color || "bg-gray-700"
                      } ${
                        item.imageUrl
                          ? "h-1/2 rounded-b-2xl"
                          : "h-full rounded-2xl"
                      }`}
                    >
                      <h3 className="text-white font-semibold text-lg mb-2">
                        {item.title}
                      </h3>
                      {item.name && (
                        <p className="text-white/90 text-sm">{item.name}</p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="relative rounded-2xl shadow- hover:shadow-inner transition-all duration-300 hover:scale-100 hover:z-30 overflow-hidden h-72 group bg-slate-200">
                    <img
                      src={
                        item.imageUrl ||
                        "https://placehold.co/600x400/E0E0E0/333333?text=Image+Not+Available"
                      }
                      alt={item.title}
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://placehold.co/600x400/CCCCCC/333333?text=Error+Loading";
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-b-2xl">
                      <div className="h-20">
                        <h3 className="text-white font-medium text-lg mb-1 justify-start">
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className="text-white/90 text-sm leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

const OrganizationalStructure = () => {
  const orgData: InfiniteCarouselItem[] = [
    {
      id: 1,
      title: "Ketua Yayasan",
      name: "Susilowati, S.I.P",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      imageUrl:
        "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Pengelola KB",
      name: "Wahyu Saraswati, S.Kom",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      imageUrl:
        "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Pengelola TK",
      name: "Mufidah, S.Pd.I, S.Pd",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      imageUrl:
        "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Pengelola TPA",
      name: "Yusuf Cahya Wibawa, S.Ars",
      color: "bg-gradient-to-br from-pink-500 to-pink-600",
      imageUrl:
        "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "Guru TK",
      name: "Mudawwamah, S.Pd.I, S.Pd",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      imageUrl:
        "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      title: "Guru KB",
      name: "Kiki Ainur Rohmah",
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      imageUrl:
        "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 7,
      title: "Guru TPA",
      name: "Dewi Agustin",
      color: "bg-gradient-to-br from-teal-500 to-teal-600",
      imageUrl:
        "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section
      className="py-16 px-6 bg-gradient-to-b from-blue-300 to-blue-400"
      id="struktur-kepengurusan"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl drop-shadow-md font-semibold text-center text-white mb-12 animate-fade-in">
          STRUKTUR KEPENGURUSAN
        </h2>
        <InfiniteCarousel items={orgData} type="organizational" />
      </div>
    </section>
  );
};

const FacilitiesSection = () => {
  const facilitiesData: InfiniteCarouselItem[] = [
    {
      id: 1,
      title: "AULA LUAS BER-AC",
      description: "Aula pembelajaran yang nyaman dengan pendingin udara",
      color: "bg-gradient-to-br from-blue-300 to-blue-400",
      imageUrl:
        "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "TAMAN BERMAIN YANG AMAN",
      description: "Area bermain outdoor yang aman untuk anak",
      color: "bg-gradient-to-br from-green-300 to-green-400",
      imageUrl:
        "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "GURU YANG RAMAH ANAK",
      description: "Tenaga pengajar profesional dan berpengalaman",
      color: "bg-gradient-to-br from-purple-300 to-purple-400",
      imageUrl:
        "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "TAMAN BELAJAR",
      description: "Koleksi buku cerita dan edukatif untuk anak",
      color: "bg-gradient-to-br from-pink-300 to-pink-400",
      imageUrl:
        "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      title: "AREA SENI DAN KREATIVITAS",
      description: "Ruang khusus untuk mengembangkan kreativitas",
      color: "bg-gradient-to-br from-indigo-300 to-indigo-400",
      imageUrl:
        "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section
      className="py-16 px-6 bg-gradient-to-b from-blue-400 to-blue-500"
      id="fasilitas"
    >
      -
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-center text-white mb-12 animate-fade-in">
          FASILITAS PAUD
        </h2>
        <InfiniteCarousel items={facilitiesData} type="facilities" />
      </div>
    </section>
  );
};

const ProfilPage = () => {
  return (
    <div className="min-h-screen font-fredoka bg-header">
      <div className="pt-16 ">
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="vision">
          <VisionMissionSection />
        </div>
        <div id="structure">
          <OrganizationalStructure />
        </div>
        <div id="facilities">
          <FacilitiesSection />
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
