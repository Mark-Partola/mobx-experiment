import React from 'react';
import styled from 'styled-components';
import { File } from './components/file';

const items = [
  { isDir: true, name: 'New folder' },
  { isDir: true, name: 'New folder (1)' },
  { isDir: false, name: 'New file' },
  { isDir: false, name: 'New file (1)' },
  { isDir: false, name: 'New file (2)' },
  { isDir: false, name: 'New file (3)' },
  { isDir: false, name: 'Super brand new file (4)' },
  { isDir: false, name: 'New file (5)' },
  { isDir: false, name: 'New file (6)' },
  { isDir: false, name: 'New file (7)' },
  { isDir: false, name: 'New file (8)' },
];

const Explorer = () => {
  return (
    <StyledFilesLayout>
      {items.map((item) => (
        <StyledFileItemLayout key={item.name}>
          <File isDir={item.isDir} name={item.name} />
        </StyledFileItemLayout>
      ))}
    </StyledFilesLayout>
  );
};

const StyledFilesLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledFileItemLayout = styled.div`
  margin: 1vh 1vw;
`;

export { Explorer };
