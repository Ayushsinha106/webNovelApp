import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Button,
  Modal,
  StatusBar,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {retrieveValue} from './storage';

export default function Foreground({navigation, route, NovelDetail}) {
  // const NovelDetail = {
  //   title: 'Gifted Academy: The Perfect Student',
  //   Genres: [
  //     'Psychology',
  //     'Realist Fiction',
  //     'Romance',
  //     'Mystery',
  //     'Slice of Life',
  //   ],
  //   status: 'Ongoing',
  //   author: 'EvanMu',
  //   star: 4.6,
  //   imgUrl:
  //     'https://allnovelbook.com/server-1/gifted-academy-the-perfect-student.jpg',
  //   summary: [
  //     "Coming out of the Ideal Human Project, Mizuhara Ayato was referred to as the 'perfect human'. However, life was not so simple for this unfortunate boy. Stuck between other genius students and a meritocratic high school, Mizuhara would find himself unable to live a calm life.",
  //     'Who really is Mizuhara Ayato?',
  //     'Apathetic, listless and uncaring, will anyone ever make Mizuhara feel something? Even in the harsh conditions of the Tachibana System, he shows no signs of struggle.',
  //     'Is he the ultimate proof that nurture is stronger than nature?',
  //     '***',
  //     "Sara Fujiharu, the cutest girl in the school, is also known as the 'Seatmate Bully'. Every few weeks, the class seating changes and every time, Fujiharu-san gets a new target. What's her goal? To make the boy sitting next to her fall in love, and once she does, she destroys their heart, crushing their love.",
  //     "Why does she do this? I still don't know.",
  //     "It's March 23rd, the day of the seating change. So far, ten boys have fallen for her traps, her playful attitude, and her innocent face. Not a single boy so far has managed to brush off her attacks-and every single time; their weak hearts have been crushed.",
  //     "Now it's my turn.",
  //     'However, my heart is not so easily played with.',
  //   ],
  //   chapters: [
  //     {
  //       title: 'Chapter 1 Prologue',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-1',
  //     },
  //     {
  //       title: 'Chapter 2 New Semester New Seats - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-2',
  //     },
  //     {
  //       title: 'Chapter 3 New Semester New Seats - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-3',
  //     },
  //     {
  //       title: 'Chapter 4 New Semester New Seats - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-4',
  //     },
  //     {
  //       title: 'Chapter 5 New Semester New Seats - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-5',
  //     },
  //     {
  //       title: 'Chapter 6 Fish, Prawns And A Squid - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-6',
  //     },
  //     {
  //       title: 'Chapter 7 Fish, Prawns And A Squid - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-7',
  //     },
  //     {
  //       title: 'Chapter 8 Fish, Prawns And A Squid - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-8',
  //     },
  //     {
  //       title: 'Chapter 9 Superficial Cafe Date - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-9',
  //     },
  //     {
  //       title: 'Chapter 10 Superficial Cafe Date - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-10',
  //     },
  //     {
  //       title: 'Chapter 11 Superficial Cafe Date - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-11',
  //     },
  //     {
  //       title: 'Chapter 12 Cauliflower Soup Is Awkward - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-12',
  //     },
  //     {
  //       title: 'Chapter 13 Cauliflower Soup Is Awkward - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-13',
  //     },
  //     {
  //       title: 'Chapter 14 Acting As The Ideal Tutor - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-14',
  //     },
  //     {
  //       title: 'Chapter 15 Acting As The Ideal Tutor - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-15',
  //     },
  //     {
  //       title: 'Chapter 16 Acting As The Ideal Tutor - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-16',
  //     },
  //     {
  //       title: 'Chapter 17 Acting As The Ideal Tutor - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-17',
  //     },
  //     {
  //       title: 'Chapter 18 Ideal Human To Prodigy - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-18',
  //     },
  //     {
  //       title: 'Chapter 19 Ideal Human To Prodigy - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-19',
  //     },
  //     {
  //       title: 'Chapter 20 Ideal Human To Prodigy - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-20',
  //     },
  //     {
  //       title: 'Chapter 21 Swimming Pool And Tension - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-21',
  //     },
  //     {
  //       title: 'Chapter 22 Swimming Pool And Tension - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-22',
  //     },
  //     {
  //       title: 'Chapter 23 Swimming Pool And Tension - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-23',
  //     },
  //     {
  //       title: 'Chapter 24 Giving What I Once Got - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-24',
  //     },
  //     {
  //       title: 'Chapter 25 Giving What I Once Got - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-25',
  //     },
  //     {
  //       title: 'Chapter 26 Announcement',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-26',
  //     },
  //     {
  //       title: 'Chapter 27 Giving What I Once Got - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-27',
  //     },
  //     {
  //       title: 'Chapter 28 Perfect Girl And Chess Prodigy - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-28',
  //     },
  //     {
  //       title: 'Chapter 29 Perfect Girl And Chess Prodigy - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-29',
  //     },
  //     {
  //       title: 'Chapter 30 Fujiharu’s Offensive - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-30',
  //     },
  //     {
  //       title: 'Chapter 31 Fujiharu’s Offensive - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-31',
  //     },
  //     {
  //       title: 'Chapter 32 CONTRACTED [Pending]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-32',
  //     },
  //     {
  //       title: 'Chapter 33 Fujiharu’s Offensive - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-33',
  //     },
  //     {
  //       title: 'Chapter 34 Fujiharu’s Offensive - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-34',
  //     },
  //     {
  //       title: 'Chapter 35 Fujiharu’s Offensive - Part 5',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-35',
  //     },
  //     {
  //       title: 'Chapter 36 Volume 1 Afterword',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-36',
  //     },
  //     {
  //       title: 'Chapter 37 Short Story: This Wasn’t Meant To Happen',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-37',
  //     },
  //     {
  //       title: 'Chapter 38 Short Story: I Really Do Hate You',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-38',
  //     },
  //     {
  //       title: 'Chapter 39 Short Story: Someone Who Is Kind To Me',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-39',
  //     },
  //     {
  //       title: 'Chapter 40 Interlude - Glossary (Spoilers Up To 35)',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-40',
  //     },
  //     {
  //       title: 'Chapter 41 Sickness Is In The Air - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-41',
  //     },
  //     {
  //       title: 'Chapter 42 Sickness Is In The Air - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-42',
  //     },
  //     {
  //       title: 'Chapter 43 The Ideal Human Project - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-43',
  //     },
  //     {
  //       title: 'Chapter 44 Bright Sun, Soft Sand, Cold Water - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-44',
  //     },
  //     {
  //       title: 'Chapter 45 Bright Sun, Soft Sand, Cold Water - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-45',
  //     },
  //     {
  //       title: 'Chapter 46 Bright Sun, Soft Sand, Cold Water - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-46',
  //     },
  //     {
  //       title: 'Chapter 47 Kanako’s Desires - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-47',
  //     },
  //     {
  //       title: 'Chapter 48 Kanako’s Desires - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-48',
  //     },
  //     {
  //       title: 'Chapter 49 Kanako’s Desires - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-49',
  //     },
  //     {
  //       title: 'Chapter 50 Kanako’s Desires - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-50',
  //     },
  //     {
  //       title: 'Chapter 51 Kanako’s Desires - Part 5',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-51',
  //     },
  //     {
  //       title: 'Chapter 52 Volume 1.5 Interlude + Afterword',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-52',
  //     },
  //     {
  //       title: 'Chapter 53 Short Story: Afford And Fujiharu',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-53',
  //     },
  //     {
  //       title: 'Chapter 54 New School New Life - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-54',
  //     },
  //     {
  //       title: 'Chapter 55 New School New Life - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-55',
  //     },
  //     {
  //       title: 'Chapter 56 New School New Life - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-56',
  //     },
  //     {
  //       title: 'Chapter 57 New School New Life - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-57',
  //     },
  //     {
  //       title: 'Chapter 58 The Ideal Human Project - Part 2 [Kurosawa Sora]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-58',
  //     },
  //     {
  //       title: 'Chapter 59 Utopia-Like Dystopia - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-59',
  //     },
  //     {
  //       title: 'Chapter 60 Utopia-Like Dystopia - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-60',
  //     },
  //     {
  //       title: 'Chapter 61 Utopia-Like Dystopia - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-61',
  //     },
  //     {
  //       title: 'Chapter 62 The First Special Exam - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-62',
  //     },
  //     {
  //       title: 'Chapter 63 The First Special Exam - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-63',
  //     },
  //     {
  //       title: 'Chapter 64 The First Special Exam - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-64',
  //     },
  //     {
  //       title: 'Chapter 65 The First Special Exam - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-65',
  //     },
  //     {
  //       title: 'Chapter 66 The First Special Exam - Part 5',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-66',
  //     },
  //     {
  //       title: 'Chapter 67 The First Special Exam - Part 6',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-67',
  //     },
  //     {
  //       title: 'Chapter 68 Movements In The Background - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-68',
  //     },
  //     {
  //       title: 'Chapter 69 One Day, So Many Days Ago',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-69',
  //     },
  //     {
  //       title: 'Chapter 70 Movements In The Background - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-70',
  //     },
  //     {
  //       title: 'Chapter 71 Movements In The Background - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-71',
  //     },
  //     {
  //       title: 'Chapter 72 Movements In The Background - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-72',
  //     },
  //     {
  //       title: 'Chapter 73 Fear, Tension And Apathy - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-73',
  //     },
  //     {
  //       title: 'Chapter 74 Fear Tension And Apathy - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-74',
  //     },
  //     {
  //       title: 'Chapter 75 Fear, Tension And Apathy - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-75',
  //     },
  //     {
  //       title: 'Chapter 76 Language Of The Genius - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-76',
  //     },
  //     {
  //       title: 'Chapter 77 Language Of The Genius - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-77',
  //     },
  //     {
  //       title: 'Chapter 78 Language Of The Genius - Part 3 [Fujiharu Sara]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-78',
  //     },
  //     {
  //       title: 'Chapter 79 Language Of The Genius - Part 4 [Kanako Hanae]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-79',
  //     },
  //     {
  //       title: 'Chapter 80 Language Of The Genius - Part 5 [Kanako Hanae]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-80',
  //     },
  //     {
  //       title: 'Chapter 81 Chess Tournament Special Exam - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-81',
  //     },
  //     {
  //       title: 'Chapter 82 Chess Tournament Special Exam - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-82',
  //     },
  //     {
  //       title:
  //         'Chapter 83 Chess Tournament Special Exam - Part 1 [Kanako Hanae]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-83',
  //     },
  //     {
  //       title:
  //         'Chapter 84 Chess Tournament Special Exam - Part 2 [Kanako Hanae]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-84',
  //     },
  //     {
  //       title: 'Chapter 85 Chess Tournament Finals - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-85',
  //     },
  //     {
  //       title: 'Chapter 86 Chess Tournament Finals - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-86',
  //     },
  //     {
  //       title: 'Chapter 87 Chess Tournament Finals - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-87',
  //     },
  //     {
  //       title: 'Chapter 88 Chess Tournament Finals - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-88',
  //     },
  //     {
  //       title: 'Chapter 89 Kurosawa Hayao’s Address To The Board',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-89',
  //     },
  //     {
  //       title: 'Chapter 90 Volume 2 Afterword',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-90',
  //     },
  //     {
  //       title: 'Chapter 91 Relaxation Is A Privilege - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-91',
  //     },
  //     {
  //       title: 'Chapter 92 Relaxation Is A Privilege - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-92',
  //     },
  //     {
  //       title: 'Chapter 93 Relaxation Is A Privilege - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-93',
  //     },
  //     {
  //       title:
  //         'Chapter 94 Relaxation Is A Privilege - Part 4 [Mizuhara Sayaka]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-94',
  //     },
  //     {
  //       title: 'Chapter 95 Exploitative Arcade - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-95',
  //     },
  //     {
  //       title: 'Chapter 96 Exploitative Arcade - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-96',
  //     },
  //     {
  //       title: 'Chapter 97 Exploitative Arcade - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-97',
  //     },
  //     {
  //       title: 'Chapter 98 Exploitative Arcade - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-98',
  //     },
  //     {
  //       title: 'Chapter 99 Class Marathon Event - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-99',
  //     },
  //     {
  //       title: 'Chapter 100 Class Marathon Event - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-100',
  //     },
  //     {
  //       title: 'Chapter 101 Class Marathon Event - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-101',
  //     },
  //     {
  //       title: 'Chapter 102 Class Marathon Event - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-102',
  //     },
  //     {
  //       title: 'Chapter 103 The Ideal Human Project - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-103',
  //     },
  //     {
  //       title: 'Chapter 104 School Cross-Country - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-104',
  //     },
  //     {
  //       title: 'Chapter 105 School Cross-Country - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-105',
  //     },
  //     {
  //       title: 'Chapter 106 School Cross-Country - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-106',
  //     },
  //     {
  //       title: 'Chapter 107 The Ideal Human Project - Part 4 [Kanako Eikichi]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-107',
  //     },
  //     {
  //       title: 'Chapter 108 Someone’s In The Shadows - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-108',
  //     },
  //     {
  //       title: 'Chapter 109 Someone’s In The Shadows - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-109',
  //     },
  //     {
  //       title: 'Chapter 110 The Ideal Human Project - Part 5',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-110',
  //     },
  //     {
  //       title: 'Chapter 111 Someone’s In The Shadows - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-111',
  //     },
  //     {
  //       title: 'Chapter 112 New Ideals, New Thoughts - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-112',
  //     },
  //     {
  //       title: 'Chapter 113 New Ideals, New Thoughts - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-113',
  //     },
  //     {
  //       title: 'Chapter 114 New Ideals, New Thoughts - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-114',
  //     },
  //     {
  //       title: 'Chapter 115 New Ideals, New Thoughts - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-115',
  //     },
  //     {
  //       title: 'Chapter 116 New Ideals, New Thoughts - Part 5',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-116',
  //     },
  //     {
  //       title: 'Chapter 117 Midterm Exams - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-117',
  //     },
  //     {
  //       title: 'Chapter 118 Midterm Exams - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-118',
  //     },
  //     {
  //       title: 'Chapter 119 Midterm Exams - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-119',
  //     },
  //     {
  //       title: 'Chapter 120 Midterm Exams - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-120',
  //     },
  //     {
  //       title: 'Chapter 121 Midterm Exams - Part 5',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-121',
  //     },
  //     {
  //       title: 'Chapter 122 Midterm Exams - Part 6',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-122',
  //     },
  //     {
  //       title: 'Chapter 123 Midterm Exams - Part 7',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-123',
  //     },
  //     {
  //       title: 'Chapter 124 Academic Struggles - Part 1 [Kanako Hanae]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-124',
  //     },
  //     {
  //       title: 'Chapter 125 Academic Struggles - Part 2 [Kanako Hanae]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-125',
  //     },
  //     {
  //       title: 'Chapter 126 Academic Struggles - Part 3 [Kanako Hanae]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-126',
  //     },
  //     {
  //       title: 'Chapter 127 Academic Struggles - Part 4 [Kanako Hanae]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-127',
  //     },
  //     {
  //       title: 'Chapter 128 Academic Struggles - Part 5 [Kanako Hanae]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-128',
  //     },
  //     {
  //       title: 'Chapter 129 Academic Struggles - Part 6 [Kanako Hanae]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-129',
  //     },
  //     {
  //       title: 'Chapter 130 Superiority Complex - Part 1 [Hasegawa Mio]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-130',
  //     },
  //     {
  //       title: 'Chapter 131 Superiority Complex - Part 2 [Hasegawa Mio]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-131',
  //     },
  //     {
  //       title: 'Chapter 132 Mundane Dreams - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-132',
  //     },
  //     {
  //       title: 'Chapter 133 Mundane Dreams - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-133',
  //     },
  //     {
  //       title: 'Chapter 134 Mundane Dreams - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-134',
  //     },
  //     {
  //       title: 'Chapter 135 Mundane Dreams - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-135',
  //     },
  //     {
  //       title: 'Chapter 136 Sanctity Of Peace - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-136',
  //     },
  //     {
  //       title: 'Chapter 137 Sanctity Of Peace - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-137',
  //     },
  //     {
  //       title: 'Chapter 138 Sanctity Of Peace - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-138',
  //     },
  //     {
  //       title: 'Chapter 139 Sanctity Of Peace - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-139',
  //     },
  //     {
  //       title: 'Chapter 140 Sanctity of Peace - Part 5',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-140',
  //     },
  //     {
  //       title: 'Chapter 141 The Prying Student Council - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-141',
  //     },
  //     {
  //       title: 'Chapter 142 The Prying Student Council - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-142',
  //     },
  //     {
  //       title: 'Chapter 143  The Prying Student Council - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-143',
  //     },
  //     {
  //       title: 'Chapter 144  Hidden Identity - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-144',
  //     },
  //     {
  //       title: 'Chapter 145  Hidden Identity - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-145',
  //     },
  //     {
  //       title: 'Chapter 146 Volume 3 Afterword',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-146',
  //     },
  //     {
  //       title: 'Chapter 147 Lottery Special Exam - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-147',
  //     },
  //     {
  //       title: 'Chapter 148 Lottery Special Exam - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-148',
  //     },
  //     {
  //       title: 'Chapter 149 Lottery Special Exam - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-149',
  //     },
  //     {
  //       title: 'Chapter 150 Lottery Special Exam - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-150',
  //     },
  //     {
  //       title: 'Chapter 151 Lottery Special Exam - Part 5',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-151',
  //     },
  //     {
  //       title: 'Chapter 152 A Cold, Heartless Meeting - Part 0 [Hasegawa Mio]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-152',
  //     },
  //     {
  //       title: 'Chapter 153 Internal Shift - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-153',
  //     },
  //     {
  //       title: 'Chapter 154 Internal Shift - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-154',
  //     },
  //     {
  //       title: 'Chapter 155 Internal Shift - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-155',
  //     },
  //     {
  //       title: "Chapter 156 Fujiharu's Secret - Part 1",
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-156',
  //     },
  //     {
  //       title: 'Chapter 157 Fujiharu’s Secret - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-157',
  //     },
  //     {
  //       title: 'Chapter 158 The Little Bell - Part 1 [Hasegawa Mio]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-158',
  //     },
  //     {
  //       title: 'Chapter 159 The Little Bell - Part 2 [Hasegawa Mio]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-159',
  //     },
  //     {
  //       title: 'Chapter 160 Meritocracy - Part 1',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-160',
  //     },
  //     {
  //       title: 'Chapter 161 Meritocracy - Part 2',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-161',
  //     },
  //     {
  //       title: 'Chapter 162 Meritocracy - Part 3',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-162',
  //     },
  //     {
  //       title: 'Chapter 163 Meritocracy - Part 4',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-163',
  //     },
  //     {
  //       title: 'Chapter 164 Standoff - Part 1 [Mizuhara Sayaka]',
  //       url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-164',
  //     },
  //   ],
  // };
  const details = route.params.data;
  const urlPage = route.params.url;
  const Genres = details.Detail.Genres;
  const summary = details.Detail.summary;
  const chapters = details.chapters.chap;
  const pagination = details.pagination;
  const [modalShow, setModalShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [chapterName, setChapterName] = useState(details.chapters.chap);

  // useEffect(() => {
  //   console.log(currentPage);
  // }, [currentPage]);

  const handleMoreChapters = () => {
    const name = urlPage.match(/\/novel\/([^\/]+)/)[1];
    const novelName = name.replace(/-/g, '_');
    const param = `${novelName}lastReadChapter`;
    console.log('clicked');
    StatusBar.setBackgroundColor('#000');
    retrieveValue(param);
  };

  const handleChapterPress = async (ch, chNo) => {
    console.log('clicked chapter no.', ch);
    await fetch('http://10.0.2.2:5000/chRead', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({url: ch}),
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log('fetched succesfull');
        navigation.navigate('chapter', {data: response, url: ch});
      })
      .catch(err => {
        console.log(err);
      });
  };
  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  const data = Array.from(
    {length: parseInt(pagination)},
    (_, index) => index + 1,
  );
  const onPageChange = async item => {
    newPage = urlPage + `?page=${item}`;
    console.log(item, newPage);
    await fetch('http://10.0.2.2:5000/chPage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({url: newPage}),
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log('fetched succesfull', response);
        setChapterName(response.chapters.chapters);
        setCurrentPage(item);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[styles.pageItem, item === currentPage && styles.activePage]}
      onPress={() => onPageChange(item)}>
      <Text style={styles.pageLink}>{item}</Text>
    </TouchableOpacity>
  );

  return (
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
        data={Genres}
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
          minHeight: 350,
          width: '100%',
          marginBottom: 50,
          paddingBottom: 50,
        }}>
        <Text style={styles.summary}> summary </Text>
        {summary.map((para, index) => (
          <Text key={index} style={styles.para}>
            {para}
          </Text>
        ))}
        <Text style={styles.chapter}>chapters</Text>
        <View style={styles.paginationContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        {/* <TouchableOpacity
          onPress={() => handleChapterPress(chapters[0].url, 1)}>
          <Text style={styles.chName}>{chapters[0].chapter}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChapterPress(chapters[1].url)}>
          <Text style={styles.chName}>{chapters[1].chapter}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChapterPress(chapters[2].url)}>
          <Text style={styles.chName}>{chapters[2].chapter}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChapterPress(chapters[3].url)}>
          <Text style={styles.chName}>{chapters[3].chapter}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleChapterPress(chapters[4].url)}>
          <Text style={styles.chName}>{chapters[4].chapter}</Text>
        </TouchableOpacity> */}
        {chapterName.map((item, index) => (
          <TouchableOpacity
            onPress={e => {
              handleChapterPress(item.url, parseInt(index) + 1);
            }}
            key={index}>
            <Text style={styles.chName}>{item.chapter}</Text>
          </TouchableOpacity>
        ))}
        <Button title="Read" onPress={() => handleMoreChapters()} />
      </View>
      <Modal
        visible={modalShow}
        animationType="slide"
        onRequestClose={toggleModal}
        style={{
          width: Dimensions.get('window').width,
        }}>
        <View
          style={{
            flex: 1,
            height: 50,
            width: Dimensions.get('window').width,
            backgroundColor: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ScrollView style={styles.scrollContainer}>
            <View
              style={{
                height: 50,
                width: Dimensions.get('window').width,
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
            {chapters.map((item, index) => (
              <TouchableOpacity
                onPress={e => {
                  handleChapterPress(item.url, parseInt(index) + 1);
                }}
                key={index}>
                <Text style={styles.chName}>{item.chapter}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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
    fontSize: 15,
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
  paginationContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  pageItem: {
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  activePage: {
    backgroundColor: '#007BFF',
    borderColor: '#0056b3',
  },
  pageLink: {
    color: '#fff',
  },
});
