import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 20px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  box-shadow: 0px 2px 1px -1px rgba(46, 47, 66, 0.08),
    0px 2px 1px -1px rgba(46, 47, 66, 0.16),
    0px 3px 6px -6px rgba(46, 47, 66, 0.08);
`;

const Poster = styled.img`
  display: block;
  width: 100%;
  max-width: 250px;
  height: auto;
`;

const Details = styled.div`
  min-width: 200px;
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Text = styled.p`
  margin-bottom: 20px;
`;

const Overview = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Genres = styled.h4`
  font-weight: 500;
  margin-bottom: 10px;
`;

const Genre = styled.li`
  padding: 3px 0;
`;

export { Wrapper, Poster, Details, Title, Text, Overview, Genres, Genre };
