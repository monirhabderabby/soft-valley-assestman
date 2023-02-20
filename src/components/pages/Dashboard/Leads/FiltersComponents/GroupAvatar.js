// Configuration
import React from "react";

// Third party packages
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

export const GroupAvatar = ({ photos }) => {
    return (
        <AvatarGroup max={4}>
            {photos?.map((photo, index) => {
                return <Avatar key={index} alt="Remy Sharp" src={`http://crm.softvalley.sveducrm.com/${photo}`} />;
            })}
        </AvatarGroup>
    );
};
