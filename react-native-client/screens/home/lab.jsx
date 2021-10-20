import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import Card from '../../components/LabCard';

export default function Lab({navigation, route}) {

  let content = [
    {
      name: "Hematologi",
      content:
        "Ada banyak jenis pemeriksaan hematologi yang dapat dilakukan. Salah satunya yaitu pemeriksaan darah lengkap. Tujuan pemeriksaan ini adalah untuk menilai kondisi darah secara keseluruhan dan membantu diagnosis anemia, penyakit peradangan, memantau kehilangan darah, infeksi, bahkan mendeteksi kanker. Pemeriksaan darah meliputi, jumlah sel darah merah berikut dengan volumenya, sel darah putih berikut dengan hitung jenisnya, Di samping itu, bisa juga dilakukan pemeriksaan partial thromboplastin time (PTT), pemeriksaan prothrombin time (PT), international normalized ratio (INR). Ketiganya bertujuan untuk menilai pembekuan darah beserta gangguannya.",
      image: 'http://spiritia.or.id/cdn/images/artikel/file_5c185fc569a0f.jpg'
    },
    {
      name: "Anatomi",
      content:
        "Patologi anatomi berfungsi untuk mendiagnosis secara paling pasti penyebab penyakit tertentu, jenis penyakit tertentu, serta efeknya ke tubuh dalam membantu pilihan perawatan yang akan diberikan. Tes patologi anatomi juga bisa dilakukan untuk menentukan apa yang menjadi penyebab kematian seseorang.",
      image: 'http://rsudaws.co.id/uploads/LAB%20PA/Parafin%20Embedding%2014.JPG'
    },
    {
      name: "USG",
      content:
        "Ultrasonografi (USG) adalah prosedur pemindaian dengan menggunakan teknologi gelombang suara berfrekuensi tinggi. Tujuan USG adalah untuk menghasilkan gambar organ tubuh bagian dalam. USG ini digunakan agar tim medis mendapatkan ketepatan dalam mendiagnosis penyakit. Dengan kata lain, USG merupakan pemeriksaan penunjang untuk membantu dokter mengidentifikasi penyebab penyakit pada seseorang.",
      image: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1594171120/attached_image/usg-ini-yang-harus-anda-ketahui-0-alodokter.jpg'
    },
    {
      name: "Serologi",
      content:
        "Tes serologi adalah pemeriksaan darah untuk mencari antibodi dalam darah. Antibodi adalah respons imun terhadap infeksi. Pemeriksaan ini dapat melibatkan sejumlah teknik laboratorium. Pemeriksaan serologi fokus pada protein yang dibuat oleh sistem kekebalan tubuh. Artinya, pemeriksaan ini bukan untuk mendeteksi keberadaan zat asing itu sendiri.",
      image: 'https://www.rnz.co.nz/assets/news_crops/79136/eight_col_test.jpg?1556673511'
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {content.map((el, index) => {
        return (
          <Card key={index} data={el}/>
        )
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 15
  }
});
