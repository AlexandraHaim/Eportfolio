import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Members',
    path: '/members',
    icon: <FaIcons.FaGraduationCap />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Board of Directors',
        path: '/members/boardOfDirectors',
        icon: <FaIcons.FaGraduationCap />,
        cName: 'sub-nav'
      },
      {
        title: 'Administration',
        path: '/members/administration',
        icon: <FaIcons.FaCubes />,
        cName: 'sub-nav'
      },
      {
        title: 'Scientific Board',
        path: '/members/scientificBoard',
        icon: <FaIcons.FaCubes />,
        cName: 'sub-nav'
      },
      {
        title: 'Team',
        path: '/members/team',
        icon: <FaIcons.FaCubes />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'Communication',
    path: '/communication',
    icon: <FaIcons.FaGlobeAmericas />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
          title: 'Colloquium',
          path: '/communication/colloquium',
          icon: <FaIcons.FaMapMarked />,
          cName: 'sub-nav'
        },
        {
          title: 'Conferences',
          path: '/communication/conferences',
          icon: <FaIcons.FaUsers />,
          cName: 'sub-nav'
        },
        {
          title: 'Seminars',
          path: '/communication/seminars',
          icon: <FaIcons.FaLanguage />,
          cName: 'sub-nav'
        },
      ]
    },
    {
      title: 'Web Sites & Blogs',
      path: '/websitesBlogs',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
      title: 'List of Books',
      path: '/listOfBoks',
      icon: <AiIcons.AiFillHome />,
      iconClosed: <RiIcons.RiArrowDownSFill />,
      iconOpened: <RiIcons.RiArrowUpSFill />,
    },
  {
    title: 'Publications',
    path: '/publications',
    icon: <FaIcons.FaUserTie />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
          title: 'Colloquium Proceedings',
          path: '/publications/colloquiumProceedings',
          icon: <FaIcons.FaUserTie />,
          cName: 'sub-nav'
        },
        {
          title: 'Documents',
          path: '/publications/documents',
          icon: <FaIcons.FaLeaf />,
          cName: 'sub-nav'
        },
        {
          title: 'Journals',
          path: '/publications/journals',
          icon: <FaIcons.FaBuilding />,
          cName: 'sub-nav'
        },
      ]
  },
  {
    title: 'Research Interventions',
    path: '/researchInterventions',
    icon: <FaIcons.FaInfo />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Consulting',
        path: '/researchInterventions/consulting',
        icon: <FaIcons.FaInfo />
      },
      {
        title: 'Diagnosis',
        path: '/researchInterventions/diagnosis',
        icon: <FaIcons.FaMusic />
      },
      {
        title: 'Trainings',
        path: '/researchInterventions/trainings',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'W Theory ©',
    path: '/WTheory',
    icon: <FaIcons.FaPaintBrush />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];
