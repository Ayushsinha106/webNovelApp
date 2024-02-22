import React, {Component, useState} from 'react';
import {
  Animated,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const IMAGE_HEIGHT = 500;
const HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 50;
const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT;
const THEME_COLOR = '#111';
const FADED_THEME_COLOR = '#222';

export class ParallaxDemo extends Component {
  nScroll = new Animated.Value(0);
  scroll = new Animated.Value(0);
  textColor = this.scroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT / 5, SCROLL_HEIGHT],
    outputRange: [THEME_COLOR, FADED_THEME_COLOR, 'white'],
    extrapolate: 'clamp',
  });
  tabBg = this.scroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT],
    outputRange: ['white', THEME_COLOR],
    extrapolate: 'clamp',
  });
  tabY = this.nScroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
    outputRange: [0, 0, 1],
  });
  headerBg = this.scroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
    outputRange: ['transparent', 'transparent', THEME_COLOR],
    extrapolate: 'clamp',
  });
  imgScale = this.nScroll.interpolate({
    inputRange: [-25, 1],
    outputRange: [2.5, 1],
    extrapolateRight: 'clamp',
  });
  imgOpacity = this.nScroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT],
    outputRange: [1, 0],
  });
  tabContent = (x, i) => <View style={{height: this.state.height}}></View>;
  heights = [500, 500];
  state = {
    activeTab: 0,
    height: 500,
  };

  constructor(props) {
    super(props);
    this.nScroll.addListener(
      Animated.event([{value: this.scroll}], {useNativeDriver: false}),
    );
  }

  render() {
    return (
      <View>
        <Animated.View
          style={{
            position: 'absolute',
            width: '100%',
            backgroundColor: '#111',
            zIndex: 1,
          }}></Animated.View>
        <Animated.ScrollView
          scrollEventThrottle={5}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.nScroll}}}],
            {useNativeDriver: true},
          )}
          style={{zIndex: 0, backgroundColor: '#111'}}>
          <Animated.View
            style={{
              transform: [
                {translateY: Animated.multiply(this.nScroll, 0.95)},
                {scale: this.imgScale},
              ],
              backgroundColor: THEME_COLOR,
            }}>
            {/* <Animated.Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Moraine_Lake_17092005.jpg',
              }}
              style={{
                height: IMAGE_HEIGHT,
                width: '100%',
                opacity: this.imgOpacity,
              }}>
            </Animated.Image> */}
            <View style={styles.modalContent}>
              {/* <View
                style={{
                  height: IMAGE_HEIGHT + 50,
                  width: '100%',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  position: 'absolute',
                  zIndex: 111,
                  backfaceVisibility: 'visible',
                }}></View> */}
              <StatusBar backgroundColor={'transparent'} translucent={true} />
              <View
                style={{
                  height: 50,
                  width: '100%',
                  backgroundColor: '#111',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '900',
                    fontFamily: 'monospace',
                  }}>
                  Novel Detail
                </Text>
              </View>
              <Image
                source={require('./giftedAcademy.jpg')}
                style={{
                  height: 260,
                  width: 180,
                }}
              />
              <Text style={styles.DetailHeading}>
                Gifted Academy: The Perfect Student
              </Text>
              <Text style={styles.author}>Author: EvanMu</Text>
              <View style={styles.colBar}>
                <View style={styles.col}>
                  <Text style={styles.catHeading}>chapters</Text>
                  <Text style={styles.cat}>176</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.catHeading}>Status</Text>
                  <Text style={styles.cat}>Ongoing</Text>
                </View>
                <View style={styles.col}>
                  <Text style={styles.catHeading}>Star</Text>
                  <Text style={styles.cat}>4.6</Text>
                </View>
              </View>
            </View>
          </Animated.View>
          <Animated.View
            style={{
              flex: 1,
              height: 900,
              backgroundColor: '#000',
              borderRadius: 40,
            }}>
            <View
              style={{
                minHeight: Dimensions.get('window').height + 100,
                width: Dimensions.get('window').width,
                backgroundColor: '#000',
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                padding: 20,
                marginTop: 250,
                display: 'flex',
                alignItems: 'center',
              }}>
              <FlatList
                data={NovelDetail.Genres}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                style={{
                  flexGrow: 0,
                  marginBottom: 20,
                }}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={e => {
                      console.log(item);
                    }}
                    style={{
                      height: 40,
                    }}>
                    <View style={styles.GenresContainer}>
                      <Text style={styles.genres}>{'#' + item}</Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
              <View
                style={{
                  minHeight: 250,
                  width: '100%',
                }}>
                <Text style={styles.summary}> summary</Text>
                {NovelDetail.summary.map((para, index) => (
                  <Text key={index} style={styles.para}>
                    {para}
                  </Text>
                ))}
                <Text style={styles.chapter}>chapters</Text>
                <Text style={styles.chName}>
                  {NovelDetail.chapters[0].title}
                </Text>
                <Text style={styles.chName}>
                  {NovelDetail.chapters[1].title}
                </Text>
                <Text style={styles.chName}>
                  {NovelDetail.chapters[2].title}
                </Text>
                <Text style={styles.chName}>
                  {NovelDetail.chapters[3].title}
                </Text>
                <Text style={styles.chName}>
                  {NovelDetail.chapters[4].title}
                </Text>
                <Text style={styles.chName}>
                  {NovelDetail.chapters[5].title}
                </Text>
                <Button title="More" onPress={() => handleMoreChapters()} />
              </View>
              <Modal
                visible={modalShow}
                animationType="slide"
                onRequestClose={toggleModal}>
                <View
                  style={{
                    flex: 1,
                    height: 50,
                    width: '100%',
                    backgroundColor: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ScrollView style={styles.scrollContainer}>
                    <View
                      style={{
                        height: 50,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                      }}>
                      <TouchableOpacity
                        style={{
                          height: 20,
                          width: 30,
                          margin: 15,
                          position: 'absolute',
                          left: 0,
                        }}
                        onPress={() => setModalShow(false)}>
                        <Image
                          source={require('./Back_arrow.png')}
                          style={{
                            height: 20,
                            width: 30,
                            // margin: 15,
                            position: 'absolute',
                            left: 0,
                          }}
                        />
                      </TouchableOpacity>
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#fff',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          margin: 10,
                        }}>
                        chapters
                      </Text>
                    </View>
                    {NovelDetail.chapters.map((item, index) => (
                      <TouchableOpacity
                        onPress={e => {
                          console.log(item.url);
                        }}
                        key={index}>
                        <Text style={styles.chName}>{item.title}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </Modal>
            </View>
          </Animated.View>
        </Animated.ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  colBar: {
    height: 80,
    width: '100%',
    backgroundColor: '#111',
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
  },
  author: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    overflow: 'hidden',
  },
  modalContent: {
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 100,
    width: Dimensions.get('window').width,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#fff',
    height: IMAGE_HEIGHT,
    width: '100%',
    // opacity: this.imgOpacity,
    marginTop: 10,
  },
  GenresContainer: {
    height: 40,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'solid',
    borderRadius: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  genres: {
    fontSize: 17,
    margin: 5,
    fontWeight: '500',
  },
  summary: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    overflow: 'hidden',
    margin: 10,
  },
  chapter: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    overflow: 'hidden',
    margin: 20,
  },
  chName: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    overflow: 'hidden',
    margin: 10,
    borderBottomWidth: 1,
    borderColor: '#fff',
    paddingVertical: 5,
  },
  para: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '400',
    textTransform: 'capitalize',
    overflow: 'hidden',
  },
});
