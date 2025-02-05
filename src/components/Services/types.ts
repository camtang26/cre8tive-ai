export interface ServiceData {
  icon: string;
  title: string;
  description: string;
  link: string;
  color: string;
}

export interface ServiceCardProps extends ServiceData {
  index: number;
}

export interface ServicesProps {
  services: ServiceData[];
}