import {
  FiSmartphone,
  FiShoppingCart,
  FiCheckCircle,
  FiCloud,
  FiFileText,
  FiMusic,
} from 'react-icons/fi';
import { IoGameControllerOutline } from 'react-icons/io5';


const iconMap = {
  mobile: FiSmartphone,
  'shopping-cart': FiShoppingCart,
  'check-circle': FiCheckCircle,
  cloud: FiCloud,
  'file-text': FiFileText,
  music: FiMusic,
  game: IoGameControllerOutline,
};

export function ProjectIcon({ name, size = 60 }) {
  const Icon = iconMap[name] || FiSmartphone;
  return <Icon size={size} />;
}
