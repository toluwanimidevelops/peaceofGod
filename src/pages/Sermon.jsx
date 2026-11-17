import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

const API_KEY = import.meta.env.VITE_YT_API_KEY;
const HANDLE = "peaceofgodministries";
const BASE = "https://www.googleapis.com/youtube/v3";
const CACHE_KEY = "pog_sermons";
const TTL = 10 * 60 * 1000;

async function yt(path, params) {
  const url = new URL(`${BASE}/${path}`);
  Object.entries({ ...params, key: API_KEY }).forEach(([k, v]) =>
    url.searchParams.set(k, v),
  );
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || "YouTube API error");
  return data;
}

async function fetchSermons() {
  const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
  if (cached && Date.now() - cached.time < TTL) return cached.data;

  try {
    const ch = await yt("channels", {
      part: "contentDetails",
      forHandle: HANDLE,
    });
    const uploadsId = ch.items[0].contentDetails.relatedPlaylists.uploads;

    const list = await yt("playlistItems", {
      part: "contentDetails",
      playlistId: uploadsId,
      maxResults: 50,
    });

    const ids = list.items.map((i) => i.contentDetails.videoId).join(",");
    const details = await yt("videos", {
      part: "snippet,contentDetails,liveStreamingDetails",
      id: ids,
    });

    const data = details.items
      .map((v) => {
        const t = v.snippet.thumbnails;
        return {
          id: v.id,
          title: v.snippet.title,
          publishedAt: v.snippet.publishedAt,
          duration: v.contentDetails.duration,
          thumbnail: (t.maxres || t.standard || t.high || t.medium).url,
          isLive: v.snippet.liveBroadcastContent === "live",
          isUpcoming: v.snippet.liveBroadcastContent === "upcoming",
          wasLivestream: !!v.liveStreamingDetails,
        };
      })
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, time: Date.now() }));
    return data;
  } catch (err) {
    if (cached) return cached.data;
    throw err;
  }
}

function formatDuration(iso = "") {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return "";
  const [h, min, s] = [m[1] || 0, m[2] || 0, m[3] || 0].map(Number);
  const pad = (n) => String(n).padStart(2, "0");
  return h ? `${h}:${pad(min)}:${pad(s)}` : `${min}:${pad(s)}`;
}

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const Sermon = () => {
  const [videos, setVideos] = useState([]);
  const [active, setActive] = useState(null);
  const [autoplay, setAutoplay] = useState(false);
  const [visible, setVisible] = useState(12);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSermons()
      .then((data) => {
        setVideos(data);
        setActive(data.find((v) => v.isLive) || data[0] || null);
      })
      .catch(() =>
        setError("Couldn't load sermons right now. Please try again."),
      )
      .finally(() => setLoading(false));
  }, []);

  const play = (video) => {
    setActive(video);
    setAutoplay(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading)
    return (
      <p data-nav-theme="light" className="py-16 text-center text-gray-600">
        Loading sermons…
      </p>
    );
  if (error)
    return (
      <p data-nav-theme="light" className="py-16 text-center text-gray-600">
        {error}
      </p>
    );
  if (!active)
    return (
      <p data-nav-theme="light" className="py-16 text-center text-gray-600">
        No sermons found.
      </p>
    );

  const others = videos.filter((v) => v.id !== active.id);

  return (
    <section
      data-nav-theme="light"
      className="mx-auto pt-30 grid  grid-cols-1 items-start gap-6 px-4 py-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]"
    >
      {/* BIG ACTIVE PLAYER */}
      <div>
        <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
          <iframe
            key={active.id}
            className="absolute inset-0 h-full w-full border-0"
            src={`https://www.youtube-nocookie.com/embed/${active.id}?rel=0${
              autoplay ? "&autoplay=1" : ""
            }`}
            title={active.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>

        <div className="mt-4">
          {active.isLive && (
            <span className="inline-block rounded bg-rose-600 px-2 py-0.5 text-sm text-white">
              ● LIVE NOW
            </span>
          )}
          <h2 className="mb-1 mt-2 text-2xl font-semibold font-primary leading-snug">
            {active.title}
          </h2>
          <p className="text-sm font-secondary text-gray-500">
            {formatDate(active.publishedAt)}
            {active.wasLivestream && !active.isLive && " · Live recording"}
          </p>
        </div>
      </div>

      {/* OTHER VIDEOS: 2-COLUMN GRID ON THE RIGHT */}
      <aside className="lg:sticky lg:top-4 lg:max-h-[85vh] lg:overflow-y-auto lg:pr-1.5">
        <h3 className="mb-3 text-lg font-semibold font-primary">More Sermons</h3>

        <div className="grid grid-cols-2 gap-3.5">
          {others.slice(0, visible).map((v) => (
            <button
              key={v.id}
              onClick={() => play(v)}
              className="group text-left"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 grid place-items-center bg-black/25 text-2xl text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="rounded-full bg-transparent flex items-center justify-center backdrop-blur-md p-4">
                    <FaPlay />
                  </div>
                </span>
                {v.isLive ? (
                  <span className="absolute bottom-1.5 font-primary right-1.5 rounded bg-rose-600 px-1.5 py-0.5 text-[11px] text-white">
                    ● LIVE
                  </span>
                ) : v.isUpcoming ? (
                  <span className="absolute bottom-1.5 font-primary right-1.5 rounded bg-black/80 px-1.5 py-0.5 text-[11px] text-white">
                    UPCOMING
                  </span>
                ) : (
                  <span className="absolute bottom-1.5 font-primary right-1.5 rounded bg-black/80 px-1.5 py-0.5 text-[11px] text-white">
                    {formatDuration(v.duration)}
                  </span>
                )}
              </div>
              <h4 className="mt-2 line-clamp-2 text-sm font-primary  font-semibold leading-snug">
                {v.title}
              </h4>
              <p className="text-xs text-gray-500">
                {formatDate(v.publishedAt)}
              </p>
            </button>
          ))}
        </div>

        {visible < others.length && (
          <button
            onClick={() => setVisible((n) => n + 12)}
            className="mx-auto mt-5 block rounded-lg border border-gray-900 px-6 py-2 text-sm hover:bg-gray-900 hover:text-white"
          >
            Load more
          </button>
        )}
      </aside>
    </section>
  );
};

export default Sermon;
