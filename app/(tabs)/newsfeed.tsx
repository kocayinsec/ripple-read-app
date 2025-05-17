import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function NewsFeedScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Haber Akışı</ThemedText>
      {/* Buraya daha sonra haber listesi gelecek */}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mockNewsData = [
  { id: '1', title: 'React Native Harika Bir Gelişme Kaydetti!', summary: 'Yeni versiyon birçok yenilikle geldi.' },
  { id: '2', title: 'Expo Router ile Navigasyon Çok Kolay', summary: 'Dosya tabanlı yönlendirme geliştiricilere hız katıyor.' },
  { id: '3', title: 'JavaScript Dünyasında Neler Oluyor?', summary: 'En son trendler ve kütüphaneler hakkında bilgiler.' },
  { id: '4', title: 'Mobil Uygulama Geliştirme İpuçları', summary: 'Performans ve kullanıcı deneyimi odaklı.' },
];