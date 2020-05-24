import React from 'react';
import styled from 'styled-components';
import { IFileMeta } from '../../../../types/IFileMeta';
import { File } from './components/file';
import { useExplorerStore } from '../../store/use-explorer-store';

const items: IFileMeta[] = [
  { isDir: true, name: 'New folder', path: '/' },
  { isDir: true, name: 'New folder (1)', path: '/' },
  { isDir: false, name: 'New file', path: '/' },
  { isDir: false, name: 'New file (1)', path: '/' },
  { isDir: false, name: 'New file (2)', path: '/' },
  { isDir: false, name: 'New file (3)', path: '/' },
  { isDir: false, name: 'Super brand new file (4)', path: '/' },
  { isDir: false, name: 'New file (5)', path: '/' },
  { isDir: false, name: 'New file (6)', path: '/' },
  { isDir: false, name: 'New file (7)', path: '/' },
  { isDir: false, name: 'New file (8)', path: '/' },
];

const Explorer = () => {
  const explorerStore = useExplorerStore();

  const handleRename = React.useCallback(
    (params) => {
      explorerStore.rename(params);
    },
    [explorerStore]
  );

  return (
    <StyledFilesLayout>
      {items.map((item) => (
        <StyledFileItemLayout key={item.name}>
          <File meta={item} onRename={handleRename} />
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
