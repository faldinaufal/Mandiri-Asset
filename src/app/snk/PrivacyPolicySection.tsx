import { Text, Heading } from "../../components";
import React from "react";

export default function PrivacyPolicySection() {
  return (
    <>
      {/* privacy policy section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-center gap-[3.00rem] px-[3.50rem] md:px-[1.25rem]">
          <Heading
            size="text2xl"
            as="h1"
            className="text-[2.00rem] font-medium tracking-[0.00rem] !text-indigo-900 md:text-[1.88rem] sm:text-[1.75rem]"
          >
            Kebijakan Privasi
          </Heading>
          <Text
            as="p"
            className="w-[90%] text-[1.00rem] font-medium leading-[150%] tracking-[0.00rem] !text-black-900 md:w-full"
          >
            <>
              Kebijakan privasi ini berisi jenis informasi yang dikumpulkan dan dikelola oleh Aset card. Informasi
              Pribadi yang kami kumpulkan digunakan untuk menyediakan dan meningkatkan layanan. Kami akan menggunakan
              upaya terbaik kami untuk melindungi dan mengamankan data Anda dari akses, pengumpulan, pemrosesan,
              analisis, dan penghapusan yang tidak sah. Dengan menggunakan situs web dan aplikasi mobile, Anda dengan
              ini menyetujui Kebijakan Privasi kami dan menyetujui ketentuannya.
              <br /> <br />
              <br />
              Anda dapat menggunakan situs web ini untuk menggali lebih banyak informasi tentang perusahaan kami,
              termasuk lowongan perusahaan dan informasi publik lainnya. Oleh karena itu, kami mungkin meminta Anda
              untuk memberikan kami informasi pribadi tertentu, termasuk namun tidak terbatas pada nama, nomor telepon,
              email, institusi, alamat institusi dan informasi pribadi lainnya. Informasi yang kami kumpulkan akan
              digunakan untuk menghubungi atau mengidentifikasi Anda.
              <br /> <br />
              <br />
              Situs web ini dapat menyediakan tautan ke situs atau aplikasi lain yang dimiliki dan dikelola oleh PT
              Mandiri. Tbk. Jika Anda mengklik tautan pihak ketiga, Anda akan diarahkan ke situs/aplikasi tersebut.
              Perhatikan bahwa situs/aplikasi eksternal ini tidak dioperasikan oleh kami. Oleh karena itu, kami tidak
              bertanggung jawab atas kebijakan privasi situs web/aplikasi pihak ketiga ini.
              <br /> <br />
              Jika Anda memiliki pertanyaan atau saran terkait Kebijakan Privasi kami, jangan ragu untuk menghubungi
              kami.
            </>
          </Text>
        </div>
      </div>
    </>
  );
}
