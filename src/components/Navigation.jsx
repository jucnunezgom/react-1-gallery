import { Link } from "react-router-dom";
import SungJinwooImg from "../assets/sung_jinwoo.png";
import ChaHaeInImg from "../assets/cha_hae-in.png";
import SongChiyulImg from "../assets/song_chiyul.png";
import TaeGyuImg from "../assets/tae-gyu.png";
import YooJinhoImg from "../assets/yoo_jinho.png";

export default function Navigation() {
  return (
    <div>
      <Link to="/sung-jinwoo">
        <figure>
          <img
            src={SungJinwooImg}
            alt="Image of Sung Jinwoo, a character from the Solo Leveling series."
          />
          <figcaption>Sung Jinwoo</figcaption>
        </figure>
      </Link>
      <Link to="/cha-hae-in">
        <figure>
          <img
            src={ChaHaeInImg}
            alt="Image of Cha Hae-In, a character from the Solo Leveling series."
          />
          <figcaption>Cha Hae-In</figcaption>
        </figure>
      </Link>
      <Link to="/song-chiyul">
        <figure>
          <img
            src={SongChiyulImg}
            alt="Image of Song Chiyul, a character from the Solo Leveling series."
          />
          <figcaption>Song Chiyul</figcaption>
        </figure>
      </Link>
      <Link to="/tae-gyu">
        <figure>
          <img
            src={TaeGyuImg}
            alt="Image of Tae Gyu, a character from the Solo Leveling series."
          />
          <figcaption>Tae Gyu</figcaption>
        </figure>
      </Link>
      <Link to="/yoo-jinho">
        <figure>
          <img
            src={YooJinhoImg}
            alt="Image of Yoo Jinho, a character from the Solo Leveling series."
          />
          <figcaption>Yoo Jinho</figcaption>
        </figure>
      </Link>
    </div>
  );
}
