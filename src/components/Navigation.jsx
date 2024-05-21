import { Link } from "react-router-dom";
import SungJinwooImg from "../assets/sung_jinwoo.png";
import ChaHaeInImg from "../assets/cha_hae-in.png";
import SongChiyulImg from "../assets/song_chiyul.png";
import TaeGyuImg from "../assets/tae-gyu.png";
import YooJinhoImg from "../assets/yoo_jinho.png";

export default function Navigation() {
  return (
    <div className="flex flex-row bg-black gap-7 text-slate-50 pb-16">
      <Link to="/sung-jinwoo" className="w-24">
        <figure>
          <img
            src={SungJinwooImg}
            alt="Image of Sung Jinwoo, a character from the Solo Leveling series."
          />
          <figcaption className="text-center">Sung Jinwoo</figcaption>
        </figure>
      </Link>
      <Link to="/cha-hae-in" className="w-24">
        <figure>
          <img
            src={ChaHaeInImg}
            alt="Image of Cha Hae-In, a character from the Solo Leveling series."
          />
          <figcaption className="text-center">Cha Hae-In</figcaption>
        </figure>
      </Link>
      <Link to="/song-chiyul" className="w-24">
        <figure>
          <img
            src={SongChiyulImg}
            alt="Image of Song Chiyul, a character from the Solo Leveling series."
          />
          <figcaption className="text-center">Song Chiyul</figcaption>
        </figure>
      </Link>
      <Link to="/tae-gyu" className="w-24">
        <figure>
          <img
            src={TaeGyuImg}
            alt="Image of Tae Gyu, a character from the Solo Leveling series."
          />
          <figcaption className="text-center">Tae Gyu</figcaption>
        </figure>
      </Link>
      <Link to="/yoo-jinho" className="w-24">
        <figure>
          <img
            src={YooJinhoImg}
            alt="Image of Yoo Jinho, a character from the Solo Leveling series."
          />
          <figcaption className="text-center">Yoo Jinho</figcaption>
        </figure>
      </Link>
    </div>
  );
}
