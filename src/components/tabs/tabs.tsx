import { Fragment, useState } from 'react';
import { tabsLinks, TabsType } from '../../const';
import { Film } from '../../types/film';
import TabDetails from '../tab-details/tab-details';
import TabOverview from '../tab-overview/tab-overview';
import TabReviews from '../tab-reviews/tab-reviews';

type FilmTabsProps = {
  film: Film;
}

function Tabs({film}: FilmTabsProps): JSX.Element {
  const [selectedtTab, setSelectedTab] = useState<string>(TabsType.Overview);

  const renderTab = () => {
    switch(selectedtTab) {
      case(TabsType.Overview):
        return <TabOverview film={film} />;
      case(TabsType.Details):
        return <TabDetails film={film}/>;
      case(TabsType.Reviews):
        return <TabReviews />;
      default :
        return <TabOverview film={film} />;
    }
  };

  return (
    <div>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {tabsLinks.map((elem) => (
            <Fragment key={elem.id}>
              <li className={`film-nav__item ${selectedtTab === elem.name ? 'film-nav__item--active' : ''}`}
                onClick={() => setSelectedTab(elem.name)}
              >
                <span className="film-nav__link">{elem.name}</span>
              </li>
            </Fragment>))}
        </ul>
      </nav>
      {renderTab()}
    </div>
  );
}

export default Tabs;
