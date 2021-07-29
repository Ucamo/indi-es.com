import PropTypes from 'prop-types';
import Markdown from 'components/markdown';
import Callout from 'components/callout';

import { Page } from 'components/layouts';
import Event from 'components/event';

import style from './style.module.css';

function getNewEvents(events) {
  return events.filter(({ endDate, isPublished }) => {
    if (!isPublished) return false;
    const end = new Date(endDate);
    const now = new Date();
    return end > now;
  });
}

const text = `
## Sin eventos esta semana

Normalmente aquí aparecen los próximos eventos pero parece que no tenemos ninguno programado.

---

Mientras tanto puedes checar:

- [Nuestra base de datos de estudios mexicanos.](/estudios)
- [El newsletter con lo mejor de la semana.](/newsletter)
- [El servidor de discord.](https://discord.com/invite/z9eyp8a)
- [Nuestra lista de recursos.](/recursos)
`;

function Home({ events }) {
  const newEvents = getNewEvents(events);
  const hasEvents = newEvents.length > 0;
  return (
    <Page className={style.page}>
      <div className={`${style['home-wrapper']} wrapper`}>
        {!hasEvents ? (
          <section className={style['empty-events']}>
            <Callout>
              <Markdown className={`${style['empty-events-message']}`}>
                {text}
              </Markdown>
            </Callout>
          </section>
        ) : null}
        {hasEvents ? (
          <section className={style['events-list']}>
            {newEvents.map((event) => {
              return <Event {...event} key={event.title} />;
            })}
          </section>
        ) : null}
      </div>
    </Page>
  );
}

Home.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Home;
