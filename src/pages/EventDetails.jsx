import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { IoMdArrowBack } from "react-icons/io";
import {
  IoShareSocialOutline,
  IoCalendarOutline,
  IoTimeOutline,
  IoLocationOutline,
} from "react-icons/io5";
import moment from "moment";
import data from "../assets/data";

const SITE_NAME = "Peace of God Ministry";
const EVENTS_LIST_ROUTE = "/events"; // change to your events listing route

// ---------- Dummy data (replace with real data / API later) ----------
const event = {
  id: 1,
  title: "Night Of Worship — Conference",
  image: data.Image18,
  date: "2027-05-30",
  time: "5:00 PM",
  location: "Venue Name, City",
  isFree: true,
  rsvpUrl: "#", // link to your RSVP form / page
  about: [
    "Night Of Worship is our signature worship experience, a night where heaven meets earth through song, scripture and surrender. Expect deep moments of intimacy, prophetic ministry and a fresh outpouring as we journey through three movements of worship together.",
    "At this year's event, we welcome our guest ministers, carrying a sound that revives hearts, awakens hunger, and draws people deeper into God.",
  ],
  guests: [
    { id: 1, name: "Guest Minister One", role: "Guest Minister" },
    { id: 2, name: "Guest Minister Two", role: "Guest Minister" },
    { id: 3, name: "Guest Minister Three", role: "Guest Minister" },
  ],
  expect: [
    "Deep, spirit-led worship",
    "A connection to the deep",
    "A stirring of hearts",
    "Alignment with what God will do next",
  ],
};

const pastEvents = [
  {
    id: 2,
    title: "Bake Sale for Charity",
    image: data.Image18,
    description:
      "Join us as we spread love, touch lives, and make an impact by donating all proceeds from the bake sale to charity.",
    date: "Sundays May 17th, May 24th & May 31st",
    time: null,
    location: "All Expressions",
  },
  {
    id: 3,
    title: "Gravity Conference: Newness",
    image: data.Image18,
    description:
      "Join us at the Newness Conference to explore innovative solutions for a sustainable future. Participate in workshops and collaborative projects!",
    date: "May 1st",
    time: "10 AM",
    location: "Main Auditorium",
  },
];

// ---------- Small helpers ----------
const getInitials = (name = "") =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");

