export interface NotificationItem {
  avatar: string;
  title: string;
  datetime: string;
  type: string;
  description: string;
  status?: "" | "success" | "warning" | "info" | "danger";
  extra?: Object;
}

export interface ListNotifications {
  key: string;
  name: string;
  list: NotificationItem[];
}

export interface NotificationsResponse {
  success: boolean;
  data: ListNotifications;
}
