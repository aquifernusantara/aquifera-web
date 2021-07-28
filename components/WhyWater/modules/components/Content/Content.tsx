import React from 'react';

import Reference from '../Reference';
import Topic from '../Topic';
import { StyledContent } from './content.styled';

const Content = () => {
  return (
    <StyledContent>
      <Topic>
        <h3 className="title">Memulai Pengertian</h3>
        <p className="subtitle">
          Air adalah salah satu elemen utama di Bumi yang menjadi bagian tidak
          terpisahkan bagi seluruh makhluk hidup.
        </p>
        <p>
          Dalam tubuh manusia sendiri presentase kandungan cairan berkisar
          antara 45-60 persen untuk wanita dan 50-65 persen untuk pria. Untuk
          memenuhi kondisi tersebut maka diperlukan minum air yang cukup tiap
          harinya. Tanpa air tidak mungkin manusia dapat mempertahankan kondisi
          ideal tubuhnya. Selain itu, air juga menunjang kebutuhan hidup
          sehari-hari manusia seperti untuk memasak, mandi, mencuci dan kegiatan
          lainnya. Akan tetapi untuk memenuhi semua kebutuhan itu, air yang
          digunakan haruslah air bersih. Dikarenakan kualitas air buruk hanya
          akan menyebabkan berbagai macam penyakit yang mengancam
          keberlangsungan hidup manusia itu sendiri.
        </p>
      </Topic>
      <Topic>
        <h3 className="title">Bagaimana Jika Kekurangan Air Bersih?</h3>
        <p className="subtitle">
          Kekurangan air bersih dapat menyebabkan sejumlah penyakit yang
          berbahaya bagi kesehatan, bahkan ada yang bisa mengancam jiwa.
        </p>
        <p>
          Begitu banyak dampak buruk dari kekurangan air bersih, diantaranya
          adalah :
          <br />
          <br />
        </p>
        <ol>
          <li>
            Munculnya masalah kesehatan, dengan menurunnya standar hidup,
            masalah kesehatan juga akan ikut bermunculan. Apalagi jika warga
            terpaksa mengkonsumsi air yang tidak layak. Berbagai penyakit
            seperti disentri, diare, dan lainnya akan menyerang warga yang
            tinggal di pemukiman.
          </li>
          <li>
            Menurunnya standar hidup, yang mengakibatkan banyak pemukiman
            terpaksa mengonsumsi air yang tidak layak. Belum lagi sektor bisnis
            seperti hotel atau sekolah yang harus kekurangan air. Kekurangan air
            tentunya menyebabkan kerugian ekonomi yang tidak sedikit jumlahnya.
          </li>
          <li>
            Meluasnya bencana kelaparan, karena semua sektor kehidupan sangat
            dipengaruhi oleh ketersediaan air. Jika kelangkaan air berlangsung
            terus-menerus, akan terjadi gagal panen dan hewan ternak yang mati.
            Hal ini dapat menyebabkan krisis bahan makanan yang berdampak pula
            kepada masyarakat sekitar.
          </li>
          <li>
            Berkurangnya lahan basah, yang mengakibatkan kemampuan tanah untuk
            menahan air berkurang. Perlu Anda ketahui, sejak tahun 1990 lahan
            basah di bumi sudah berkurang setengahnya. Jika krisis air berlanjut
            bukannya tidak mungkin di masa depan kita tidak lagi memiliki
            pasokan air bersih.
          </li>
          <li>
            Kerusakan ekosistem, merupakan dampak kekurangan airyang berbahaya.
            Bayangkan saja, akan banyak hewan dan tumbuhan yang mati karena
            tidak mendapat air untuk hidup. Hal ini dapat merusak keseimbangan
            ekosistem di bumi.
          </li>
        </ol>
      </Topic>
      <Topic>
        <h3 className="title">Apakah Indonesia Kekurangan Air Bersih?</h3>
        <p>
          Ya, seperti yang kita tahu sudah terdengar kabar bahwa di Indonesia
          sudah terjadi krisis air di beberapa daerah. Berdasarkan data
          sementara yang dihimpun Pusat Pengendali Operasai Badan Nasional
          Penanggulangan Bencana (BNPB) pada tahun 2017, terdapat sekitar 105
          kabupaten/kota, 715 kecamatan, serta 2.726 kelurahan/desa di Pulau
          Jawa dan Nusa Tenggara mengalami kekeringan akibat musim kemarau
          normal. Sementara itu, ketersediaan air di wilayah lainnya seperti, di
          Sumatera Selatan, Nusa Tenggara Barat, dan Sulawesi Selatan
          diproyeksikan akan menjadi langka atau kritis pada tahun 2045.
          <br />
          <br /> Menurut Economics Intelligence Unit atau EUI dalam risetnya
          mengenai krisis sumber daya air di beberapa Negara menyimpulkan bahwa
          Negara Indonesia termasuk dalam satu Negara yang memiliki resiko yang
          cukup besar dalam kasus krisis sumber daya air. Negara Indonesia
          berada pada urutan 4 pada 10 negara teratas untuk populaso Negara tang
          beresiko rentan terjadi krisis air. Laporan penelitian ini dirilis
          resmi pada bulan September tahun 2018.
        </p>
      </Topic>
      <Reference />
    </StyledContent>
  );
};

export default Content;
