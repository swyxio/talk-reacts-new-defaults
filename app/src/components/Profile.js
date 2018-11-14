import React from 'react';

export default function Profile(props) {
  const {
    images,
    name,
    description,
    aliases,
    powers,
    secretIdentities,
    superName,
    authors,
    teams,
    urls
  } = props;
  return (
    <div class="profile__1519442881">
      <header class="profile--header">
        <div class="profile--background">
          <img src={images.background} />
        </div>
        <a href="#" class="profile--close js-profile--close" />
        <div class="profile--name">{superName}</div>
        <div class="profile--thumbnail">
          <img src={images.thumbnail} />
        </div>
      </header>
      <div class="profile--content">
        <p class="profile--description">{description}</p>

        <div class="profile--links">
          <a
            href={urls.marvel}
            target="_blank"
            class="profile--link profile--link__marvel"
          >
            Marvel website
          </a>
          <a
            href={urls.wikipedia}
            target="_blank"
            class="profile--link profile--link__wikipedia"
          >
            Wikipedia
          </a>
        </div>

        <h3 class="profile--title">Teams</h3>
        <ul class="profile--facets">
          {teams.map(team => (
            <li
              class="profile--facet js-profile--facet "
              data-facet-name="teams"
            >
              {team}
            </li>
          ))}
        </ul>

        <h3 class="profile--title">Powers</h3>
        <ul class="profile--facets">
          {powers.map(power => (
            <li
              class="profile--facet js-profile--facet "
              data-facet-name="powers"
            >
              {power}
            </li>
          ))}
        </ul>

        <h3 class="profile--title">Authors</h3>
        <ul class="profile--facets">
          {authors.map(author => (
            <li
              class="profile--facet js-profile--facet "
              data-facet-name="authors"
            >
              {author}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
