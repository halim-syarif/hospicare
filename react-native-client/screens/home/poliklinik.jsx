import React from "react";
import {
  StyleSheet,
  ScrollView,
} from "react-native";
import PoliCard from "../../components/PoliCard";

export default function Poliklinik({ navigation, route }) {
  let content = [
    {
      name: "Anak",
      content:
        "Pelayanan kesehatan bayi baru lahir, anak dan remaja termasuk menjadi salah satu layanan unggulan yang diawali dengan layanan Poliklinik Anak, kemudian diikuti dengan layanan rawat inap, termasuk rawat inap intensif bayi (Neonatal Intensive Care Unit) dan rawat inap intensif anak (Pediatric Intensive Care Unit).",
      image: 'https://s3.theasianparent.com/tap-assets-prod/wp-content/uploads/sites/24/2020/01/child-docto-rs-office_1098-19672.jpg'
    },
    {
      name: "Jantung",
      content:
        "Terdapat banyak jenis penyakit jantung seperti Gagal jantung, Aritmia (gangguan listrik jantung), Penyakit Vaskular/pembuluh darah baik arteri maupun Vena, Katup jantung, penyakit jantung infeksi dan penyakit jantung bawaan (kongenital) dan salah satu penyakit jantung yang menjadi momok dalam dekade terakhir adalah penyakit jantung koroner. dengan fasilitas diagnosis dan penanganan yang canggih. Ditunjang dengan dokter-dokter yang berpengalaman di bidang kegawatan jantung dan masalah jantung lainnya, Klinik Jantung Hospicare menjadi salah satu klinik unggulan yang menerima pasien rujukan dari berbagai fasilitas kesehatan lainnya.",
      image: 'https://asset.kompas.com/crops/mOKFrYHlSTM6SEt4aD9PIXZnJE0=/0x5:593x400/750x500/data/photo/2020/03/16/5e6ee88f78835.jpg'
    },
    {
      name: "Bedah Umum",
      content:
        "Keunggulan utama dari Klinik Bedah Hospicare adalah tindakan bedah minimal-invasive. Dengan menggunakan peralatan canggih serta dokter yang berpengalaman, tindakan ini hanya akan melibatkan luka berukuran kecil. Harapannya dengan luka kecil, pasien dapat kembali pulih dengan cepat dan efek samping yang ditimbulkan minimal. Klinik Bedah Hospicare menyediakan pelayanan kesehatan yang tidak ada di rumah sakit lain, didukung dengan standar yang tinggi dan peralatan yang memadai.",
      image: 'https://www.rspondokindah.co.id/uploads/ngc_global_posts/5e97bc1cca8bb_20200416085956-1-400.jpg'
    },
    {
      name: "Mata",
      content:
        "Klinik Mata hadir memberikan pelayanan spesialisasi kesehatan bagi masyarakat dalam ranah penyakit serta kelainan pada mata. Diagnosa seperti glaucoma, katarak, ablasi retina, dan yang lainnya dapat dilakukan pengecekan secara akurat di klinik RSUI, tentunya didukung oleh tenaga dokter spesialis mata yang berpengalaman.",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJyLngE1b-Fleg84z3LSj1CrnV7fTsFP_eOFhL04eUiJudAFq3y5pj43hIC_ALKWENdpA&usqp=CAU'
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {content.map((el) => {
        return (
          <PoliCard data={el}/>
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
