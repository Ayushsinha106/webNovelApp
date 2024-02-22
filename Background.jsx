import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, {Component} from 'react';

const Background = ({navigation, route}) => {
  const details = route.params.data;
  const Author = details.Detail.author;
  const imgUrl = details.Detail.imgUrl;
  const status = details.Detail.status;
  const title = details.Detail.title;
  const chapters = details.chapters.chap;
  const TotalChapters = details.Detail.TotalChapters;
  const numbersArray = TotalChapters.match(/\d+/);

  const TotalChNo = parseInt(numbersArray[0], 10);
  return (
    <View style={styles.modalContent}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <View
        style={{
          height: 30,
          width: '100%',
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}></View>
      <Image
        source={{uri: imgUrl}}
        style={{
          height: 260,
          width: 180,
        }}
      />
      <Text style={styles.DetailHeading}>{title}</Text>
      <Text style={styles.author}>Author: {Author}</Text>
      <View style={styles.colBar}>
        <View style={styles.col}>
          <Text style={styles.catHeading}>chapters</Text>
          <Text style={styles.cat}>{TotalChNo}</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.catHeading}>Status</Text>
          <Text style={styles.cat}>{status}</Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.catHeading}>Star</Text>
          <Text style={styles.cat}>4.3</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0, // cause of this I can show content on StatusBar
    zIndex: 11,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#111',
    display: 'flex',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    zIndex: 10,
  },
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
    Height: 400,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 100,
    width: Dimensions.get('window').width,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#fff',
  },
});

export default Background;
