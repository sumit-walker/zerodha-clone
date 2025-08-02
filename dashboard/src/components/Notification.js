import * as React from 'react';
import { useNotifications } from '@toolpad/core/useNotifications';
import Button from '@mui/material/Button';

export default function Notifications({notification}) {
  const notifications = useNotifications();
  return (
    <div>
      <Button
        onClick={() => {
          // preview-start
          notifications.show(`${notification}`, { autoHideDuration: 1000 });
          // preview-end
        }}
      >
        Notify me
      </Button>
    </div>
  );
}