import { InboxOutlined, DatabaseOutlined } from '@ant-design/icons';

export const getStoragePlaceIcon = (type) => {
  return type === "BookShelf" ? <DatabaseOutlined /> : <InboxOutlined />
}