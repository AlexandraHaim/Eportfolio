import Home from "../../pages/Home/Home";
import EngineeringCourse from "../../pages/EngineeringCourse/EngineeringCourse";
import InternationalMobility from "../../pages/InternationalMobility/InternationalMobility";
import CareerDevelopment from "../../pages/CareerDevelopment/CareerDevelopment";
import SportOtherActivities from "../../pages/SportOtherActivities/SportOtherActivities";
import More from "../../pages/More/More";

export const pages = [{
        title: "Home",
        path: "/home",
        element: <Home />,
        icon: "home",
    }, 
    {
        title: "Engineering Course",
        path: "/engineeringCourse",
        element: <EngineeringCourse />,
        icon: "engineeringCourse",
    },
    {
        title: "International Mobility",
        path: "/internationalMobility",
        element: <InternationalMobility />,
        icon: "internationalMobility",
    },
    {
        title: "Career Development",
        path: "/careerDevelopment",
        element: <CareerDevelopment />,
        icon: "careerDevelopment",
    },
    {
        title: "Sport & other Activities",
        path: "/sportOtherActivities",
        element: <SportOtherActivities />,
        icon: "sportOtherActivities",
    },
    {
        title: "More",
        path: "/more",
        element: <More />,
        icon: "more",
    },
];