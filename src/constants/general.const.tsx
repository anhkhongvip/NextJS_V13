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
        iconActive: <DashboardIcon/>,
        path: "/",
    },
    {
        title: 'Property',
        icon: <PropertyIcon/>,
        iconActive: <PropertyIcon/>,
        path: "/property",
    },
    {
        title: 'Agent',
        icon: <AgentIcon/>,
        iconActive: <AgentIcon/>,
        path: "/agent",
    },
    {
        title: 'Review',
        icon: <ReviewIcon />,
        iconActive: <ReviewIcon/>,
        path: "/review",
    },
    {
        title: 'Message',
        icon: <MessageIcon/>,
        iconActive: <MessageIcon/>,
        path: "/message",
    },
    {
        title: 'My Profile',
        icon: <ProfileIcon/>,
        iconActive: <ProfileIcon/>,
        path: "/profile",
    }
];
export { sidebarLinks }