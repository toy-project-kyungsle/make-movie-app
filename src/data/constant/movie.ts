import { MovieDataType, TorrentDataType } from '@/data/type/movie';

export const defaultMovieData: MovieDataType = {
  id: 0,
  url: '',
  imdb_code: '',
  title: '',
  title_english: '',
  title_long: '',
  slug: '',
  year: 0,
  rating: 0.0,
  runtime: 0,
  genres: [],
  summary: '',
  description_full: '',
  synopsis: '',
  yt_trailer_code: '',
  language: '',
  mpa_rating: '',
  background_image: '',
  background_image_original: '',
  small_cover_image: '',
  medium_cover_image: '',
  large_cover_image: '',
  state: '',
  torrents: [], // TorrentDataType의 기본값을 포함하는 배열
  date_uploaded: '',
  date_uploaded_unix: 0,
};

export const defaultTorrentData: TorrentDataType = {
  url: '',
  hash: '',
  quality: '',
  type: '',
  is_repack: '',
  video_codec: '',
  bit_depth: '',
  audio_channels: '',
  seeds: 0,
  peers: 0,
  size: '',
  size_bytes: 0,
  date_uploaded: '',
  date_uploaded_unix: 0,
};
