import { LuDices } from "react-icons/lu";

export default function Home() {
  return (
    <div className="p-4 flex-1 flex flex-col gap-6">
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="card bg-primary text-primary-content w-96">
          <div className="card-body">
            <h2 className="card-title text-3xl">2024年度专辑评选</h2>
            <p>年关降至，快来为你认为的最佳专辑投上一票吧!</p>
          </div>
        </div>
        <div className="card bg-primary text-primary-content image-full w-96">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl text-primary">
              我奶奶都能学会!
            </h2>
            <h2 className="card-title">海螺因拌面的简明乐理教学</h2>
            <p>海螺因拌面呕心沥血，专为金属党打造的简单乐理教程</p>
          </div>
        </div>
        <div className="card bg-primary text-primary-content image-full w-96">
          <figure>
            <img
              src="https://flypaper.soundfly.com/wp-content/uploads/2016/10/metal-covers-header.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl text-primary">
              教练我想玩乐队!
            </h2>
            <h2 className="card-title">讨论区</h2>
            <p>原来你也听金属! 乐队找人? 寻找同好? 快来讨论区</p>
          </div>
        </div>
      </div>
      <div className="font-semibold">
        <h2 className="mb-4">文章</h2>
        <div className="grid grid-cols-5 gap-6">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-44"
                src="https://www.rollingstone.com/wp-content/uploads/2023/03/metal-songs-1.jpg?w=1581&h=1054&crop=1"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base">
                The 100 Greatest Heavy Metal Songs of All Time
              </h2>
              <p></p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-44"
                src="https://www.udiscovermusic.com/wp-content/uploads/2021/03/The-Runaways-GettyImages-85349983.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base">
                Pioneering Women in Hard Rock and Heavy Metal Music
              </h2>
              <p></p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-44"
                src="https://gdb.voanews.com/01000000-0aff-0242-b7b5-08dc6e91c7eb_w1023_r1_s.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base">
                Heavy metal music has a home in Indonesia
              </h2>
              <p></p>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-44"
                src="https://www.gotquestions.org/img/OG/Christian-heavy-metal-music.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base">
                Is listening to Christian heavy metal music wrong?
              </h2>
            </div>
          </div>
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-44"
                src="https://hips.hearstapps.com/hmg-prod/images/mh-metal-albums-1556909055.jpg?resize=1200:*"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base">
                The 100 Best Heavy Metal Workout Songs of All Time
              </h2>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <div className="font-semibold">
        <h2 className="mb-4">专辑</h2>
        <div className="grid grid-cols-6 gap-6">
          <img src="https://f4.bcbits.com/img/a4024825693_5.jpg" />
          <img src="https://f4.bcbits.com/img/a1048180335_5.jpg" />
          <img src="https://f4.bcbits.com/img/a3025201971_5.jpg" />
          <img src="https://f4.bcbits.com/img/a3308215840_5.jpg" />
          <img src="https://f4.bcbits.com/img/a1432938249_2.jpg" />
          <img src="https://f4.bcbits.com/img/a3600376846_2.jpg" />
          <img src="https://f4.bcbits.com/img/a2329997089_2.jpg" />
        </div>
      </div>
    </div>
  );
}
