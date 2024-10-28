type UserProjectV1ResponseData = {
  id: number;
  title: string;
  status?: string | 'Not Started';
  co_date?: string;
  fo_date?: string;
  pattern?: UserPatternV1ResponseData;
  size?: string;
  yarns?: UserYarnV1ResponseData[];
  needles?: UserNeedleV1ResponseData[];
  // gauges: UserGaugeV1ResponseData[];
  note?: string;
  photos?: PhotoV1ResponseData[];
};
