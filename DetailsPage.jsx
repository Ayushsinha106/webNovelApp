import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';

const DetailsPage = () => {
  const NovelDetail = {
    title: 'Gifted Academy: The Perfect Student',
    Genres: ['Romance', 'Mystery', 'Slice of Life'],
    status: 'Ongoing',
    author: 'EvanMu',
    star: 4.6,
    imgUrl:
      'https://allnovelbook.com/server-1/gifted-academy-the-perfect-student.jpg',
    summary: [
      "Coming out of the Ideal Human Project, Mizuhara Ayato was referred to as the 'perfect human'. However, life was not so simple for this unfortunate boy. Stuck between other genius students and a meritocratic high school, Mizuhara would find himself unable to live a calm life.",
      'Who really is Mizuhara Ayato?',
      'Apathetic, listless and uncaring, will anyone ever make Mizuhara feel something? Even in the harsh conditions of the Tachibana System, he shows no signs of struggle.',
      'Is he the ultimate proof that nurture is stronger than nature?',
      '***',
      "Sara Fujiharu, the cutest girl in the school, is also known as the 'Seatmate Bully'. Every few weeks, the class seating changes and every time, Fujiharu-san gets a new target. What's her goal? To make the boy sitting next to her fall in love, and once she does, she destroys their heart, crushing their love.",
      "Why does she do this? I still don't know.",
      "It's March 23rd, the day of the seating change. So far, ten boys have fallen for her traps, her playful attitude, and her innocent face. Not a single boy so far has managed to brush off her attacks-and every single time; their weak hearts have been crushed.",
      "Now it's my turn.",
      'However, my heart is not so easily played with.',
      'You’re Reading Gifted Academy: The Perfect Student Novel at AllNovelBook.com',
    ],
    chapters: [
      {
        chapter: 'Chapter 1 Prologue',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-1',
      },
      {
        chapter: 'Chapter 2 New Semester New Seats - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-2',
      },
      {
        chapter: 'Chapter 3 New Semester New Seats - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-3',
      },
      {
        chapter: 'Chapter 4 New Semester New Seats - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-4',
      },
      {
        chapter: 'Chapter 5 New Semester New Seats - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-5',
      },
      {
        chapter: 'Chapter 6 Fish, Prawns And A Squid - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-6',
      },
      {
        chapter: 'Chapter 7 Fish, Prawns And A Squid - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-7',
      },
      {
        chapter: 'Chapter 8 Fish, Prawns And A Squid - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-8',
      },
      {
        chapter: 'Chapter 9 Superficial Cafe Date - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-9',
      },
      {
        chapter: 'Chapter 10 Superficial Cafe Date - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-10',
      },
      {
        chapter: 'Chapter 11 Superficial Cafe Date - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-11',
      },
      {
        chapter: 'Chapter 12 Cauliflower Soup Is Awkward - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-12',
      },
      {
        chapter: 'Chapter 13 Cauliflower Soup Is Awkward - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-13',
      },
      {
        chapter: 'Chapter 14 Acting As The Ideal Tutor - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-14',
      },
      {
        chapter: 'Chapter 15 Acting As The Ideal Tutor - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-15',
      },
      {
        chapter: 'Chapter 16 Acting As The Ideal Tutor - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-16',
      },
      {
        chapter: 'Chapter 17 Acting As The Ideal Tutor - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-17',
      },
      {
        chapter: 'Chapter 18 Ideal Human To Prodigy - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-18',
      },
      {
        chapter: 'Chapter 19 Ideal Human To Prodigy - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-19',
      },
      {
        chapter: 'Chapter 20 Ideal Human To Prodigy - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-20',
      },
      {
        chapter: 'Chapter 21 Swimming Pool And Tension - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-21',
      },
      {
        chapter: 'Chapter 22 Swimming Pool And Tension - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-22',
      },
      {
        chapter: 'Chapter 23 Swimming Pool And Tension - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-23',
      },
      {
        chapter: 'Chapter 24 Giving What I Once Got - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-24',
      },
      {
        chapter: 'Chapter 25 Giving What I Once Got - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-25',
      },
      {
        chapter: 'Chapter 26 Announcement',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-26',
      },
      {
        chapter: 'Chapter 27 Giving What I Once Got - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-27',
      },
      {
        chapter: 'Chapter 28 Perfect Girl And Chess Prodigy - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-28',
      },
      {
        chapter: 'Chapter 29 Perfect Girl And Chess Prodigy - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-29',
      },
      {
        chapter: 'Chapter 30 Fujiharu’s Offensive - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-30',
      },
      {
        title: 'Chapter 31 Fujiharu’s Offensive - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-31',
      },
      {
        title: 'Chapter 32 CONTRACTED [Pending]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-32',
      },
      {
        title: 'Chapter 33 Fujiharu’s Offensive - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-33',
      },
      {
        title: 'Chapter 34 Fujiharu’s Offensive - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-34',
      },
      {
        title: 'Chapter 35 Fujiharu’s Offensive - Part 5',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-35',
      },
      {
        title: 'Chapter 36 Volume 1 Afterword',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-36',
      },
      {
        title: 'Chapter 37 Short Story: This Wasn’t Meant To Happen',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-37',
      },
      {
        title: 'Chapter 38 Short Story: I Really Do Hate You',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-38',
      },
      {
        title: 'Chapter 39 Short Story: Someone Who Is Kind To Me',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-39',
      },
      {
        title: 'Chapter 40 Interlude - Glossary (Spoilers Up To 35)',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-40',
      },
      {
        title: 'Chapter 41 Sickness Is In The Air - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-41',
      },
      {
        title: 'Chapter 42 Sickness Is In The Air - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-42',
      },
      {
        title: 'Chapter 43 The Ideal Human Project - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-43',
      },
      {
        title: 'Chapter 44 Bright Sun, Soft Sand, Cold Water - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-44',
      },
      {
        title: 'Chapter 45 Bright Sun, Soft Sand, Cold Water - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-45',
      },
      {
        title: 'Chapter 46 Bright Sun, Soft Sand, Cold Water - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-46',
      },
      {
        title: 'Chapter 47 Kanako’s Desires - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-47',
      },
      {
        title: 'Chapter 48 Kanako’s Desires - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-48',
      },
      {
        title: 'Chapter 49 Kanako’s Desires - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-49',
      },
      {
        title: 'Chapter 50 Kanako’s Desires - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-50',
      },
      {
        title: 'Chapter 51 Kanako’s Desires - Part 5',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-51',
      },
      {
        title: 'Chapter 52 Volume 1.5 Interlude + Afterword',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-52',
      },
      {
        title: 'Chapter 53 Short Story: Afford And Fujiharu',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-53',
      },
      {
        title: 'Chapter 54 New School New Life - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-54',
      },
      {
        title: 'Chapter 55 New School New Life - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-55',
      },
      {
        title: 'Chapter 56 New School New Life - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-56',
      },
      {
        title: 'Chapter 57 New School New Life - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-57',
      },
      {
        title: 'Chapter 58 The Ideal Human Project - Part 2 [Kurosawa Sora]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-58',
      },
      {
        title: 'Chapter 59 Utopia-Like Dystopia - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-59',
      },
      {
        title: 'Chapter 60 Utopia-Like Dystopia - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-60',
      },
      {
        title: 'Chapter 61 Utopia-Like Dystopia - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-61',
      },
      {
        title: 'Chapter 62 The First Special Exam - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-62',
      },
      {
        title: 'Chapter 63 The First Special Exam - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-63',
      },
      {
        title: 'Chapter 64 The First Special Exam - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-64',
      },
      {
        title: 'Chapter 65 The First Special Exam - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-65',
      },
      {
        title: 'Chapter 66 The First Special Exam - Part 5',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-66',
      },
      {
        title: 'Chapter 67 The First Special Exam - Part 6',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-67',
      },
      {
        title: 'Chapter 68 Movements In The Background - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-68',
      },
      {
        title: 'Chapter 69 One Day, So Many Days Ago',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-69',
      },
      {
        title: 'Chapter 70 Movements In The Background - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-70',
      },
      {
        title: 'Chapter 71 Movements In The Background - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-71',
      },
      {
        title: 'Chapter 72 Movements In The Background - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-72',
      },
      {
        title: 'Chapter 73 Fear, Tension And Apathy - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-73',
      },
      {
        title: 'Chapter 74 Fear Tension And Apathy - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-74',
      },
      {
        title: 'Chapter 75 Fear, Tension And Apathy - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-75',
      },
      {
        title: 'Chapter 76 Language Of The Genius - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-76',
      },
      {
        title: 'Chapter 77 Language Of The Genius - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-77',
      },
      {
        title: 'Chapter 78 Language Of The Genius - Part 3 [Fujiharu Sara]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-78',
      },
      {
        title: 'Chapter 79 Language Of The Genius - Part 4 [Kanako Hanae]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-79',
      },
      {
        title: 'Chapter 80 Language Of The Genius - Part 5 [Kanako Hanae]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-80',
      },
      {
        title: 'Chapter 81 Chess Tournament Special Exam - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-81',
      },
      {
        title: 'Chapter 82 Chess Tournament Special Exam - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-82',
      },
      {
        title:
          'Chapter 83 Chess Tournament Special Exam - Part 1 [Kanako Hanae]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-83',
      },
      {
        title:
          'Chapter 84 Chess Tournament Special Exam - Part 2 [Kanako Hanae]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-84',
      },
      {
        title: 'Chapter 85 Chess Tournament Finals - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-85',
      },
      {
        title: 'Chapter 86 Chess Tournament Finals - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-86',
      },
      {
        title: 'Chapter 87 Chess Tournament Finals - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-87',
      },
      {
        title: 'Chapter 88 Chess Tournament Finals - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-88',
      },
      {
        title: 'Chapter 89 Kurosawa Hayao’s Address To The Board',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-89',
      },
      {
        title: 'Chapter 90 Volume 2 Afterword',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-90',
      },
      {
        title: 'Chapter 91 Relaxation Is A Privilege - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-91',
      },
      {
        title: 'Chapter 92 Relaxation Is A Privilege - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-92',
      },
      {
        title: 'Chapter 93 Relaxation Is A Privilege - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-93',
      },
      {
        title:
          'Chapter 94 Relaxation Is A Privilege - Part 4 [Mizuhara Sayaka]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-94',
      },
      {
        title: 'Chapter 95 Exploitative Arcade - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-95',
      },
      {
        title: 'Chapter 96 Exploitative Arcade - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-96',
      },
      {
        title: 'Chapter 97 Exploitative Arcade - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-97',
      },
      {
        title: 'Chapter 98 Exploitative Arcade - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-98',
      },
      {
        title: 'Chapter 99 Class Marathon Event - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-99',
      },
      {
        title: 'Chapter 100 Class Marathon Event - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-100',
      },
      {
        title: 'Chapter 101 Class Marathon Event - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-101',
      },
      {
        title: 'Chapter 102 Class Marathon Event - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-102',
      },
      {
        title: 'Chapter 103 The Ideal Human Project - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-103',
      },
      {
        title: 'Chapter 104 School Cross-Country - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-104',
      },
      {
        title: 'Chapter 105 School Cross-Country - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-105',
      },
      {
        title: 'Chapter 106 School Cross-Country - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-106',
      },
      {
        title: 'Chapter 107 The Ideal Human Project - Part 4 [Kanako Eikichi]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-107',
      },
      {
        title: 'Chapter 108 Someone’s In The Shadows - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-108',
      },
      {
        title: 'Chapter 109 Someone’s In The Shadows - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-109',
      },
      {
        title: 'Chapter 110 The Ideal Human Project - Part 5',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-110',
      },
      {
        title: 'Chapter 111 Someone’s In The Shadows - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-111',
      },
      {
        title: 'Chapter 112 New Ideals, New Thoughts - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-112',
      },
      {
        title: 'Chapter 113 New Ideals, New Thoughts - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-113',
      },
      {
        title: 'Chapter 114 New Ideals, New Thoughts - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-114',
      },
      {
        title: 'Chapter 115 New Ideals, New Thoughts - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-115',
      },
      {
        title: 'Chapter 116 New Ideals, New Thoughts - Part 5',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-116',
      },
      {
        title: 'Chapter 117 Midterm Exams - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-117',
      },
      {
        title: 'Chapter 118 Midterm Exams - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-118',
      },
      {
        title: 'Chapter 119 Midterm Exams - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-119',
      },
      {
        title: 'Chapter 120 Midterm Exams - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-120',
      },
      {
        title: 'Chapter 121 Midterm Exams - Part 5',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-121',
      },
      {
        title: 'Chapter 122 Midterm Exams - Part 6',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-122',
      },
      {
        title: 'Chapter 123 Midterm Exams - Part 7',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-123',
      },
      {
        title: 'Chapter 124 Academic Struggles - Part 1 [Kanako Hanae]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-124',
      },
      {
        title: 'Chapter 125 Academic Struggles - Part 2 [Kanako Hanae]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-125',
      },
      {
        title: 'Chapter 126 Academic Struggles - Part 3 [Kanako Hanae]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-126',
      },
      {
        title: 'Chapter 127 Academic Struggles - Part 4 [Kanako Hanae]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-127',
      },
      {
        title: 'Chapter 128 Academic Struggles - Part 5 [Kanako Hanae]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-128',
      },
      {
        title: 'Chapter 129 Academic Struggles - Part 6 [Kanako Hanae]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-129',
      },
      {
        title: 'Chapter 130 Superiority Complex - Part 1 [Hasegawa Mio]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-130',
      },
      {
        title: 'Chapter 131 Superiority Complex - Part 2 [Hasegawa Mio]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-131',
      },
      {
        title: 'Chapter 132 Mundane Dreams - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-132',
      },
      {
        title: 'Chapter 133 Mundane Dreams - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-133',
      },
      {
        title: 'Chapter 134 Mundane Dreams - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-134',
      },
      {
        title: 'Chapter 135 Mundane Dreams - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-135',
      },
      {
        title: 'Chapter 136 Sanctity Of Peace - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-136',
      },
      {
        title: 'Chapter 137 Sanctity Of Peace - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-137',
      },
      {
        title: 'Chapter 138 Sanctity Of Peace - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-138',
      },
      {
        title: 'Chapter 139 Sanctity Of Peace - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-139',
      },
      {
        title: 'Chapter 140 Sanctity of Peace - Part 5',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-140',
      },
      {
        title: 'Chapter 141 The Prying Student Council - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-141',
      },
      {
        title: 'Chapter 142 The Prying Student Council - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-142',
      },
      {
        title: 'Chapter 143  The Prying Student Council - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-143',
      },
      {
        title: 'Chapter 144  Hidden Identity - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-144',
      },
      {
        title: 'Chapter 145  Hidden Identity - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-145',
      },
      {
        title: 'Chapter 146 Volume 3 Afterword',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-146',
      },
      {
        title: 'Chapter 147 Lottery Special Exam - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-147',
      },
      {
        title: 'Chapter 148 Lottery Special Exam - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-148',
      },
      {
        title: 'Chapter 149 Lottery Special Exam - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-149',
      },
      {
        title: 'Chapter 150 Lottery Special Exam - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-150',
      },
      {
        title: 'Chapter 151 Lottery Special Exam - Part 5',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-151',
      },
      {
        title: 'Chapter 152 A Cold, Heartless Meeting - Part 0 [Hasegawa Mio]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-152',
      },
      {
        title: 'Chapter 153 Internal Shift - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-153',
      },
      {
        title: 'Chapter 154 Internal Shift - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-154',
      },
      {
        title: 'Chapter 155 Internal Shift - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-155',
      },
      {
        title: "Chapter 156 Fujiharu's Secret - Part 1",
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-156',
      },
      {
        title: 'Chapter 157 Fujiharu’s Secret - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-157',
      },
      {
        title: 'Chapter 158 The Little Bell - Part 1 [Hasegawa Mio]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-158',
      },
      {
        title: 'Chapter 159 The Little Bell - Part 2 [Hasegawa Mio]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-159',
      },
      {
        title: 'Chapter 160 Meritocracy - Part 1',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-160',
      },
      {
        title: 'Chapter 161 Meritocracy - Part 2',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-161',
      },
      {
        title: 'Chapter 162 Meritocracy - Part 3',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-162',
      },
      {
        title: 'Chapter 163 Meritocracy - Part 4',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-163',
      },
      {
        title: 'Chapter 164 Standoff - Part 1 [Mizuhara Sayaka]',
        url: 'https://allnovelbook.com/novel/gifted-academy-the-perfect-student/chapter-164',
      },
    ],
  };
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
      <View
        style={{
          backgroundColor: '#000',
          flex: 1,
        }}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.modalContent}>
            <View
              style={{
                height: 50,
                width: '100%',
                backgroundColor: '#000',
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
              source={{uri: NovelDetail.imgUrl}}
              style={{
                height: 260,
                width: 180,
              }}
            />
            <Text style={styles.DetailHeading}>{NovelDetail.title}</Text>
            <Text style={styles.author}>
              Author: {'  ' + NovelDetail.author}
            </Text>
            <View style={styles.colBar}>
              <View style={styles.col}>
                <Text style={styles.catHeading}>chapters</Text>
                <Text style={styles.cat}>{NovelDetail.chapters.length}</Text>
              </View>
              <View style={styles.col}>
                <Text style={styles.catHeading}>Status</Text>
                <Text style={styles.cat}>{NovelDetail.status}</Text>
              </View>
              <View style={styles.col}>
                <Text style={styles.catHeading}>Star</Text>
                <Text style={styles.cat}>{NovelDetail.star}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 600,
              width: width,
              backgroundColor: '#111',
              borderTopLeftRadius: 45,
              borderTopRightRadius: 45,
              padding: 20,
            }}>
            <Text style={styles.author}>This is Text</Text>
          </View>
        </ScrollView>
      </View>
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
    height: Dimensions.get('window').height,
    top: 0, // cause of this I can show content on StatusBar
    zIndex: 11,
  },
  scrollContainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#000',
    display: 'flex',
    flexWrap: 'wrap',
    width: Dimensions.get('window').width,
    zIndex: 10,
  },
  colBar: {
    height: 80,
    width: '100%',
    backgroundColor: '#000',
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
    borderRadius: 10,
    width: Dimensions.get('window').width,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: '#fff',
  },
});
export default DetailsPage;
