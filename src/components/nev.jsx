export default function Nev() {
  return (
    <div className="navbar justify-between">
      <div className="breadcrumbs text-primary font-semibold">
        <ul>
          <li>
            <a>首页</a>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/6cLCA6milTC7qmdOzGt37mwzvrI.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>设置</a>
            </li>
            <li>
              <a>退出登录</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
