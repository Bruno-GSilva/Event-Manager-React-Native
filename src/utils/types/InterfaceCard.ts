export interface CardEventProps {
  image: string;
  day: string;
  tagName?: string;
  title: string;
  subTitle: string;
  expiredDate: string;
}

export interface CardRoomProps {
  id: number;
  room_name: string;
  image: string;
  status: boolean;
  route?: () => void;
  num_events: number;
  event?: CardEventProps[];
}