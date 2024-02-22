import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Button,
  Dimensions,
  StatusBar,
  ScrollView,
  Modal,
} from 'react-native';
import {saveValue} from './storage';

const HomePage = ({navigation}) => {
  const [result, setResult] = useState([]);
  const [oddScroll, setOddScroll] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [secModalVisible, setSecModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const handleInputChange = text => {
    // Update the state with the current input value
    setInputValue(text);
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const TopNovels = [
    {
      name: 'Gifted Academy: The Perfect student',
      img: 'https://allnovelbook.com/server-1/gifted-academy-the-perfect-student.jpg',
      url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student',
    },
    {
      name: 'Classroom Of The Elite',
      img: 'https://allnovelbook.com/server-1/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e.jpg',
      url: 'https://allnovelbook.com/novel/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e',
    },
    {
      name: 'Reincarnation Of The Strongest Sword God',
      img: 'https://allnovelbook.com/server-1/reincarnation-of-the-strongest-sword-god.jpg',
      url: 'https://allnovelbook.com/novel/reincarnation-of-the-strongest-sword-god',
    },
    {
      name: 'God of Fishing',
      img: 'https://allnovelbook.com/server-1/god-of-fishing.jpg',
      url: 'https://allnovelbook.com/novel/god-of-fishing',
    },
    {
      name: 'My Vampire System',
      img: 'https://allnovelbook.com/server-1/my-vampire-system.jpg',
      url: 'https://allnovelbook.com/novel/my-vampire-system',
    },
    {
      name: 'Overgeared',
      img: 'https://allnovelbook.com/server-1/overgeared.jpg',
      url: 'https://allnovelbook.com/novel/overgeared',
    },
    {
      name: 'Global Killing: Awakening SSS-level Talent at the Beginning',
      img: 'https://allnovelbook.com/server-1/global-killing-awakening-sss-level-talent-at-the-beginning.jpg',
      url: 'https://allnovelbook.com/novel/global-killing-awakening-sss-level-talent-at-the-beginning',
    },
    {
      name: 'Shadow Slave',
      img: 'https://allnovelbook.com/server-1/shadow-slave.jpg',
      url: 'https://allnovelbook.com/novel/shadow-slave',
    },
    {
      name: 'Dimensional Descent',
      img: 'https://allnovelbook.com/server-1/dimensional-descent.jpg',
      url: 'https://allnovelbook.com/novel/dimensional-descent',
    },
    {
      name: "Invincible Divine Dragon's Cultivation System",
      img: 'https://allnovelbook.com/server-1/invincible-divine-dragons-cultivation-system.jpg',
      url: 'https://allnovelbook.com/novel/invincible-divine-dragons-cultivation-system',
    },
    {
      name: 'Legend of Swordsman',
      img: 'https://allnovelbook.com/server-1/legend-of-swordsman.jpg',
      url: 'https://allnovelbook.com/novel/legend-of-swordsman',
    },
    {
      name: 'Mesmerizing Ghost Doctor',
      img: 'https://allnovelbook.com/server-1/mesmerizing-ghost-doctor.jpg',
      url: 'https://allnovelbook.com/novel/mesmerizing-ghost-doctor',
    },
    {
      name: 'The Mech Touch',
      img: 'https://allnovelbook.com/server-1/the-mech-touch.jpg',
      url: 'https://allnovelbook.com/novel/the-mech-touch',
    },
    {
      name: 'God-tier Farm',
      img: 'https://allnovelbook.com/server-1/god-tier-farm.jpg',
      url: 'https://allnovelbook.com/server-1/god-tier-farm.jpg',
    },
    {
      name: 'The Abandoned Husband Dominates',
      img: 'https://allnovelbook.com/server-1/the-abandoned-husband-dominates.jpg',
      url: 'https://allnovelbook.com/server-1/the-abandoned-husband-dominates.jpg',
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
  const url =
    'https://allnovelbook.com/novel/gifted-academy-the-perfect-student?chapter-21';
  const name = url.match(/\/novel\/([^\/]+)/)[1];
  const novelName = name.replace(/-/g, '_');
  console.log(name, novelName);

  // const evenIndexNovels = TopNovels.filter((_, index) => index % 2 === 0);
  // const oddIndexNovels = TopNovels.filter((_, index) => index % 2 != 0);
  // const combinedNovels = evenIndexNovels
  //   .map((item, index) => [item, oddIndexNovels[index]])
  //   .flat();

  const handleNovelPress = async novel => {
    console.log('clicked', novel);
    await fetch('http://10.0.2.2:5000/detail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({url: novel}),
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        navigation.navigate('Detail', {data: response, url: novel});
        console.log('fetched succesfull');
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleSearch = () => {
    console.log('search');
    setModalVisible(true);
  };
  const handleSearchNovel = async () => {
    console.log('search Novel');
    await fetch('http://10.0.2.2:5000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({key1: inputValue}),
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        setSecModalVisible(true);
        setResult(response.result);
        console.log('fetched succesfull');
      })
      .catch(err => {
        console.log(err);
      });
  };
  saveValue(`lastReadChapter`, 'dataUrl');
  console.log('done');

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        //   barStyle={'dark-content'}
      />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.novelDetailDiv}>
          <Text style={styles.appHeading}>Home</Text>
          <TouchableOpacity
            style={styles.search}
            onPress={() => handleSearch()}>
            <Image
              source={{
                uri: 'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-find-icon-png-image_854997.jpg',
              }}
              style={{
                height: 30,
                width: 30,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.novelMain}>
          <Text style={styles.novelSort}>Top Novels</Text>
          <ScrollView
            horizontal
            style={styles.scrollHorizontal}
            showsHorizontalScrollIndicator={false}>
            <View style={styles.horizontalCon}>
              {TopNovels.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleNovelPress(item.url)}>
                  <View style={styles.novelCard} touch>
                    <Image source={{uri: item.img}} style={styles.novelPic} />
                    <Text
                      style={styles.novelTitle}
                      numberOfLines={1}
                      ellipsizeMode="tail">
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
          <Modal
            visible={isModalVisible}
            style={styles.modalContainer}
            onRequestClose={() => setModalVisible(false)}
            animationType="fade">
            <View style={styles.modalContent}>
              <TextInput
                placeholder="Search"
                style={styles.searchInput}
                onChangeText={handleInputChange}
                value={inputValue}
                onSubmitEditing={() => handleSearchNovel}
              />
              <TouchableOpacity
                style={{
                  height: 60,
                  width: 30,
                  marginTop: 30,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
                onPress={() => handleSearchNovel()}>
                <Image
                  source={{
                    uri: 'https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-find-icon-png-image_854997.jpg',
                  }}
                  style={{
                    height: 30,
                    width: 30,
                  }}
                />
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
        <Modal
          visible={secModalVisible}
          onRequestClose={() => setSecModalVisible(false)}
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
            <Text style={styles.DetailHeading}>Related Novels</Text>
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
                  height:
                    height > (210 * result.length) / 3
                      ? height
                      : (210 * result.length) / 3,
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
                {result.length != 0 ? (
                  result.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleNovelPress(item.url)}
                      style={{}}>
                      <View style={styles.novelCard2}>
                        <Image
                          source={{uri: item.img}}
                          style={styles.novelPic2}
                        />
                        <Text
                          style={styles.novelTitle2}
                          numberOfLines={1}
                          ellipsizeMode="tail">
                          {item.title}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))
                ) : (
                  <Text style={styles.appHeading}>No Item Found</Text>
                )}
              </View>
            </ScrollView>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 100,
    top: 0, // cause of this I can show content on StatusBar
    zIndex: 11,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#000',
    display: 'flex',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    zIndex: 10,
  },
  scrollHorizontal: {
    Height: 100,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    zIndex: 1,
    flexGrow: 0,
  },
  horizontalCon: {
    height: 500,
    display: 'flex',
    flexWrap: 'wrap',
    zIndex: 0,
  },
  novelDetailDiv: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  appHeading: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '900',
    margin: 20,
    textAlign: 'center',
  },
  search: {
    height: 30,
    width: 30,
    position: 'absolute',
    right: 0,
    marginTop: 26,
    marginRight: 30,
  },
  searchInput: {
    height: 40,
    width: 320,
    borderColor: '#fff',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    marginTop: 30,
    padding: 10,
  },
  novelMain: {
    backgroundColor: '#111',
    Height: 140,
    width: Dimensions.get('window').width,
    borderRadius: 40,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingBottom: 0,
    // marginBottom: 50,
    paddingHorizontal: 5,
  },
  novelCard: {
    overflow: 'hidden',
    // backgroundColor: '#444',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    Height: 100,
    width: 120,
    display: 'flex',
    margin: 10,
    zIndex: 5,
  },
  novelPic: {
    width: '100%',
    height: 170,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  novelTitle: {
    color: '#61dafb',
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 10,
    textTransform: 'capitalize',
    overflow: 'hidden',
  },
  colBar: {
    height: 80,
    width: '100%',
    backgroundColor: '#222',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10,
    // borderWidth: 1,
    // borderColor: '#aaa',
    // borderStyle: 'solid',
  },
  col: {
    height: '100%',
    width: '30%',
    // margin: 5,
    borderStyle: 'solid',
    borderColor: '#ddd',
    // borderWidth: 1,
  },
  cat: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 9,
  },
  catHeading: {
    fontSize: 14,
    color: '#aff',
    fontWeight: '700',
    fontFamily: 'serif',
    textAlign: 'center',
  },
  DetailHeading: {
    color: '#61dafb',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    textTransform: 'capitalize',
    overflow: 'hidden',
    textAlign: 'center',
  },
  author: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    overflow: 'hidden',
  },
  novelSort: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
    textTransform: 'capitalize',
    width: '100%',
    textAlign: 'center',
  },
  chapters: {
    backgroundColor: 'black',
    color: 'white',
    minHeight: '80vh',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  novelSynopsis: {
    color: '#fff',
  },
  novelChapters: {
    marginTop: 20,
  },
  chapterHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  chapterSelection: {
    flexDirection: 'column',
  },
  label: {
    color: '#fff',
    marginBottom: 5,
  },
  chpNo: {
    width: 100,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#111',
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#61dafb',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#000',
    color: '#fff',
    marginBottom: 30,
    position: 'absolute',
  },
  modalContent: {
    flex: 1,
    minHeight: Dimensions.get('window').height,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 100,
    width: Dimensions.get('window').width,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: '#fff',
    flexDirection: 'row',
  },
  p: {
    margin: 10,
    position: 'relative',
    top: 10,
    color: 'white',
  },
  modalContainer2: {
    flex: 1,
    minHeight: Dimensions.get('window').height,
    paddingTop: 10,
    paddingHorizontal: 10,
    width: Dimensions.get('window').width,
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    color: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  scrollViewContainer2: {
    // minHeight: 500,
    flex: 1,
    width: Dimensions.get('window').width,
    display: 'flex',
    flexWrap: 'wrap',
  },
  novelSort2: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#000',
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

export default HomePage;
