import SongChiyulImg from "../assets/song_chiyul.png";

export default function SongChiyul() {
  return (
    <div className="flex flex-col w-72">
      <img
        src={SongChiyulImg}
        alt="Image of Song Chiyul, a character from the Solo Leveling series."
      />
    </div>
  );
}
