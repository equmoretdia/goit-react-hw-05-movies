import styled from 'styled-components';

const PageHeading = styled.h1`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const PageHeadingHidden = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export { PageHeading, PageHeadingHidden };
