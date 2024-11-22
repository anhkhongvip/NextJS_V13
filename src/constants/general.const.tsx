import AgentIcon from "@/components/icons/AgentIcon";
import DashboardIcon from "@/components/icons/DashboardICon";
import MessageIcon from "@/components/icons/MessageIcon";
import ProfileIcon from "@/components/icons/ProfileIcon";
import PropertyIcon from "@/components/icons/PropertyIcon";
import ReviewIcon from "@/components/icons/ReviewIcon";

const sidebarLinks = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon/>,
        iconActive: <DashboardIcon fillColor="#FCFCFC"/>,
        path: "/",
    },
    {
        title: 'Property',
        icon: <PropertyIcon/>,
        iconActive: <PropertyIcon fillColor="#FCFCFC"/>,
        path: "/property",
    },
    {
        title: 'Agent',
        icon: <AgentIcon/>,
        iconActive: <AgentIcon fillColor="#FCFCFC"/>,
        path: "/agent",
    },
    {
        title: 'Review',
        icon: <ReviewIcon />,
        iconActive: <ReviewIcon fillColor="#FCFCFC"/>,
        path: "/review",
    },
    {
        title: 'Message',
        icon: <MessageIcon/>,
        iconActive: <MessageIcon fillColor="#FCFCFC"/>,
        path: "/message",
    },
    {
        title: 'My Profile',
        icon: <ProfileIcon/>,
        iconActive: <ProfileIcon fillColor="#FCFCFC"/>,
        path: "/profile",
    }
];
export { sidebarLinks }