import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  flex: 1 1 400px;
  color: rgb(128, 128, 128);
  .title {
    margin: 0;
    color: #fff;
    font-size: 1.9rem;
    text-shadow: 1px 1px 1px grey;
  }
  article {
    margin: 5px;
    height: 200px;
    overflow: hidden;
    border: 1px solid #d4d7d9;
    box-shadow: 0 1px 0 #c5cad8, 0 2px 3px #d4d8e3;
    display: flex;
    flex-flow: row nowrap;
    cursor: pointer;
  }
  .thumbnail {
    flex: 0 1 33%;
    position: relative;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
  }
  .content {
    flex: 1 1;
    padding: 0.5rem 1rem;
    position: relative;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
    font-size: 0.75rem;
  }
`;
export default function Card(props) {
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
    <Div>
      <article>
        <div
          className="thumbnail"
          style={{ backgroundImage: `url(${images.thumbnail})` }}
        />

        <div
          className="content"
          // style={{ backgroundImage: `url(${images.background})` }}
          style={{
            backgroundImage: `url("http://i.annihil.us/u/prod/marvel/i/mg/5/03/537bb03773238.gif")`
          }}
        >
          <h3 className="title">{superName}</h3>

          <div>
            <p>{description}</p>
          </div>
        </div>
      </article>
    </Div>
  );
}
