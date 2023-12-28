import styled from 'styled-components';

const ActorsList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 20px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

const Actor = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 0px 0px 4px 4px;
  max-width: 200px;
`;

const ActorPhoto = styled.img`
  display: block;
  width: 200px;
  height: 300px;
  margin-bottom: 10px;
`;

const ActorInfo = styled.p`
  margin-bottom: 10px;
  text-align: center;
`;

export { ActorsList, Actor, ActorPhoto, ActorInfo };
