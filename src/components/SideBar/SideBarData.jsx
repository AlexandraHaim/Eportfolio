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
    title: 'Engineering Course',
    path: '/engineeringCourse',
    icon: <FaIcons.FaGraduationCap />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Engineering Course',
        path: '/engineeringCourse/engineeringCourse',
        icon: <FaIcons.FaGraduationCap />,
        cName: 'sub-nav'
      },
      {
        title: 'Projects & Productions',
        path: '/engineeringCourse/projects&productions',
        icon: <FaIcons.FaCubes />,
        cName: 'sub-nav'
      },
    ]
  },
  {
    title: 'International Mobility',
    path: '/internationalMobility',
    icon: <FaIcons.FaGlobeAmericas />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
          title: 'International Mobility',
          path: '/internationalMobility/internationalMobility',
          icon: <FaIcons.FaMapMarked />,
          cName: 'sub-nav'
        },
        {
          title: 'Professional English',
          path: '/internationalMobility/professionalEnglish',
          icon: <FaIcons.FaUsers />,
          cName: 'sub-nav'
        },
        {
          title: 'LV2: Chinese',
          path: '/internationalMobility/LV2:Chinese',
          icon: <FaIcons.FaLanguage />,
          cName: 'sub-nav'
          },
      ]
  },
  {
    title: 'Career Development',
    path: '/careerDevelopment',
    icon: <FaIcons.FaUserTie />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
        {
          title: 'Career Development',
          path: '/careerDevelopment/careerDevelopment',
          icon: <FaIcons.FaUserTie />,
          cName: 'sub-nav'
        },
        {
          title: 'Sustainable Development',
          path: '/careerDevelopment/sustainableDevelopment',
          icon: <FaIcons.FaLeaf />,
          cName: 'sub-nav'
        },
        {
          title: 'Internships',
          path: '/careerDevelopment/internships',
          icon: <FaIcons.FaBuilding />,
          cName: 'sub-nav'
        },
        {
          title: 'PPP',
          path: '/careerDevelopment/PPP',
          icon: <FaIcons.FaHandPointRight />,
          cName: 'sub-nav'
        },
      ]
  },

  {
    title: 'Sport & other Activities',
    path: '/sportOtherActivities',
    icon: <FaIcons.FaPaintBrush />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'More',
    path: '/more',
    icon: <FaIcons.FaInfo />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'More',
        path: '/more/more',
        icon: <FaIcons.FaInfo />
      },
      {
        title: 'Hobbies',
        path: '/more/hobbies',
        icon: <FaIcons.FaMusic />
      },
      {
        title: 'Contact',
        path: '/more/contact',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
];