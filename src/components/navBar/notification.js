import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';

const Notifications = () => (
    <div>
        <Badge
            badgeContent={10}
            secondary={true}
            badgeStyle={{top: 30, right: 20}}
        >
            <IconButton tooltip="Notifications">
                <NotificationsIcon />
            </IconButton>
        </Badge>
    </div>
);

export default Notifications;