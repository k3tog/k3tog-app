type TListCardWithStatusProps = {
  thumbnail: ImageSourcePropType;
  status: string;
  title: string;
  description?: string;
  dateFrom?: string | 'Unknown ';
  dateTo?: string | 'Unknown';
  onPress?: () => void;
};

type TNewListCardProps = {
  title: string;
  content: string;
  source: ImageSourcePropType;
  path: Href<string>;
};
