import { GiPentacle, GiCompactDisc, GiCrimeSceneTape } from "react-icons/gi";
import { PiCassetteTape } from "react-icons/pi";
import { RiArticleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="flex flex-col h-screen text-primary bg-primary-content">
      <div className="flex items-center justify-center h-16 text-3xl font-semibold font-gothic">
        Palace of Hell
      </div>
      <ul className="menu menu-lg w-56 font-semibold">
        <li>
          <Link to="/" className="active">
            <GiPentacle className="text-3xl" /> 首页
          </Link>
        </li>

        <li>
          <Link to="/about">
            <RiArticleLine className="text-3xl" />
            文章
          </Link>
        </li>
        <li>
          <Link to="/about">
            <GiCompactDisc className="text-3xl" />
            找专辑
          </Link>
        </li>
        <li>
          <Link to="/about">
            <PiCassetteTape className="text-3xl" />
            DEMO分享
          </Link>
        </li>
        <hr className="border-base-100" />
        <li>
          <details open>
            <summary>
              <GiCrimeSceneTape className="text-3xl" />
              讨论区
            </summary>
            <ul>
              <li>
                <a>综合版</a>
              </li>
              <li>
                <a>我要玩乐队</a>
              </li>
              <li>
                <a>乐器/设备</a>
              </li>
              <li>
                <a>音乐讨论</a>
              </li>
              <li>
                <a>CD/磁带/唱片</a>
              </li>
              <li>
                <a>闲聊</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}
