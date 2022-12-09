import classes from "./Latest.module.css";

const Latest = () => {
  return (
    <div className="container" id="latestStories">
      <div className="compact">
        <h3 className={classes.headr3}>Latest Stories</h3>
        <div class="wrapper">
          <div class="card">
            <div class="card-banner">
              <p class="category-tag popular">Crypto</p>
              <a
                rel="noreferrer"
                href="https://www.cnbc.com/2022/12/07/techs-pandemic-hiring-boom-continues-to-bust-as-plaid-adds-to-layoffs.html"
                target="_blank"
              >
                <img
                  class="banner-img"
                  src="https://image.cnbcfm.com/api/v1/image/107043248-1670522093515-GettyImages-1239795237r.jpg?v=1670522119&w=1260&h=630&ffmt=webp&vtcrop=y"
                  alt=""
                />
              </a>
            </div>
            <div class="card-body">
              <p class="blog-hashtag">#crypto #ftx</p>
              <h2 class="blog-title">
                FTX spokesman Kevin O’Leary says he lost his $15 million payday
                from crypto firm
              </h2>
              <p class="blog-description">
                CNBC contributor Kevin O’Leary told “Squawk Box” anchors that
                he’d lost all of his FTX crypto payday, valued at just under $15
                million.
              </p>

              <div class="card-profile">
                <img
                  class="profile-img"
                  src="https://images.unsplash.com/photo-1532332248682-206cc786359f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  alt=""
                />
                <div class="card-profile-info">
                  <h3 class="profile-name">Rohan Goswami</h3>
                  <p class="profile-followers">THU, DEC 8 202211:30 AM EST</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-banner">
              <p class="category-tag technology">Technology</p>
              <a
                rel="noreferrer"
                href="https://www.cnbc.com/2022/12/07/400-billion-erased-from-european-tech-market-in-2022-atomico-says.html"
                target="_blank"
              >
                <img
                  class="banner-img"
                  src="https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                  alt=""
                />
              </a>
            </div>
            <div class="card-body">
              <p class="blog-hashtag">#tech #finance #europe</p>
              <h2 class="blog-title">
                Over $400 billion has been erased from the value of Europe’s
                tech industry this year
              </h2>
              <p class="blog-description">
                Foreign investors largely retreated from the continent’s tech
                sector, with the number of active U.S. investors in “mega
                rounds” of $100 million or more dropping 22% from last year.
              </p>

              <div class="card-profile">
                <img
                  class="profile-img"
                  src="https://image.cnbcfm.com/api/v1/image/105314604-1530880817365ryancnbc.jpg?v=1624364566&w=60&h=60&ffmt=webp"
                  alt=""
                />
                <div class="card-profile-info">
                  <h3 class="profile-name">Darrell Steward</h3>
                  <p class="profile-followers">WED, DEC 7 202212:50 AM EST</p>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-banner">
              <p class="category-tag psychology">Fintech</p>
              <a
                rel="noreferrer"
                href="https://www.cnbc.com/2022/12/07/techs-pandemic-hiring-boom-continues-to-bust-as-plaid-adds-to-layoffs.html"
                target="_blank"
              >
                <img
                  class="banner-img"
                  src="https://image.cnbcfm.com/api/v1/image/106825249-1610725988772-gettyimages-1197857097-SILICON_SLOPES_SUMMIT.jpeg?v=1670437109&w=740&h=416&ffmt=webp&vtcrop=y"
                  alt=""
                />
              </a>
            </div>
            <div class="card-body">
              <p class="blog-hashtag">#fintech #plaid</p>
              <h2 class="blog-title">
                Tech’s pandemic hiring boom continues to bust as fintech Plaid
                adds to mounting layoffs
              </h2>
              <p class="blog-description">
                Fintech firm Plaid is laying off about 260 employees, adding to
                the recent wave of cuts from tech companies.
              </p>

              <div class="card-profile">
                <img
                  class="profile-img"
                  src="https://image.cnbcfm.com/api/v1/image/107138142-1666280785828-Barbara_Collins_Headshot.jpg?v=1666280852&w=60&h=60&ffmt=webp"
                  alt=""
                />
                <div class="card-profile-info">
                  <h3 class="profile-name">Barbara Collins</h3>
                  <p class="profile-followers">WED, DEC 7 20225:24 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