const PastEventCard = ({ item, onOpen }) => (
  <div className="bg-white rounded-2xl p-3 shadow-[0_2px_20px_rgba(16,30,109,0.08)] border border-[#101e6d]/5 flex flex-col">
    <img
      src={item.image}
      alt={item.title}
      className="w-full h-48 object-cover rounded-xl"
    />
    <div className="px-1 pt-4 pb-1 flex flex-col flex-1">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-bold font-primary text-xl leading-tight">
          {item.title}
        </h3>
        <span className="shrink-0 text-[11px] text-gray-600 bg-gray-100 rounded-full px-3 py-1">
          Past event
        </span>
      </div>
      <p className="text-sm text-gray-700 font-secondary leading-relaxed mt-3">
        {item.description}
      </p>

      <div className="mt-5 flex flex-col gap-3 text-sm text-gray-800">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-2">
            <IoCalendarOutline className="text-[#1a699c] text-lg" />
            {item.date}
          </span>
          {item.time && (
            <span className="flex items-center gap-2">
              <IoTimeOutline className="text-lg" />
              {item.time}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="flex items-center gap-2">
            <IoLocationOutline className="text-[#1a699c] text-lg" />
            {item.location}
          </span>
          <button
            onClick={() => onOpen(item.id)}
            className="text-xs bg-gray-100 hover:bg-[#101e6d] hover:text-white duration-300 rounded-md px-4 py-2 cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
);

const EventDetails = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // ---------- Back button ----------
  const handleBack = () => {
    // If the visitor opened a shared link directly, there is no history to go back to
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate(EVENTS_LIST_ROUTE);
    }
  };

  // ---------- Share data ----------
  const shareUrl = window.location.href;
  const shareDescription = event.about[0].trim().slice(0, 160);
  // og:image must be an absolute URL
  const shareImage = /^https?:\/\//.test(event.image)
    ? event.image
    : `${window.location.origin}${event.image}`;

  const handleShare = async () => {
    const shareData = {
      title: event.title,
      text: shareDescription,
      url: shareUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      // AbortError just means the user closed the share sheet
      if (err.name !== "AbortError") console.error(err);
    }
  };

  const formattedDate = moment(event.date).format("dddd MMM Do");

  // Reserve card is rendered twice (mobile under the image, desktop in the sidebar)
  const reserveCard = (
    <div className="w-full rounded-2xl bg-white border-2 border-[#101e6d]/10 shadow-[0_2px_20px_rgba(16,30,109,0.08)] p-6">
      <h3 className="text-2xl text-black/80 font-semibold font-secondary">
        Reserve Your Seat
      </h3>
      <p className="font-primary text-gray-700 text-sm leading-relaxed mt-5 pb-5 border-b border-[#101e6d]/10">
        {event.isFree
          ? "Free to attend. RSVP to receive event reminders and updates."
          : "RSVP to secure your place and receive event reminders and updates."}
      </p>
      <a
        href={event.rsvpUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 flex items-center justify-center bg-[#c5d51a] hover:brightness-95 duration-300 text-[#101e6d] text-sm font-semibold p-3 w-full rounded-sm cursor-pointer"
      >
        RSVP Now
      </a>
      <button
        onClick={handleShare}
        className="border-[#101e6d]/30 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#101e6d] hover:text-white duration-500 border text-[#101e6d] text-sm mt-3 p-3 w-full rounded-sm"
      >
        <IoShareSocialOutline /> {copied ? "Link copied!" : "Share Event"}
      </button>
    </div>
  );

  return (
    <div data-nav-theme={"light"} className="pt-20">
      <Helmet>
        <title>{`${event.title} | ${SITE_NAME}`}</title>
        <meta name="description" content={shareDescription} />

        {/* Open Graph (Facebook, WhatsApp, LinkedIn, Telegram) */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={event.title} />
        <meta property="og:description" content={shareDescription} />
        <meta property="og:image" content={shareImage} />
        <meta property="og:url" content={shareUrl} />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={event.title} />
        <meta name="twitter:description" content={shareDescription} />
        <meta name="twitter:image" content={shareImage} />
      </Helmet>

      {/* ---------- Hero ---------- */}
      <div className="relative w-full overflow-hidden pt-30 pb-12 bg-[#1a699c]">
        {/* Faded banner on the right (hidden on small screens) */}
        <div className="absolute inset-y-0 right-0 w-[38%] max-lg:hidden">
          <img
            src={event.image}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a699c,transparent_60%)]" />
        </div>

        <div className="relative px-6 md:px-12 mx-auto">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-white cursor-pointer mb-8 text-xs"
          >
            <IoMdArrowBack className="text-white" />
            Back to all events
          </button>

          <h1 className="text-white mb-6 max-w-2xl font-primary text-[48px] max-md:text-[30px] leading-[1.2] font-bold">
            {event.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white text-xs">
            <span className="flex items-center gap-2">
              <IoCalendarOutline className="text-[#c5d51a] text-base" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <IoTimeOutline className="text-[#c5d51a] text-base" />
              {event.time}
            </span>
            <span className="flex items-center gap-2 uppercase">
              <IoLocationOutline className="text-[#c5d51a] text-base" />
              {event.location}
            </span>
          </div>
        </div>
      </div>

      {/* ---------- Body ---------- */}
      <div className="flex max-md:flex-col px-6 md:px-12 mt-10 gap-10 mx-auto flex-wrap">
        <div className="flex-1 min-w-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full max-h-120 rounded-2xl object-cover"
          />

          {/* Mobile reserve card */}
          <div className="md:hidden mt-6">{reserveCard}</div>

          <div className="mt-8 max-md:px-2">
            {/* About */}
            <h2 className="font-bold font-mulish text-[28px] max-md:text-[24px]">
              About This Event
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              {event.about.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-black text-[14px] leading-loose font-secondary"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* People attending */}
            <h3 className="font-bold font-mulish text-xl mt-12">
              People Attending
            </h3>
            <p className="text-sm text-gray-500 font-primary mt-1">
              Featured guests and ministers expected at this event.
            </p>
            <div className="flex gap-4 overflow-x-auto pb-3 mt-5">
              {event.guests.map((guest) => (
                <div
                  key={guest.id}
                  className="flex items-center gap-3 min-w-[230px] rounded-xl bg-white border border-[#101e6d]/10 shadow-[0_2px_12px_rgba(16,30,109,0.06)] p-3"
                >
                  <div className="w-12 h-12 shrink-0 rounded-full bg-blue-100 text-[#101e6d] text-sm font-bold flex items-center justify-center">
                    {getInitials(guest.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold font-primary">
                      {guest.name}
                    </p>
                    <p className="text-xs text-gray-500 font-primary">
                      {guest.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* What to expect */}
            <h3 className="font-bold font-mulish text-xl mt-12">
              What To Expect
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              {event.expect.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-[#c5d51a] bg-white px-4 py-4 text-sm text-gray-700 font-primary"
                >
                  <IoCalendarOutline className="text-[#1a699c] text-lg shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop sidebar */}
        <div className="w-[400px] max-md:hidden max-w-full">
          <div className="sticky top-30">{reserveCard}</div>
        </div>
      </div>

      {/* ---------- Past events ---------- */}
      <div className="px-6 md:px-12 mt-20 pb-16">
        <h2 className="font-bold font-mulish text-[36px] max-md:text-[28px]">
          Past Events
        </h2>
        {pastEvents.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            {pastEvents.map((item) => (
              <PastEventCard
                key={item.id}
                item={item}
                onOpen={(id) => navigate(`/events/${id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
