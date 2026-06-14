import fs from "node:fs";
import path from "node:path";
import Script from "next/script";
import WorkItem from "@/components/WorkItem";
import ClientEffects from "@/components/ClientEffects";

function loadWorks() {
  const dir = path.join(process.cwd(), "content", "works");
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const id = file.replace(/\.json$/, "");
      const data = JSON.parse(fs.readFileSync(path.join(dir, file), "utf-8"));
      return { id, ...data };
    });
}

function byCategory(works, category) {
  return works
    .filter((work) => work.category === category)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export default function Home() {
  const works = loadWorks();
  const designWorks = byCategory(works, "design");
  const cgWorks = byCategory(works, "cg");
  const eWorks = byCategory(works, "e");

  return (
    <>
      {/* ローディング画面 */}
      <div id="loading">
        <div className="loader">Loading...</div>
        <span className="load-text">Now Loading…</span>
      </div>
      {/* 独自のスクロールバー */}
      <div className="scroll" id="target">
        <div id="scrollbar-container">
          <div id="scrollbar-track">
            <div id="scrollbar-thumb"></div>
          </div>
        </div>
      </div>

      {/* ミュートボタン */}
      <div className="audio_wrap">
        <div className="audio_button"></div>
      </div>

      <div className="hamburger-menu none">
        <div>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <nav>
        <img src="/common/image/menu-flour.webp" alt="花" className="menu-flour" />
        <ul className="gnav-navi-1">
          <li className="nav-item menu-show"><span className="nav-item-in"><a href="#"><span>TOP</span></a></span></li>
          <li className="nav-item menu-show"><span className="nav-item-in"><a href="#about"><span>ABOUT</span></a></span>
            <ul className="works-nav">
              <li className="works-nav-item"><a href="#design"><span>デザイン</span></a></li>
              <span className="nav-partition">/</span>
              <li className="works-nav-item">
                <a href="#3dcg" style={{ fontFamily: "'Montserrat', sans-serif" }}><span>3DCG</span></a>
              </li>
              <span className="nav-partition">/</span>
              <li className="works-nav-item"><a href="#e"><span>絵</span></a></li>
            </ul>
          </li>
        </ul>
      </nav>

      {/* ヘッダー */}
      <header id="fixed-header">
        <a href="/">
          <img src="/common/image/name_logo_diagonal.svg" alt="ヘッダー名前ロゴ" />
        </a>
      </header>

      <div className="all">
        <div className="top-img"></div>

        <div className="back-color-wrapper">
          <div className="top-name">
            <div>
              <img src="/common/image/name_logo_diagonal.svg" alt="TOP名前ロゴ" />
              <h1>PORTFOLIO</h1>
            </div>
          </div>
          <div className="scrolldown1"></div>

          <div className="about target-section" id="about">
            <div className="sub-title">
              <h2><span className="bgextend bgLRextendTrigger"><span className="bgappearTrigger">
                ABOUT
              </span></span></h2>
            </div>

            <div className="about-wrapper snd__tap">
              <div className="name-wrapper">
                <span className="name"><span className="bgextend bgLRextendTrigger"><span className="bgappearTrigger">
                  伊藤 代士
                </span></span></span>
                <span className="english-name"><span className="bgextend bgLRextendTrigger"><span className="bgappearTrigger">
                  Daishi Ito
                </span></span></span>
              </div>
              <div className="detail-wrapper">
                <div>
                  <h3><span className="bgextend bgLRextendTrigger"><span className="bgappearTrigger">
                    私について
                  </span></span></h3>
                  <p><span className="smoothText"><span className="text-show">
                    こんにちは、伊藤代士と申します。ポートフォリオを見てくださりありがとうございます。<br />
                    現在私は、2021年9月に入社した会社で主にデザインやコーディングをして働いております。<br />
                    会社以外では絵を書いたり、3DCGの作品を制作したりもしています。<br />
                    このポートフォリオでは、3DCG・絵・デザインの制作物を載せております。お気軽にご覧下さい。
                  </span></span></p>
                </div>
                <div>
                  <h3><span className="bgextend bgLRextendTrigger"><span className="bgappearTrigger">
                    使用ソフト
                  </span></span></h3>
                  <p className="soft-language"><span className="smoothText"><span className="text-show">
                    <span>Photoshop</span>
                    <span>illustrator</span>
                    <span>CLIP STUDIO PAINT</span>
                    <span>Blender</span>
                    <span>Substance Painter</span>
                    <span>Visual Studio Code</span>
                    <span>Dreamweaver</span>
                  </span></span></p>
                </div>
                <div>
                  <h3><span className="bgextend bgLRextendTrigger"><span className="bgappearTrigger">
                    使用言語
                  </span></span></h3>
                  <p className="soft-language"><span className="smoothText"><span className="text-show">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Sass</span>
                    <span>Javascript(コピペで使う程度)</span>
                  </span></span></p>
                </div>
                <div>
                  <h3><span className="bgextend bgLRextendTrigger"><span className="bgappearTrigger">
                    連絡先
                  </span></span></h3>
                  <p className="soft-language"><span className="smoothText"><span className="text-show">
                    <span>
                      <a href="mailto:soramidoressingu@gmail.com">
                        <img src="/common/image/mail.svg" alt="メールアイコン" />
                        soramidoressingu@gmail.com
                      </a>
                    </span>
                  </span></span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="works" id="works">
            <div className="sub-title">
              <h2><span className="bgextend bgLRextendTrigger"><span className="bgappearTrigger">
                WORKS
              </span></span></h2>
            </div>

            <div className="works-category">
              <h3 id="design"><span className="bgextend bgLRextendTrigger"><span className="bgappearTrigger">
                デザイン
              </span></span></h3>
              <div className="item-wrapper">
                {designWorks.map((work) => (
                  <WorkItem key={work.id} id={work.id} work={work} />
                ))}
              </div>
            </div>

            <div className="works-category">
              <h3 id="3dcg"><span className="bgextend bgLRextendTrigger" style={{ fontFamily: "'Montserrat', sans-serif" }}><span className="bgappearTrigger">
                3DCG
              </span></span></h3>
              <div className="item-wrapper">
                {cgWorks.map((work) => (
                  <WorkItem key={work.id} id={work.id} work={work} />
                ))}
              </div>
            </div>

            <div className="works-category">
              <h3 id="e"><span className="bgextend bgLRextendTrigger"><span className="bgappearTrigger">
                絵
              </span></span></h3>
              <div className="item-wrapper">
                {eWorks.map((work) => (
                  <WorkItem key={work.id} id={work.id} work={work} />
                ))}
              </div>
            </div>
          </div>

          <a id="page-top" href="#">
            <div>
              <img src="/common/image/page-top.svg" alt="TOPへ戻るアイコン" />
            </div>
          </a>
        </div>
      </div>

      <Script type="module" src="/common/js/main.js" strategy="afterInteractive" />
      <Script src="/common/js/text-show.js" strategy="afterInteractive" />
      <Script type="module" src="/common/js/header.js" strategy="afterInteractive" />
      <Script type="module" src="/common/js/Scrollbar.js" strategy="afterInteractive" />
      <Script id="vanilla-tilt-module" type="module" src="/common/js/vanilla-tilt.js" strategy="afterInteractive" />
      <Script type="module" src="/common/js/howler.js" strategy="afterInteractive" />
      <Script src="/common/js/modal.js" strategy="afterInteractive" />
      <Script src="/common/js/menu.js" strategy="afterInteractive" />
      <Script id="vanilla-tilt-classic" src="/common/js/vanilla-tilt.js" strategy="afterInteractive" />
      <ClientEffects />
    </>
  );
}
