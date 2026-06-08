import {
  FiSmartphone,
  FiShoppingCart,
  FiCheckCircle,
  FiCloud,
  FiFileText,
  FiMusic,
} from 'react-icons/fi';

const iconMap = {
  mobile: FiSmartphone,
  'shopping-cart': FiShoppingCart,
  'check-circle': FiCheckCircle,
  cloud: FiCloud,
  'file-text': FiFileText,
  music: FiMusic,
};

export function ProjectIcon({ name, size = 60 }) {
  const Icon = iconMap[name] || FiSmartphone;
  return <Icon size={size} />;
}
