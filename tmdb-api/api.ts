const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_API_BASE_URL = process.env.NEXT_PUBLIC_TMDB_API_BASE_URL;

interface SearchFunction {
  query: string;
  type: string;
  page: number;
}

export const searchMovies = async (query: string) => {
  if (!query) {
    return fetch(
      `${TMDB_API_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => json.results);
  }
  return fetch(
    `${TMDB_API_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
  )
    .then((res) => res.json())
    .then((json) => json.results);
};

export const searchSeries = async (query: string) => {
  if (query.length === 0) {
    return fetch(
      `${TMDB_API_BASE_URL}/trending/tv/week?api_key=${TMDB_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => json.results);
  }
  return fetch(
    `${TMDB_API_BASE_URL}/search/tv?api_key=${TMDB_API_KEY}&include_adult=false&query=${query}`
  )
    .then((res) => res.json())
    .then((json) => json.results);
};

export const discoverSearch = async (
  searchFor: string,
  query: string = "Batman"
) => {
  return fetch(
    `${TMDB_API_BASE_URL}/search/${searchFor}?api_key=${TMDB_API_KEY}&include_adult=false&query=${query}`
  )
    .then((res) => res.json())
    .then((json) => json.results);
};

export const searchActors = async (query: string) => {
  if (query.length === 0) {
    return fetch(
      `${TMDB_API_BASE_URL}/trending/person/week?api_key=${TMDB_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => json.results);
  }
  return fetch(
    `${TMDB_API_BASE_URL}/search/person?api_key=${TMDB_API_KEY}&include_adult=false&query=${query}`
  )
    .then((res) => res.json())
    .then((json) => json.results);
};

// SINGLE MOVIE

export const fetchSingleSimilar = async (id: string, searchFor: string) => {
  return await fetch(
    `${TMDB_API_BASE_URL}/${searchFor}/${id}/similar?language=en-US&page=1`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${process.env.NEXT_PUBLIC_TMDB_API_BEARER}`,
      },
    }
  ).then((res) => res.json());
};

export const fetchMovie = async (movieId: number) => {
  return await fetch(
    `${TMDB_API_BASE_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`
  ).then((res) => res.json());
};

export const fetchSingleImages = async (id: number, searchFor: string) => {
  return await fetch(
    `${TMDB_API_BASE_URL}/${searchFor}/${id}/images?api_key=${TMDB_API_KEY}`
  ).then((res) => res.json());
};

export const fetchSerie = async (serieId: number) => {
  return await fetch(
    `${TMDB_API_BASE_URL}/tv/${serieId}?api_key=${TMDB_API_KEY}&language=en-US`
  ).then((res) => res.json());
};
export const fetchActor = async (actorId: number) => {
  return await fetch(
    `${TMDB_API_BASE_URL}/person/${actorId}?api_key=${TMDB_API_KEY}&language=en-US`
  ).then((res) => res.json());
};
export const fetchSingleActors = async (movieId: number, searchFor: string) => {
  return await fetch(
    `${TMDB_API_BASE_URL}/${searchFor}/${movieId}/credits?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${process.env.NEXT_PUBLIC_TMDB_API_BEARER}`,
      },
    }
  ).then((res) => res.json());
};

export const fetchGenres = async (searchFor: string) => {
  return await fetch(
    `${TMDB_API_BASE_URL}/genre/${searchFor}/list?api_key=${TMDB_API_KEY}&language=en-US`
  ).then((res) => res.json());
};

export const fetchLanguages = async () => {
  return await fetch(
    `${TMDB_API_BASE_URL}/configuration/languages?api_key=${TMDB_API_KEY}`
  ).then((res) => res.json());
};

export const fetchLatest = async (searchFor: string) => {
  return await fetch(
    `${TMDB_API_BASE_URL}/${searchFor}/${
      searchFor === "movie" ? "now_playing" : "on_the_air"
    }?api_key=${TMDB_API_KEY}`
  ).then((res) => res.json());
};

export const fetchDiscover = async (
  page: number,
  year: number | undefined,
  sort: string,
  vote: string,
  genres: string[],
  language: string,
  searchFor: string
) => {
  return await fetch(
    `${TMDB_API_BASE_URL}/discover/${searchFor}?include_adult=false&include_video=false&language=en-US&page=${page}&primary_release_year=${year}&sort_by=${sort}.desc&vote_average.gte=${vote}&with_genres=${genres.join(
      "%2C"
    )}&with_original_language=${language}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${process.env.NEXT_PUBLIC_TMDB_API_BEARER}`,
      },
    }
  ).then((res) => res.json());
};

export const fetchSerieSeason = async (
  serieId: number,
  seasonNumber: number
) => {
  return await fetch(
    `${TMDB_API_BASE_URL}/tv/${serieId}/season/${seasonNumber}?language=en-US`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `${process.env.NEXT_PUBLIC_TMDB_API_BEARER}`,
      },
    }
  ).then((res) => res.json());
}


