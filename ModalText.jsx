import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Modal,
  ScrollView,
} from 'react-native';
import React from 'react';

export default function ModalText() {
  const TopNovels = [
    {
      name: 'Gifted Academy: The Perfect student',
      img: 'https://allnovelbook.com/server-1/gifted-academy-the-perfect-student.jpg',
    },
    {
      name: '86',
      img: 'https://allnovelbook.com/server-1/86.jpg',
    },
    {
      name: 'Reincarnation Of The Strongest Sword God',
      img: 'https://allnovelbook.com/server-1/reincarnation-of-the-strongest-sword-god.jpg',
    },
    {
      name: 'God of Fishing',
      img: 'https://allnovelbook.com/server-1/god-of-fishing.jpg',
    },
    {
      name: 'My Vampire System',
      img: 'https://allnovelbook.com/server-1/my-vampire-system.jpg',
    },
    {
      name: 'Overgeared',
      img: 'https://allnovelbook.com/server-1/overgeared.jpg',
    },
    {
      name: 'Global Killing: Awakening SSS-level Talent at the Beginning',
      img: 'https://allnovelbook.com/server-1/global-killing-awakening-sss-level-talent-at-the-beginning.jpg',
    },
    {
      name: 'Shadow Slave',
      img: 'https://allnovelbook.com/server-1/shadow-slave.jpg',
    },
    {
      name: 'Dimensional Descent',
      img: 'https://allnovelbook.com/server-1/dimensional-descent.jpg',
    },
    {
      name: "Invincible Divine Dragon's Cultivation System",
      img: 'https://allnovelbook.com/server-1/invincible-divine-dragons-cultivation-system.jpg',
    },
    {
      name: 'Legend of Swordsman',
      img: 'https://allnovelbook.com/server-1/legend-of-swordsman.jpg',
    },
    {
      name: 'Mesmerizing Ghost Doctor',
      img: 'https://allnovelbook.com/server-1/mesmerizing-ghost-doctor.jpg',
    },
    {
      name: 'The Mech Touch',
      img: 'https://allnovelbook.com/server-1/the-mech-touch.jpg',
    },
    {
      name: 'God-tier Farm',
      img: 'https://allnovelbook.com/server-1/god-tier-farm.jpg',
    },
    {
      name: 'The Abandoned Husband Dominates',
      img: 'https://allnovelbook.com/server-1/the-abandoned-husband-dominates.jpg',
    },
    {
      name: 'Martial God Asura',
      img: 'https://allnovelbook.com/server-1/martial-god-asura.jpg',
    },
    {
      name: 'Reincarnation Of The Strongest Spirit Master',
      img: 'https://allnovelbook.com/server-1/reincarnation-of-the-strongest-spirit-master.jpg',
    },
    {
      name: 'Journey To Become A True God',
      img: 'https://allnovelbook.com/server-1/journey-to-become-a-true-god.jpg',
    },
    {
      name: 'Supreme Magus',
      img: 'https://allnovelbook.com/server-1/supreme-magus.jpg',
    },
    {
      name: 'Fey Evolution Merchant',
      img: 'https://allnovelbook.com/server-1/fey-evolution-merchant.jpg',
    },
  ];
  const handleNovelPress = novel => {
    console.log('clicked', novel);
  };
  console.log('restart');
  return (
    <Modal
      visible={true}
      animationType="fade"
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#fff',
      }}>
      <View
        style={{
          backgroundColor: '#000',
        }}>
        <Text style={styles.DetailHeading}>Related Novels Acc to Search</Text>
        <ScrollView
          style={{
            minHeight: Dimensions.get('window').height,
            width: Dimensions.get('window').width,
            backgroundColor: '#fff',
            // flex: 1,
            display: 'flex',
          }}>
          <View
            style={{
              //   height: Dimensions.get('window').height + 500,
              height: (230 * TopNovels.length) / 3,
              width: Dimensions.get('window').width,
              backgroundColor: '#000',
              display: 'flex',
              paddingBottom: 50,
              marginBottom: 100,
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 50,
            }}>
            {TopNovels.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleNovelPress(item.name)}
                style={{}}>
                <View style={styles.novelCard2}>
                  <Image source={{uri: item.img}} style={styles.novelPic2} />
                  <Text
                    style={styles.novelTitle2}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  DetailHeading: {
    color: '#61dafb',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    textTransform: 'capitalize',
  },
  novelCard2: {
    margin: 10,
    alignItems: 'center',
    flexGrow: 0,
    display: 'flex',
  },
  novelPic2: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  novelTitle2: {
    color: '#fff',
    textAlign: 'center',
    width: 100,
  },
  appHeading2: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});
